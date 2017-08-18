This project is developed on `mac OSX`, `node v8.2.1`, `npm v5.3.0` and bootstrapped with [Create-React-App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Setup Instructions](#setup-instructions-stand-alone-mode)
- [Container Orchestration](#container-orchestration)
- [Next Iterations](#next-iterations)

## Setup Instructions (Stand alone mode)
Install node/npm to run the project. 
HomeBrew is the easiest way for OSX users. [Getting started with HomeBrew](https://brew.sh/)
### Install node
```
brew install node
``` 
### Verify node and npm version
```
node --version
npm --version
```

### Start application
Run following command from the project-root, it will start an embedded local web-server at `port 3000`.  
```
npm start
```
Now, nytimes-react app can be reached at `localhost:3000`.  

## Container Orchestration
This project also supports container orchestration using Docker community edition. More information about docker can be found at [here](https://www.docker.com/what-docker#/developers).

Pre-requisite : Install docker on your local machine
- [Community Edition for Mac OSX ](https://store.docker.com/editions/community/docker-ce-desktop-mac)
- [Community Edition for Windows ](https://store.docker.com/editions/community/docker-ce-desktop-windows)

Before running this project in docker container, we need to create a docker image. 
Navigate to the root directory of the project checkout and run `build_docker_img.sh` script.

Run following commands in the terminal :
```
# navigate to project root
cd [/path/to/nytimes-react]
 
# run a script
./build_docker_img
``` 

## Next Iterations
> Don’t Let The Perfect Be The Enemy Of The Good

Stay tuned for following updates,
- Detailed documentation with App-Architecture, directory structure and other additional informations
- Testing coverage for UI : Unit testing, Snapshot testing, Behavioral testing
- Inline documentation for developer guide. 
