FROM node:18.14.1-alpine3.17
EXPOSE 45287

WORKDIR /app

COPY ./package*.json ./
RUN npm install --only=production

COPY app.js ./
COPY libs ./libs
COPY protos ./protos

CMD ["npm start"]

