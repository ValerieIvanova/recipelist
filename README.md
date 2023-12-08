# RecipeList Single Page Application
## Overview
RecipeList is a Single Page Application (SPA) designed to help users explore, create, and manage recipes in an intuitive and user-friendly manner.
## Features
1. Browse Recipes
View a comprehensive list of recipes, sorted by popularity or date.
2. Create Recipes
Add your own recipes with detailed information.
Include images, ingredients, instructions, and more.
3. User Authentication
Register and log in securely to access personalized features.
User-specific functionality such as saved recipes and profile management.
4. Recipe Management
Edit or delete existing recipes.
Sort recipes based on various criteria.
## Components
Header Component
Navigation bar with links to different sections of the app.
Conditional rendering based on user authentication status.
Footer Component
Displays branding information and social media links.
Login Component
Allows users to log in using their credentials.
Form validation for email and password inputs.
Register Component
User registration with form validation for email, username, and password.
AllRecipes Component
Displays a list of all available recipes.
Pagination for easy navigation through multiple recipe pages.
RecipeListItem Component
Renders individual recipe details within the recipe list.
... and more
## Deployment

RecipeList is deployed using Firebase Hosting, ensuring seamless access to the application.
1. Download the server folder.
2. Open a terminal, navigato to the folder $cd server
3. start the server with $node server.js
4. And now you can [Visit RecipeList](https://recipelist-a40ae.web.app/)
   
## Installation
Clone this repository.
bashCopy code
git clone https://github.com/ValerieIvanova/recipelist.git 
Install dependencies.
` npm install `

## Usage
navigate to the client folder
` cd client `
Start the development server.
` npm run dev `
In another terminal navigate to the server folder
` cd server `
Start the server
` node server.js `

Open http://localhost:5173 to view the app in your browser.

## Deployment Steps

To deploy RecipeList to Firebase, follow these steps:

1. **Install Firebase Tools**: Make sure you have Firebase CLI installed. If not, install it using `npm install -g firebase-tools`.

2. **Login to Firebase**: Use `firebase login` to authenticate with your Firebase account.

3. **Initialize Firebase**: Navigate to your project directory and run `firebase init`. Follow the prompts to initialize Firebase for your project.

4. **Deploy to Firebase**: Once initialized, use `firebase deploy` to deploy your RecipeList application.

### Access the Deployed Application

After deploying, access the deployed application by visiting the provided Firebase Hosting URL.


### Technologies Used
React
React Router
Vitest

### Contributing
Contributions are welcome! Please follow the guidelines in CONTRIBUTING.md.
### License
This project is licensed under the MIT License.


