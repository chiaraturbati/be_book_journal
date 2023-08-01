# My Books App

![My Books App Logo](/path/to/your/logo.png) -> #TODO

## Description

My Books App is a web application built with React.js and Node.js that allows users to keep track of the books they have read. Users can add, edit, and delete books, rate them, and view their reading list. The app provides an easy and organized way to manage your reading history.

## Features

- TODO: Add new books with details such as title, author, genre, publication year, rating, and quotes.
- TODO: Edit book details or delete books from your reading list.
- TODO: Rate the books to remember how much you enjoyed them.
- TODO: View and search your list of read books.
- TODO: Responsive design for optimal viewing on various devices.

## Technologies Used

- Frontend:

  - React.js
  - Zustand (for state management)
  - Axios (for making API requests)
  - React Router (for navigation)
  - Tailwind (for styling)

- Backend:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)

## Getting Started

1. Clone the repository
2. Install dependencies for frontend and backend:

- Install dependencies for the backend server:
  ```
  cd server
  npm install
  ```
- Install dependencies for the the frontend development server:

  ```
  cd client
  npm install

  ```

3. Set up the environment variables:

- Create a `.env` file in the `server` directory.
- Add the following variables and set their values according to your MongoDB Atlas credentials:

DATABASE_URL=mongodb+srv://your-username:your-password@bookjournaldb.eype2m9.mongodb.net/my-books-app?retryWrites=true&w=majority
PORT=3001

4. Run the application:

- Start the backend server:
  ```
  cd server
  npm run devStart
  ```
- Start the frontend development server:

  ```
  cd client
  npm run dev

  ```

2. Access the app in your browser at `http://localhost:3001`.

## How to Use

- To add a new book, click on the "Add Book" button, fill in the details, and click "Save."
- To edit a book, click on the book in the list, make the changes, and click "Save Changes."
- To delete a book, click on the book in the list, and click "Delete Book."

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request.
