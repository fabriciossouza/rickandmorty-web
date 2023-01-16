FROM node:14.21.0-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
COPY --from=build /app/default.conf.template /usr/share/nginx/html
CMD /bin/sh -c "envsubst '\$PORT' < /usr/share/nginx/html/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
EXPOSE 80