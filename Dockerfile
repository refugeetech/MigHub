FROM node
EXPOSE 80
EXPOSE 443
COPY package.json /app/
WORKDIR /app
RUN npm install
COPY . /app
EXPOSE 80
ENV PORT 80
CMD npm start

