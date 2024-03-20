#!/bin/bash

set -e

cd ..
npx vite build

cd build
rm -r dist/ || true
cp -r ../dist dist/

sudo docker build -t eventhub:latest .
