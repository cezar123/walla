FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3001
CMD [ "npm" , "run" , "start" ]