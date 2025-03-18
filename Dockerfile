FROM node:22
WORKDIR /app
ADD . /app
RUN chmod +x ./startup.sh
RUN npm i
RUN npm run build
CMD ./startup.sh