# Use a imagem oficial do Node.js como base
FROM node:21.7.1-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
