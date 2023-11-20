# Smart-City-Hub-Client

The smart-city-hub-client serves as the front-end for a web application focused on promoting and engaging with sustainable practices in urban environments.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Smart-City-Hub/smart-city-hub-client
   ```
   
2. Switch repositories:

   ```bash
   cd smart-city-hub-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

src/
|-- assets/
|   |-- react.svg
|-- components/
|   |-- AboutMe.jsx
|   |-- Alert.jsx
|   |-- Avatar.jsx
|   |-- Card.jsx
|   |-- ChatBubble.jsx
|   |-- EditPostModal.jsx
|   |-- FriendInfo.jsx
|   |-- FriendTotal.jsx
|   |-- Layout.jsx
|   |-- Modal.jsx
|   |-- MyPostCard.jsx
|   |-- NavigationCard.jsx
|   |-- PostCard.jsx
|   |-- StatsPost.jsx
|-- context/
|   |-- userContext.jsx
|-- hooks/
|   |-- index.jsx
|   |-- useAlert.jsx
|   |-- useComments.jsx
|   |-- useModal.jsx
|-- scenes/
|   |-- errorPage
|   |-- HomePage
|   |-- loginPage
|   |-- navbar
|   |-- notificationsPage
|   |-- postFormPage
|   |-- postPage
|   |-- profilPage
|   |-- savedPosts
|   |-- Search
|   |-- signupPage
|-- services/
|   |-- api.jsx
|   |-- auth.jsx
|   |-- index.jsx
|   |-- post.jsx
|-- store/
|   |-- app.jsx
|-- App.jsx
|-- data.js
|-- index.css
|-- main.jsx

### Usage

without the backend:

1. Start the development server:

```bash
npm run dev
```

2. Open your web browser and navigate to the provided URL to see the application.

with the backend:

1. please follow the tutorial to turn on the backend in

   https://github.com/Smart-City-Hub/smart-city-hub-server/blob/development/README.md

2. start the development server front end:

  ```bash
  npm run dev
  ```

3. Open your web browser and navigate to the provided URL to see the application.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)
