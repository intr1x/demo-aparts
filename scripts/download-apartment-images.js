const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SITE_URL = 'https://apartmentmoscowcity.ru/snyat-nomer';
const OUTPUT_DIR = path.join(__dirname, '../public/apartments');

// Создаем директорию если её нет
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Функция для загрузки HTML
function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Функция для скачивания изображения
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const filepath = path.join(OUTPUT_DIR, filename);
    
    protocol.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        // Следуем редиректу
        return downloadImage(res.headers.location, filename)
          .then(resolve)
          .catch(reject);
      }
      
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Скачано: ${filename}`);
        resolve(filepath);
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Удаляем частично скачанный файл
        reject(err);
      });
    }).on('error', reject);
  });
}

// Функция для получения расширения из URL
function getExtension(url) {
  const match = url.match(/\.(jpg|jpeg|png|gif|webp)(\?|$)/i);
  return match ? match[1] : 'jpg';
}

// Главная функция
async function main() {
  try {
    console.log('Загрузка страницы...');
    const html = await fetchHTML(SITE_URL);
    
    console.log('Парсинг HTML...');
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Ищем все изображения внутри блоков с апартаментами
    const images = new Set();
    
    // Вариант 1: Ищем все изображения на странице
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
      const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
      if (src) {
        // Пропускаем иконки, логотипы и маленькие изображения
        if (!src.includes('icon') && !src.includes('logo') && !src.includes('.svg')) {
          images.add(src);
        }
      }
    });
    
    // Вариант 2: Ищем background-image в стилях
    const elementsWithBg = document.querySelectorAll('[style*="background-image"]');
    elementsWithBg.forEach(el => {
      const style = el.getAttribute('style');
      const match = style.match(/url\(['"]?(.*?)['"]?\)/);
      if (match && match[1]) {
        images.add(match[1]);
      }
    });
    
    console.log(`Найдено изображений: ${images.size}`);
    
    if (images.size === 0) {
      console.log('Изображения не найдены. Попробуем другой подход...');
      
      // Альтернативный подход: ищем ссылки на страницы апартаментов
      const links = document.querySelectorAll('a[href]');
      const apartmentLinks = [];
      
      links.forEach(link => {
        const href = link.href;
        if (href && (href.includes('/apartment/') || href.includes('/aparts/'))) {
          apartmentLinks.push(href);
        }
      });
      
      console.log(`Найдено ссылок на апартаменты: ${apartmentLinks.length}`);
    }
    
    // Скачиваем изображения
    let counter = 1;
    const downloadPromises = [];
    
    for (const imgUrl of images) {
      let fullUrl = imgUrl;
      
      // Преобразуем относительные URL в абсолютные
      if (imgUrl.startsWith('/')) {
        fullUrl = 'https://apartmentmoscowcity.ru' + imgUrl;
      } else if (!imgUrl.startsWith('http')) {
        fullUrl = 'https://apartmentmoscowcity.ru/' + imgUrl;
      }
      
      const ext = getExtension(fullUrl);
      const filename = `apartment-${counter.toString().padStart(3, '0')}.${ext}`;
      
      downloadPromises.push(
        downloadImage(fullUrl, filename).catch(err => {
          console.error(`✗ Ошибка при скачивании ${filename}:`, err.message);
        })
      );
      
      counter++;
      
      // Скачиваем по 5 изображений одновременно
      if (downloadPromises.length >= 5) {
        await Promise.all(downloadPromises);
        downloadPromises.length = 0;
      }
    }
    
    // Скачиваем оставшиеся
    if (downloadPromises.length > 0) {
      await Promise.all(downloadPromises);
    }
    
    console.log('\n✓ Все изображения скачаны!');
    console.log(`Папка: ${OUTPUT_DIR}`);
    
  } catch (error) {
    console.error('Ошибка:', error);
    process.exit(1);
  }
}

main();

