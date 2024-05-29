FROM node:20.11.1-alpine AS builder

ENV NODE_ENV=build

ENV DEPLOY_PATH=/app
WORKDIR $DEPLOY_PATH

COPY . ./

RUN npm ci
RUN npm run build
RUN apk update && apk add curl

# Generate metadata
RUN cat package.json | grep version | sed 's/  "version": "//g' | sed 's/",//g' > package.version.txt
RUN cat package.json | grep name | sed 's/  "name": "//g' | sed 's/",//g' > package.name.txt
RUN cat package.json | grep description | sed 's/  "description": "//g' | sed 's/",//g' > package.description.txt

# Run
EXPOSE 80
EXPOSE 3000

CMD npm run start:prod
