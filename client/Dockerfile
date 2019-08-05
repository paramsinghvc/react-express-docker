FROM alpine
LABEL maintainer="paramsinghvc@gmail.com"
RUN apk add --update nodejs nodejs-npm
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start