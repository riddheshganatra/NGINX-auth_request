FROM nginx:alpine
COPY dev.conf /etc/nginx/nginx.conf
EXPOSE 80
