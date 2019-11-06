FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/nginx.conf /etc/nginx/
COPY nginx/default.conf /etc/nginx/conf.d/

COPY dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]