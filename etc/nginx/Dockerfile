from nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
CMD rm -rf /etc/nginx/conf.d/*

CMD ["nginx", "-g", "daemon off;"]
