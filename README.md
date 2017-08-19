This project is developed on `mac OSX`, `node v8.2.1`, `npm v5.3.0` and bootstrapped with [Create-React-App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Setup Instructions](#setup-instructions-stand-alone-mode)
- [Verify node and npm version](#verify-node-and-npm-version)
- [Start Application](#start-application)
- [Running Test](#running-test)
- [Container Orchestration](#container-orchestration)
- [Libraries Used](#libraries-used)
- [Next Iterations](#next-iterations)

## Setup Instructions (Stand alone mode)
- Install node/npm to run the project.
- Intall YARN [Optional] 

#### Direct Install (Windows / MacOSX)
Install NodeJS directly using msi / dmg installer from [NodeJS Download Page](https://nodejs.org/en/download/)

#### HomeBrew for OSX
HomeBrew is the easiest way for OSX users. [Getting started with HomeBrew](https://brew.sh/)
```
# HomeBrew command
brew install node
``` 
#### MacPorts for OSX
MacPorts is another package installer for OSX users. [Getting started with MacPorts](https://www.macports.org/index.php)
```
# MacPort commands
port install nodejs 
``` 
**More information about node installation via package manager can be found [here](https://nodejs.org/en/download/package-manager/).**

## Verify node and npm version
Once you've installed NodeJS into your system, verify it by running following commands.
```
node --version
npm --version
```

## Start Application
Run following command from the **Project-Root** `cd [path/to/project/directory]`, it will start an embedded local web-server at `port 3000`.  
```
# Node
npm start
```
 
```
# Yarn
yarn start
```
Now, nytimes-react app can be reached at `localhost:3000`.  

> **YARN** Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.
>Curious about [YARN](https://yarnpkg.com/en/)? 
>Please visit -[Getting started with YARN](https://yarnpkg.com/en/docs/getting-started)

## Running Test
The project contains unit-test coverage for most of the react-components and other pieces that put the app together.
Run following command from the **Project-Root** `cd [path/to/project/directory]`, it will start running test-suites for the app.

####Interactive Mode  
```
# Node
npm test
 
# Yarn
yarn test
```
- Press **`a`** to run all the tests
- Press **`q`** to quit

####Non-Interactive Mode / CI Mode
```
# npm
CI=true npm test
 
# yarn
CI=true yarn test
```
##### You can add **`CI=true`** for any test command that you would like to run in non-interactive mode. 

#### Check Coverage
```
# npm
npm test -- --coverage
 
# non-cached version
npm test -- --coverage --no-cache
``` 
```
# yarn
yarn test:coverage
 
# non-cached version
yarn test:coverageNC 
```

#### Update Snapshot
Once you update component ( `presentational` **or** `container` ), you need to update snapshot-test of that holds previous state of the component.
```
# npm
npm test -- -u
 
# yarn 
yarn test:updateSnapshot

```

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

## Libraries Used

Following is the list of the libraries used for the project :-
- Development Libraries 
    - Core 
        - ReactJS : `react`, `react-dom`
        - State Container : `redux`
        - Routing : `react-router`
    - Middleware
        - Redux Middleware : `redux-saga`
    - Service Layer
        - HTTPClient : `axios`
    - Other
        - Styling Library : `styled-components`
        - Bootstrap : `react-bootstrap`
        - Infinite Scrolling : `react-infinite-scroller`
- Testing Libraries
    - Node based Test Runner : `jest`
    - Testing utility for React : `enzyme`
    - Snapshot test for React components : `react-test-renderer`
    - Standalone test spies, stubs, mocks : `sinon`
    - HTTP Mocking and expectations library : `nock`
          
>  Don't reinvent the wheel, just realign it.”  ―Anthony J. D'Angelo


## Next Iterations
> Don’t Let The Perfect Be The Enemy Of The Good

Stay tuned for - Documentation with App-Architecture, directory structure and other additional information.
