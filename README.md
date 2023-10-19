
# Netflix Clone

This project is a Netflix clone built with React, Tailwind CSS, and Firebase. It allows users to sign in, sign up, and save their favorite shows or movies. Additionally, the application fetches data from the Movie Database (TMDB) API to provide a wide selection of content.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Firebase Configuration](#firebase-configuration)
- [TMDB API](#tmdb-api)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can run this project, you'll need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/) - Package manager
- [Firebase](https://firebase.google.com/) - Firebase project and configuration

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   ```

2. Change to the project directory:

   ```bash
   cd netflix-clone
   ```

3. Install the project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the project root directory with your Firebase configuration:

   ```env
   REACT_APP_FIREBASE_API_KEY=AIzaSyBltIh_4N3m_Xourpa6cKbPKyG6Dbjs4X4
   REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-clone-6ec0b.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=netflix-clone-6ec0b
   REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-clone-6ec0b.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=645119347591
   REACT_APP_FIREBASE_APP_ID=1:645119347591:web:d04768c81fffac58a1a122
   ```

5. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

The application will run on `http://localhost:3000/`.

## Firebase Configuration

To set up Firebase for this project:

1. Create a new Firebase project on the [Firebase Console](https://console.firebase.google.com/).

2. Navigate to Project Settings and copy the Firebase configuration.

3. Update your `.env` file with the Firebase configuration values.

## TMDB API

This project fetches data from the [TMDB API](https://www.themoviedb.org/documentation/api) to provide a list of movies and TV shows. You can obtain your API key by signing up for a TMDB API account.

In your `.env` file, add your TMDB API key:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```

## Features

- User authentication: Sign in, sign up, and sign out functionality.
- Browse a vast collection of movies and TV shows from the TMDB API.
- Save your favorite content to your profile.
- Responsive design that works well on various screen sizes.
- User-friendly interface similar to Netflix.

## Usage

1. Visit the application on `http://localhost:3000/`.
2. Sign in or sign up to access the content.
3. Browse through the available movies and TV shows.
4. Click on a title to get more details.
5. Save your favorite content to your profile.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and ensure the project still runs.
4. Create a pull request back to the original repository.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as long as you provide proper attribution to the original authors. Please read the full license for more details.
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


