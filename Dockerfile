FROM node:18.12.1-alpine3.17
EXPOSE 5000

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY server.js ./
COPY coreFunctions ./coreFunctions
COPY libs ./libs
COPY protos ./protos

CMD ["npm", "start"]