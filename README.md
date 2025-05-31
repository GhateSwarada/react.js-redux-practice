🌿 FreshBreez Plant Store
Welcome to the FreshBreez Plant Store! This is a single-page e-commerce application built with React and Redux, designed to simulate an online plant shopping experience.

This project serves as the final assignment for the "Development with React" IBM course on Coursera.

Features & Functionality
The application provides a comprehensive shopping experience, covering all assignment requirements:

Landing Page: A welcoming introduction to FreshBreez, featuring a background image, company description, and a "Get Started" button to navigate to products.

Product Listing Page:

Showcases six unique houseplants with their images, names, and prices.

Plants are organized into three distinct categories (Original Plants, Flower Plants, Fake Plants) with interactive filtering buttons.

"Add to Cart" buttons for each plant dynamically update the cart icon count in the header, disable themselves upon selection, and add the item to the Redux store.

Global Header:

Persistently displayed across product and cart pages.

Features a dynamic shopping cart icon that reflects the total number of items in the cart.

Includes clear navigation links to Home, Products, and Shopping Cart pages.

Shopping Cart Page:

Displays the total number of items and the total cost of all plants in the cart.

Each plant type in the cart shows its thumbnail, name, and unit price.

Provides "Increase", "Decrease", and "Delete" buttons for managing item quantities and removal, with all totals updating in real-time.

Includes "Checkout" (displays "Coming Soon!") and "Continue Shopping" buttons.

Redux State Management: The entire application leverages Redux Toolkit for robust and predictable state management of the shopping cart and product interactions.

Public GitHub Repository: This repository is publicly accessible for review.

Technologies Used
React: Frontend library for UI development.

Redux Toolkit: Official Redux toolset for state management.

React Router DOM: For client-side routing.

CSS Modules: For component-scoped styling.

JavaScript (ES6+)

Getting Started
Follow these steps to set up and run the project locally:

Clone the repository:

git clone https://github.com/GhateSwarada/react.js-redux-practice.git
cd react.js-redux-practice


Install dependencies:

npm install

(If you encounter peer dependency errors, try npm install --legacy-peer-deps.)

Run the application:

npm start

The application will open in your browser at http://localhost:3000.

Project Structure Overview
The project is organized into logical folders:

src/assets/: Contains all images (plant thumbnails, background).

src/components/: Reusable UI components (e.g., Header, PlantCard).

src/components/: Top-level page components (e.g., LandingPage, ProductListingPage, ShoppingCartPage).

src/redux/: Redux store configuration and cartSlice for state management.

src/utils/: Helper data like plantData.js.

src/App.js: Main application component handling routing.

Deployment
To create a production-ready build of the application:

npm run build

The optimized build will be generated in the build/ directory, ready for deployment to platforms like Netlify, Vercel, or GitHub Pages.

Contact
For any questions or feedback regarding this project, please feel free to reach out.

Your Name: Swarada Ghate

GitHub: https://github.com/GhateSwarada
