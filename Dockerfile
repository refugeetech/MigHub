FROM joshix/caddy
EXPOSE 80
EXPOSE 443
COPY ./www/ /var/www/html/
