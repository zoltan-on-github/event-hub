FROM node:lts-alpine3.19

LABEL Christian Lück <christian@lueck.tv>

RUN npm config set proxy "$HTTP_PROXY"
RUN npm config set https-proxy "$HTTP_PROXY"

# version 0.17.4: service is not accessible from outside of the container
#RUN npm install -g json-server@0.17.4
RUN npm install -g json-server

RUN apk add bash

WORKDIR /data
VOLUME /data

EXPOSE 80
ADD run.sh /run.sh
ENTRYPOINT ["bash", "/run.sh"]
CMD []
