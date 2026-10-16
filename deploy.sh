#!/bin/bash
# Se ejecuta en el servidor EC2: publica el build de React en Apache
set -e

WEB_DIR=/var/www/html

# Instalar Apache si no existe (Ubuntu: apache2 / Amazon Linux: httpd)
if command -v apt-get >/dev/null; then
  SERVICE=apache2
  dpkg -s apache2 >/dev/null 2>&1 || (sudo apt-get update -y && sudo apt-get install -y apache2)
else
  SERVICE=httpd
  rpm -q httpd >/dev/null 2>&1 || sudo yum install -y httpd
fi

sudo rm -rf "$WEB_DIR"/*
sudo cp -r /tmp/dist/* "$WEB_DIR"/
rm -rf /tmp/dist /tmp/deploy.sh

sudo systemctl enable "$SERVICE"
sudo systemctl restart "$SERVICE"

echo "✅ Sitio desplegado en Apache ($SERVICE)"
