FROM node:12-slim
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm install --only=production
COPY . ./
EXPOSE 3000
CMD npm run dev
