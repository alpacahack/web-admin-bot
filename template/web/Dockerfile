FROM node:26.1.0-trixie-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY index.js ./
CMD ["node", "index.js"]
