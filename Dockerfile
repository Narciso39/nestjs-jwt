# Use uma imagem oficial do Node.js como base
FROM node:22-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Realiza o build da aplicação NestJS
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Define o comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]
