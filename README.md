# Nanny Search Service

This project is a nanny search service where users can browse through a list of nannies, select one, and get in touch by filling out a contact form. The service includes login and registration functionality, with all backend services powered by Firebase. Users can also add nannies to their favorite list and later review them.

## Features

- **User Registration & Login**: Users can register and log in to access the service. Firebase Authentication is used for user management.
- **Browse Nannies**: View a list of available nannies, including details like name, experience, and availability.
- **Contact Nanny**: After selecting a nanny, users can fill out a form to contact them directly.
- **Favorites**: Users can add nannies to their favorite list and view them at any time.
- **Real-time Updates**: Firebase Realtime Database is used to store and retrieve nanny data in real-time, ensuring the list is always up-to-date.

## Technologies Used

- **React**: Front-end library for building the user interface.
- **Vite**: A fast build tool for React projects, used to set up the development environment.
- **Firebase**: Firebase Realtime Database for storing and retrieving nanny data, and Firebase Authentication for managing user sign-up and login.
- **React Router**: For routing between pages (login, registration, nannies list, favorites, etc.).
- **CSS Modules**: For styling individual components with scoped styles.

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/nanny-search-service.git
cd nanny-search-service
```

### Install dependencies:

```bash
npm install
```

### Set up Firebase:

1. Go to the [Firebase Console](https://console.firebase.google.com/).

2. Create a new project.

3. Add Firebase to your web app and copy the Firebase configuration object.

4. Create a `.env` file in the root of your project and add the Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### Run the project:

```bash
npm run dev
```

Now you can access the app in your browser at http://localhost:3000.

## How It Works

1. Home Page: Displays the list of nannies. Each nanny has a button to add to favorites or view details.

2. Login/Register: Users can create an account or log in using their email and password.

3. Favorites: After logging in, users can add nannies to their favorite list and view it later.

4. Contact Nanny: After selecting a nanny, users can fill out a contact form to reach out to the nanny directly.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and create a pull request. Please ensure that all contributions follow the coding style used in the project.

### Steps for contributing:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature/your-feature`.

3. Make your changes.

4. Commit your changes: `git commit -m 'Add feature'`.

5. Push to your branch: `git push origin feature/your-feature`.

6. Open a pull request.
