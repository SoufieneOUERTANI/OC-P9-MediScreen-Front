# FROM node:alpine3.14 as build
# RUN mkdir -p /app

# WORKDIR /app

# COPY package.json /app/
# RUN npm install

# COPY . /app/
# ENV NODE_OPTIONS=--openssl-legacy-provider
# RUN npm run build

########################################
# => ng build
FROM nginx:1.21.4-alpine
# FROM nginx:alpine
COPY /dist/mediscreen-ui /usr/share/nginx/html
# COPY --from=build /app/dist/mediscreen-ui /usr/share/nginx/html