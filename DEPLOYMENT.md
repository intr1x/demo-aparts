# Деплой на VPS (Beget / Reg.ru)

## Подготовка VPS

### 1. Подключитесь к серверу
```bash
ssh root@your-server-ip
```

### 2. Установите Docker и Docker Compose
```bash
# Обновите систему
apt update && apt upgrade -y

# Установите Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Установите Docker Compose
apt install docker-compose -y

# Проверьте установку
docker --version
docker-compose --version
```

### 3. Установите Nginx
```bash
apt install nginx -y
systemctl enable nginx
```

## Деплой приложения

### 1. Скопируйте проект на сервер
```bash
# На вашем компьютере
rsync -avz --exclude 'node_modules' --exclude '.next' \
  /Users/nikita/Desktop/Projects/Aparts/ \
  root@your-server-ip:/var/www/aparts/
```

### 2. Создайте .env на сервере
```bash
# На сервере
cd /var/www/aparts
nano .env
```

Добавьте:
```env
PAYLOAD_SECRET=ваш_сложный_случайный_ключ_минимум_32_символа
DATABASE_URI=postgres://postgres:ваш_надежный_пароль@postgres:5432/aparts
NEXT_PUBLIC_SERVER_URL=https://ваш-домен.ru
DB_PASSWORD=ваш_надежный_пароль
```

### 3. Запустите контейнеры
```bash
docker-compose up -d --build
```

Проверка:
```bash
docker-compose ps
docker-compose logs app
```

### 4. Настройте Nginx

Создайте конфиг:
```bash
nano /etc/nginx/sites-available/aparts
```

Добавьте:
```nginx
server {
    listen 80;
    server_name ваш-домен.ru www.ваш-домен.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Активируйте конфиг:
```bash
ln -s /etc/nginx/sites-available/aparts /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 5. Установите SSL (Let's Encrypt)
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d ваш-домен.ru -d www.ваш-домен.ru
```

## Обслуживание

### Обновление кода
```bash
cd /var/www/aparts
git pull  # если используете git
docker-compose down
docker-compose up -d --build
```

### Просмотр логов
```bash
docker-compose logs -f app
docker-compose logs -f postgres
```

### Бэкап базы данных
```bash
docker-compose exec postgres pg_dump -U postgres aparts > backup_$(date +%Y%m%d).sql
```

### Восстановление из бэкапа
```bash
docker-compose exec -T postgres psql -U postgres aparts < backup_20260106.sql
```

