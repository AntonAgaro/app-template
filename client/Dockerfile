FROM node:lts-alpine
EXPOSE $CLIENT_PORT

RUN mkdir app

COPY . .
RUN npm install && npm run build


CMD ["npm", "run", "preview"]