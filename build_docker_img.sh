#!/bin/bash

# following command will cause the shell to exit immediately if a simple command exits with a nonzero exit value.
set -e

# install node_modules
yarn

# build a project
yarn build

# build your docker image
docker build -t rpatel-nytimes-react .

# push your docker image
# docker push... (Currently, not pushing anything to DockerHub)

# run cleanup commands so you don't amass images that you don't need
docker rm -v $(docker ps -a -q -f status=exited) 2>&1
docker rmi $(docker images -f "dangling=true" -q) 2>&1