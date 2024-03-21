FROM node:latest
LABEL Christian Lück <christian@lueck.tv>

RUN npm config set proxy "$HTTP_PROXY"
RUN npm config set https-proxy "$HTTP_PROXY"

RUN npm install -g json-server

WORKDIR /data
VOLUME /data

EXPOSE 80
ADD run.sh /run.sh
ENTRYPOINT ["bash", "/run.sh"]
CMD []
