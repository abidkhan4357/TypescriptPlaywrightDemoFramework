# Playwright TypeScript Demo Framework

## Overview
This is a sample project that utilizes playwright build in runner with page object model/fixtures as a base design. For the demo purpose test cases are created on https://automationexercise.com/ site

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Execution in local](#execution-in-local)
  - [Execution in Docker](#execution-in-docker)
- [Coming Soon](#coming-soon)
- [GitHub Actions](#github-actions)
- [Contributing](#contributing)

## Features
- Test data usage of json file for data driven, builder pattern with faker library and custom data factory templates
- Attach video and screen shot on failure to build in playwright html report
- Playwright storage state and usage of global setup for one time login
- Environment json file to run test easily in QA or Dev environments (Note: This is an example as we do not have a Dev env)
- Usage of fixtures for cleaner page object model
- Supports serial and Parallel execution
- Easily add more test for testing restful apis

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
 3. In root project directory to execute below command to run all UI and API testS
    ```
    npx playwright test
    ```
    * If you need to run api or ui tests only 
    
     API:
     ```
     npm run test:api
     ```  
     UI:
     ```
     npm run test:ui
     ```
     * If you want to run on a specific firefox or webkit you can run the following command. By default project will run on chromium
     
     Firefox:
     ```
     BROWSER=firefox npm run test:ui
     ```
     Webkit:
     ```
     BROWSER=webkit npm run test:ui
     ```
     
      **Note**: By default tests will run in headless and in parallel. 
        If you would like to run in UI tests headed mode use __--headed__ flag and/or if you like to disable parallelism use __--workers=1__
        eg:
        ```
        npm playwright test --headed --workers=1
        ```
        
**Optional:** If you would like to execute tests using IDE and playwright runner. Open VS code and download the extension: **Playwright Test for VS Code**. 
You can also enable the NPM SCRIPTS in the the VS Code explorer and can run them like that


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
## Coming Soon
- Supporting all playwright browsers(To be able to set easily as command)
- Improve of execution using ENV(cross-env) instead of json file
- Usage of alias for cleaner imports
- Set up CI/D tool Jenkins
- Selenium grid support
- SonarQube integration

## Github Actions
- The github action workflow file is located in directory .github/workflows file name _playwright.yml_
- The workflow is triggered on every push to master branch or when a pull request is created 
- The workflow consist of two jobs: ui-test and api-test.

## Contributing
I am open to contributions from the community to this Playwright project! Whether you're interested in adding new features, fixing bugs, or improving documentation, I would love to have your contributions and collaborate with you to make this project better. Please note if you're changes 
are big, raise a issue to discuss the changes first.
