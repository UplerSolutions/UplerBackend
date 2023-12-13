FROM node:18-alpine

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

ENV DB_DATABASE=database
ENV DB_HOST=ep-square-pine-20615424.us-east-2.aws.neon.fl0.io
ENV DB_PASSWORD=nftkvOh5S7Wa
ENV DB_PORT=5432
ENV DB_ROOT_PASSWORD=nftkvOh5S7Wa
ENV DB_ROOT_USER=fl0user
ENV DB_USER=fl0user
ENV JWT_SECRET=Upler2023+
ENV PORT=10005
ENV RESEND_API_KEY=re_4JvaANaU_GDLoCTk8gH1foHqpEuTPaUpZ



EXPOSE 8000

CMD ["npm","start"]