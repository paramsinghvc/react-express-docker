FROM node:12.8.0-alpine
WORKDIR /client
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start