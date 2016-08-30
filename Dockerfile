FROM smebberson/alpine-nginx-nodejs

COPY package.json /app/
WORKDIR /app

RUN npm install

COPY .babelrc ./
COPY gulpfile.js ./
COPY bower.json ./

COPY nginx/*.conf /etc/nginx/conf.d/

COPY ./www ./www
COPY ./scss ./scss
RUN npm run build
