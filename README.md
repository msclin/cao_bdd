# Overview

This code repository contains some end-to-end tests for a couple of features of [The Common Application's](http://www.commonapp.org/) college application software.  Specifically, it tests the forgot password and login features using a test account.

## Instructions

To run this code, follow these steps:

1. If you do not have [Node.js](https://nodejs.org/en/), then download the latest version [here](https://nodejs.org/en/) for your operating system.
2. Clone this repository by running the following command where you would like the code stored:

```
git clone https://github.com/msclin/cao_bdd.git
```

3. Change into the directory that was created as part of Step 2.
4. Run the following command to install the dependencies:

```
npm install
```

5. Download the latest version of Chrome Driver [here](https://sites.google.com/a/chromium.org/chromedriver/).
6. Download the latest version of Selenium Webdriver [here](http://www.seleniumhq.org/projects/webdriver/).
7. Run Selenium Webdriver using the following command (note: the file name may be different if you download a different version of Selenium Webdriver):

```
java -jar selenium-server-standalone-3.6.0.jar
```
8. In the directory from Step 2, run the following command to run all of the tests:

```
node_modules/.bin/nightwatch 
```

This will run the entire test suite.  In addition, you can also run tests by tags.  For instance, if you wanted to run only the login tests, run the following command:

```
node_modules/.bin/nightwatch --tag login
```