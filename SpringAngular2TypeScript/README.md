# Spring-Angular2TypeScript

This is an example of implementation of a 'Full Stack Web Application'.

- Spring Boot on the backend
- AngularJS 2 Beta on the frontend
- TypeScript as frontend language

If you want to build from the sources:
1. install node.js
2. install typescript
3. in the webClient/src/ directory there is the package.json.
    Launch 'npm install' and 'npm run tsc'.
4. in the project directory execute 'mvn package' 
5. in the server/target directory execute 'java -jar angular2.jar'
6. open your browser and visit 'localhost:8080'


To Run independently execute server and client separately as follows
1. install node.js
2. install typescript
3. in the webClient/src/ directory there is the package.json.
    Launch 'npm install'.
4. First Run the server by executing com.demo.angular2.Application(Spring Boot file from eclipse).
5. open your browser and visit 'localhost:8080/result_year' 
5. Now run the client by going to webClient/src directory and then execute 'npm start'
6. open your browser and visit 'localhost:4200'