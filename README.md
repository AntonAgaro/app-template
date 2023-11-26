# Template for developing with docker
It is implied that vite will be used on the client.
You have to create .env files. See compose files and .env.production for vite. See https://vitejs.dev/guide/env-and-mode#env-files

## Dev mode
***docker compose -f compose.dev.yaml up --build***

## Prod mode
***docker compose up***

## HOSTING
* docker build --platform linux/amd64 -t {image_name:tag} . for client and server
* docker pull {rep_name_on_docker_hub} for client and server

## vite.config.ts
* Create server: {
host: true,
port: PORT
},
* In package.json "preview": "vite preview --port=5173"
