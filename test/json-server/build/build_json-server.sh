#!/bin/bash

set -e

MY_PROXY="http://10.158.100.108:8080"
#
sudo docker build -t eventhub-json-server:latest --build-arg HTTP_PROXY=$MY_PROXY --build-arg HTTPS_PROXY=$MY_PROXY .
