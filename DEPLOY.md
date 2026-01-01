# Развертывание на irinasketch.online

## Что нужно сделать:

### 1. Заказать VDS/VPS сервер

Закажите сервер на reg.ru или другом хостинге:
- Минимальная конфигурация (1-2 CPU, 1-2 GB RAM)
- Ubuntu 22.04
- Получите IP-адрес, SSH ключ и пароль

### 2. Настройка GitHub Secrets

В репозитории → Settings → Secrets and variables → Actions добавьте:

- **DEPLOY_SSH_KEY**: Приватный SSH ключ от сервера
- **DEPLOY_USER**: Имя пользователя (обычно `root`)
- **DEPLOY_HOST**: IP-адрес сервера

### 3. Настройка сервера

Подключитесь к серверу по SSH и выполните:

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка nginx
sudo apt install nginx -y

# Создание директории для сайта
sudo mkdir -p /var/www/irinasketch.online
sudo chown -R $USER:$USER /var/www/irinasketch.online

# Настройка nginx
sudo tee /etc/nginx/sites-available/irinasketch.online << 'EOF'
server {
    listen 80;
    server_name irinasketch.online www.irinasketch.online;
    
    root /var/www/irinasketch.online;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Активация сайта
sudo ln -s /etc/nginx/sites-available/irinasketch.online /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Настройка домена

1. Если домен irinasketch.online на reg.ru:
   - Добавьте A-запись: `[IP_ВАШЕГО_СЕРВЕРА]`
   - Добавьте WWW-запись: `[IP_ВАШЕГО_СЕРВЕРА]`

2. Если домен elsewhere:
   - Настройте DNS так же

### 5. SSL сертификат (рекомендуется)

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx -y

# Получение сертификата
sudo certbot --nginx -d irinasketch.online -d www.irinasketch.online
```

### 6. Процесс деплоя

После настройки:
1. Сделайте commit и push в репозиторий
2. GitHub Actions автоматически соберет и развернет проект
3. Сайт будет доступен по https://irinasketch.online

### 7. Проверка

Проверьте:
- irinasketch.online открывается
- HTTPS работает
- Все стили загружаются
- React роутинг работает

## Если нужна помощь

Предоставьте:
- IP-адрес сервера
- Доступ по SSH (ключ или пароль)
- Информацию о регистраторе домена
