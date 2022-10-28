FROM node:18.8.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@5.0.1 -g

CMD ["npm", "run", "start"]

