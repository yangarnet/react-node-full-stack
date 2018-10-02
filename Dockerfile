# this is the starting point
FROM node:8.9-alpine

# make a dir
RUN mkdir -p /app

# set working directory
WORKDIR /app


COPY package.json /app


RUN yarn install

# bundle app resouces, to the docker image location
COPY . /app

# set the port, the container will listen to 3000 at runtime
EXPOSE 3000

# tells docker how to run the application
CMD ["yarn", "start"]

