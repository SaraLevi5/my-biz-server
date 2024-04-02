# Business Directory Server-Side Development Project - Biz server

## Overview

This project involves the development of a server-side application for an internet-based application that includes a website management system. The system enables business users to organize and manage content using a card-based interface on their website.
[server documentation](https://documenter.getpostman.com/view/32178826/2sA2xe3ZNx)

## Project Goals

The primary goal of this project is to develop a robust and efficient server-side application that supports the following functionalities:

1. **User Authentication**: Implement user authentication mechanisms to ensure secure access to the website management system.
   <br>
   **All the users password** &rarr; "Aa1234!!", you will need it to check and authorization in the requests.

2. **Card-based Content Management**: Create an intuitive interface for business users to organize, publish, edit, and delete content using cards on their website.

3. **Database Management**: Develop backend logic to manage data storage and retrieval for card-based content, ensuring data integrity and efficiency.

4. **API Integration**: Integrate with external APIs if required, such as for accessing additional business data or services.

5. **Scalability and Performance**: Design the server-side application to be scalable and performant, capable of handling a growing user base and increasing data load.

## Technologies Used

The server-side application will be developed using the following technologies:

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web application framework for Node.js, providing a robust set of features for web and API development.
- **MongoDB**: NoSQL database for storing website content and user data.
- **Mongoose**: MongoDB object modeling library for Node.js, facilitating interaction with the MongoDB database.
- **JWT (JSON Web Tokens)**: Standard for securely transmitting information between parties as JSON objects, used for user authentication.
- **RESTful APIs**: Design and implement RESTful APIs for communication between the client-side and server-side components.

## Getting Started

To set up and run the server-side application locally, follow these steps:

1. **Clone the Repository**: Clone the project repository to your local machine.

2. **Install Dependencies**: Run `npm i` to install all project dependencies.

3. **Set Up Environment Variables**: Configure environment variables for database connection.
   change file name from &rarr; "env-example.txt" to &rarr; ".env"
   then add this sensitive information to .env file:
   PORT=
   TOKEN_PRIVATE_KEY=
   MONGODB_CON_STR=

4. **Start the Server**: Run `npm start` to start the server. By default, the server will listen on port 3030.
   <br>
   **Start the Server in dev mode**: Run `npm run dev` to start the server in development mode with nodemon. This will automatically restart the server whenever code changes are detected.<br>

5. **Access the Application**: Access the server-side application using a web browser or API client, depending on the functionalities being tested.

6.**Users end points**
<br>
| method | URL | Authorization | action | return |
|--------|-----|---------------|--------|--------|
| POST | /users/register| All | register user | an object |
| POST | /users/login | All | login | Encrypt token|
| GET | /users | Admin | Get all users | an array of users |
| GET | /users/:id | The registered user or admin | Get user by id | User|
| PUT | /users/:id | The registered user | Edit user | User |
| PATCH | /users/:id | The registered user | Change isBusiness status | User |
| DELETE | /users/:id | The registered user or admin | Delete user | Deleted user|

6.**Cards end points**
<br>
| method | URL | Authorization | action | return |
|--------|-----|---------------|--------|--------|
| GET | /cards | all | Get all cards | an array of cards |
| GET | /cards/my-cards | The registered user | Get user cards | Array of cards|
| GET | /cards/:id | all | Get card | card|
| POST | /cards | Business user | Create new card | card |
| PUT | /cards/:id | The user who created the card | Edit card | card |
| PATCH | /cards/:id | A registered user | Like a card | card |
| DELETE | /cards/:id | The user who created the card or admin | Delete card | Deleted card|

| PATCH | /cards//biz-number/:id | The registered user | Change isBusiness status | User |

## License

This project is licensed under the [MIT License](LICENSE).

---
