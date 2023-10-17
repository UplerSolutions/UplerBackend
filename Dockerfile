FROM node:18-alpine

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

ENV NODE_ENV=production
ENV PORT=10005
ENV DB_PORT=6209
ENV DB_DATABASE=railway
ENV DB_ROOT_USER=root
ENV DB_USER=root
ENV DB_ROOT_PASSWORD=b0kYtNrNXRiedmibaLmz
ENV DB_PASSWORD=b0kYtNrNXRiedmibaLmz
ENV DB_HOST=containers-us-west-90.railway.app
ENV JWT_SECRET=Upler2023+



EXPOSE 8000

CMD ["npm","start"]