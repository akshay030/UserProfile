
# User Card with Dark Mode Toggle

This project is a simple React application that displays a user profile card. The app fetches random user data from the [RandomUser API](https://randomuser.me/). It supports both system dark mode and manual dark mode toggle. 

## Features
- **System Dark Mode**: The app automatically detects and applies dark mode based on the system preference.
- **Manual Dark Mode Toggle**: Users can toggle between light and dark modes using a button.
- **Responsive Design**: The card adjusts properly to different screen sizes.
- **Profile Picture**: Displays a user avatar fetched from the RandomUser API.
- **User Info**: Displays the user’s name, gender, and phone number.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for fetching data from the API.

## Getting Started

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/user-card-darkmode.git
cd user-card-darkmode
```

### 2. Install dependencies

Make sure you have `npm` or `yarn` installed. Run the following command to install the required dependencies:

```bash
npm install
# or
yarn install
```

### 3. Run the application

To start the development server, use the following command:

```bash
npm start
# or
yarn start
```

This will run the app locally on `http://localhost:3000`.

### 4. Dark Mode Toggle

The dark mode toggle button is located in the top-right corner of the card. It allows users to manually toggle between light and dark modes. By default, the app follows the system dark mode preference.

## Folder Structure

```
/src
  /components
    - UserCard.jsx        # Main component displaying the user card
  App.jsx                 # Main app file
  index.js                # Entry point for the app
  tailwind.config.js      # Tailwind CSS configuration
  /styles
    - global.css          # Global styles (optional, if needed)
```

## Tailwind Configuration

The project is configured with Tailwind CSS and supports **system dark mode** by default. The `darkMode: 'media'` option is enabled in `tailwind.config.js` to automatically adjust the app to the user's system preference for dark or light mode.


