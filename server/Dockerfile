FROM node:12.8.0-alpine
WORKDIR /server
COPY ./package.json .
RUN npm install
COPY ./src ./src
EXPOSE 5000
CMD npm start