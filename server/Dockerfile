FROM node:lts-alpine
EXPOSE $SERVER_DOCKER_PORT
RUN mkdir app
COPY . .
RUN npm install && npm run build
CMD npm run start
