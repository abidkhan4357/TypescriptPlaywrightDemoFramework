# Playwright TypeScript Demo Framework

## Overview
This is a sample project that uses a combination of json file for data driven, builder pattern for running test with random data
and with page object model/fixtures as a base design. For the demo purpose test cases are created on https://automationexercise.com/ site

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Execution in local](#execution-in-local)
  - [Execution in Docker](#execution-in-docker)

## Features

## Getting Started

### Prerequisites
- Nodejs: Download and install nodejs from [here](https://nodejs.org/en/download)
- Visual Studio Code: Download and install VS Code from [here](https://code.visualstudio.com/)

### Execution in local
1. Clone the repository:

   ```sh
   git clone git@github.com:abidkhan4357/TypescriptPlaywrightDemoFramework.git
   ```
2.  Navigate to root project directory and install the following
    * Install npm packages using
    ```
    npm install
    ```
    * If this is your first time with nodejs playwright framework you will need to download the required browsers
    ```
    npx playwright install
    ```
 3. In root project directory to execute below command to run all test
    ```
    npx playwright test
    ```
      **Note**: By default tests will run in headless and in parallel. 
        If you would like to run in headed mode use __--headed__ flag and/or if you like to disable parallelism use __--workers=1__
        eg:
        ```
        npm playwright test --headed --workers=1
        ```

**Optional:** If you would like to execute tests using IDE and playwright runner. Open VS code and download the extension: **Playwright Test for VS Code** 


### Execution in Docker
1. Clone the repository:

   ```sh
   git clone git@github.com:abidkhan4357/TypescriptPlaywrightDemoFramework.git
   ```
2.  Navigate to root project directory 

3. Build the docker image
 ```
 docker build -t <imagename> .
 ```
4. Run the Docker container
```
docker run <imagename>
```
