FROM node:16.16.0-slim

run apt install bash

WORKDIR /home/node/app

USER node

CMD [ ".docker/start.sh" ]