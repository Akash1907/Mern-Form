Welcome to the Mern-From application. This is a MERN (MongoDB, Express.js, React.js, Node.js) stack application! This application serves as from where user can create, update, view and delete their data.

Table of Contents
1.Features
2.Technologies Used
3.Installation
4.Changes
5.Usage
6.Deployment
7.API's
8.Contributing
9.License

1. Features
a) CRUD Operations: Perform Create, Read, Update, and Delete operations on items.
b) Frontend: User-friendly interface built with React.js.
c) Backend: RESTful API endpoints built with Express.js.
d) Database: MongoDB database for storing application data.
e) Responsive Design: Responsive layout for seamless usage on various devices.

2. Technologies Used
a)Frontend: React.js, HTML, CSS
b)Backend: Node.js, Express.js
c)Database: MongoDB

3. Installation - Below are all the steps involved in order to install your application -
   Step 1 - Open the terminal and set the path of your terminal where you want to clone the repository and run this command  "git clone https://github.com/Akash1907/Mern-Form.git". This command will pull all the content from the remote repo to your local machine.
   Step 2 - You will notice that there are two different directories i.e. backend and frontend. The backend folder consists of all the backend code in a structured way and frontend folder consists of all the frontend codes.
   Step 3 - Now, set the path of the terminal to the backend folder by running "cd backend" command in the terminal.
   Step 4 - Run "npm install" command there, which will install all the dependencies required to run the server. Also don't forget to install nodemon dependency.
   Step 5 - Upon successfull install of all the dependencies, move to the frontend directory by running "cd ../frontend" command in the terminal.
   Step 6 - Run "npm install" again to install all the dependencies required to run the frontend of the application. 

4. Changes - Below are all the chnages that need to be  made in order to run the machine locally.
   Step 1 - Open the folder where you have clone the repo in any of the code editor of your choice. For eg. I use VS code editor.
   Step 2 - Go the index.js file, which is present in the backend directory and configure the port number (For eg. 5000, 3000, etc.).
   Step 3 - Now move to the frontend directory and move to the AddItem file and make the change in the urls from where we are sendin the requests. For example - Change "https://mern-form-backend-zeta.vercel.app/items/getUsers" to "http://localhost:5000/items/getUsers". Like this you have to make change to all the urls present in AddItem and ItemList component. After doing all this your are good to go.

5. Usage - In this section we will understaand how to run the application locally.
   Step 1 - First open the terminal in the bakend directory and run "nodemon" command. Upon running this command you'll notice there is a message coming to the terminal stating that "Server is running on port 5000
Connected to MongoDB". It suggests that your backend server is running and server is also connected to mondoDB.
   Step 2 - Now open the terminal in the backend folder and run "npm start" command in the terminal. This will run the frontend in your default browser. If in case it doesn't open, then open your web browser and navigate to http://localhost:3000 to view the application.

6. Deployment - The application is hosted on Vercel for the frontend and the backend. You can access the deployed application at the following URLs:

Frontend: https://mern-form-navy.vercel.app
Backend: https://mern-form-backend-zeta.vercel.app

7. API's - In this section we will talk about all the API's that are made in order to perform CRUD operation.
   a) GET - / - This will take nothing as a request and give "Welcome to the MERN stack application!" message as a response. This is the same message you will see on the screen upon opening the backend url.
   b) POST - /items/users - This api will take name, age, email and mobile nummber as a request and post all that to the database upon validating all the data provided by the user as a response.
   c) GET - /items/getUsers - This api will help in fetching all the data from the database and showing it in the frontend.
   d) PUT - /items/updateUser/:id" - This will take id as a request then match this id with all the id present in the databse and after successfully matching will update that particulr user's data into the database.
   e) DELETE - /items/deleteUser/:userId - This will also take id as a request and delete the data of the user present in the database with the same id.

8. Contributing - Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or bug fixes.


   

