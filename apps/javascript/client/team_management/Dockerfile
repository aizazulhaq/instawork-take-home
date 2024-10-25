
FROM node:18-alpine

WORKDIR /app

COPY package*.json      ./

RUN npm install

RUN npm i -g serve

COPY ./src              ./src
COPY ./public           ./public
COPY components.json    ./
COPY index.html         ./
COPY postcss.config.js  ./
COPY tailwind.config.js ./
COPY tsconfig.app.json  ./
COPY tsconfig.json      ./
COPY tsconfig.node.json ./
COPY tsr.config.json    ./
COPY vite.config.ts     ./

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]
