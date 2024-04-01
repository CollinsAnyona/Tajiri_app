# Tajiri Web Application

Welcome to the Tajiri web application repository! This repository contains the source code and Dockerfile for the Tajiri web application. Tajiri web application simply enables a user to create and manage tasks.

## Prerequisites

Before running the application, ensure you have the following software installed on your machine:

- Node.js
- Docker

## Running the Application Locally

To run the application locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/CollinsAnyona/Tajiri_app.git


2. Navigate to the project directory:
cd Tajiri_app

3. Install dependencies:
npm install

4. Start the application:
npm start
The application will be accessible at http://localhost:3000 in your web browser.

To build and run the docker image:
Build the docker image:
	docker build -t tajiri-app .
Run a docker container:
docker run -p 3000:3000 tajiri-app

This repository includes the HTML, CSS, and JavaScript files required to run the application. You can find them in the public directory


