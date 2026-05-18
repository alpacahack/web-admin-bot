FROM node:25.2.1-bookworm-slim
ENV PUPPETEER_SKIP_DOWNLOAD=true
WORKDIR /app

RUN apt update && apt install -y chromium && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm i --omit=dev

COPY . .
USER node

CMD [ "node", "index.js" ]
