// README.md
# MEFF-LIBRARY MANAGEMENT API
### Introduction
The MEFF-Library Management API is an open source library management platform that enable users to manage their digital libraries in a more convenient way.

### MEFF-Library Management API Features
* Users can signup and login to their accounts
* Guest (non-authenticated) users can easily have a look at the available books.
* Authenticated users can access to all features such as adding new books, new authors, and new reviews; updating/editing books and authors; get/read books, authors, reviews and users; and delete/remove books, authors, reviews and users.

### Installation Guide
* Clone this repository [here](https://github.com/MEFF-LIBRARY/meff-library-api).
* The  **main branch** is the most stable branch at any given time, ensure you're working from it.
* Run `npm install` to install all dependencies
* You can either work with the default mongodb database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.
### Usage
* Connect to the API using this [link](https://meff-library-api.onrender.com).
* Run `npm run dev` to start the application locally on [port](http://localhost:3001).
* Futher read the complete API Documentation on [postman](https://documenter.getpostman.com/view/38771657/2sAXxQdXGh).

### API Endpoints
| ***HTTP Verbs*** | ***Endpoints*** | ***Action*** |
| --- | --- | --- |
| *POST* | /users | To sign up a new user account |
| *POST* | /books | To add a new book |
| *POST* | /authors | To create a new author |
| *POST* | /reviews | To create a new review |
| *GET* | /users | To retrieve all user on the platform |
| *GET* | /users/:id | To retrieve a user on the platform |
| *GET* | /books | To retrieve details of all books |
| *GET* | /books/:id | To retrieve details of a single book |
| *GET* | /authors| To retrieve details of all authors |
| *GET* | /authors/:id | To retrieve details of a single authors |
| *GET* | /reviews| To retrieve details of all reviews |
| *GET* | /reviews/:id | To retrieve details of a single review |
| *PATCH* | /users/:id | To edit the details of a single user |
| *PATCH* | /books/:id | To edit the details of a single book |
| *PATCH* | /authors/:id | To edit the details of a single authors |
| *PATCH* | /review/:id | To edit the details of a single review |
| *DELETE* | /users/:id | To delete a single users |
| *DELETE* | /books/:id | To delete a single books |
| *DELETE* | /authors/:id | To delete a single authors |
| *DELETE* | /reviews/:id | To delete a single reviews |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### Authors
* [Micheal](https://github.com/RemedyOnline)
* [Efuwa](https://github.com/Efuwa-Akyere)
* [Felicity](https://github.com/Fel968)
* [Frederick](https://github.com/fdblay)