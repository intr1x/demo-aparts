import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <h3 className="font-bold text-2xl mb-4 tracking-tight">Aparts</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Премиальные апартаменты в Москва-Сити
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground/60">
              Навигация
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/catalog" 
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link 
                  href="/parking" 
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Паркинг
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacts" 
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground/60">
              Контакты
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Москва, Пресненская наб. 10
            </p>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aparts. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
