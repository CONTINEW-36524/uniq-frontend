FROM node:18.8.0

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
COPY ./ ./

CMD ["npm", "run", "start"]

