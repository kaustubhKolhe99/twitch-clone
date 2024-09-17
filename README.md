# 🎥 Twitch Clone 🎮

## 📝 Overview

📺 This repository contains a Twitch clone application built using modern web technologies. The project integrates user authentication using 🔐 JWT (JSON Web Token) and supports real-time streaming using an 📡 RTMP server. Additionally, it includes a 💬 chat feature for streams implemented with ⚡️ Socket.io. The backend server is developed with 🛠️ Node.js, while the frontend is built with the 🌐 React.js framework. This project utilizes the MERN stack (🍃 MongoDB, 🎭 Express.js, ⚛️ React.js, 🛠️ Node.js).

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#-technologies-used)
- [📥 Installation](#-installation)
- [🚀 Usage](#-usage)
- [🤝 Contributing](#-contributing)

## ✨ Features

- 🔐 User Authentication with JWT
- 📡 Real-time streaming with RTMP server
- 💬 Integrated chat for streams using Socket.io
- 🖥️ User-friendly interface with React.js
- 🛡️ Secure and scalable backend with Node.js
- 📱 Responsive design for various devices
- 🔄 Change password functionality
- 🎥 Live streaming with stream key and OBS
- 🟢 Channel online status indicator

## 🛠️ Technologies Used

- **Backend**: 🛠️ Node.js, 🎭 Express.js (MVC approach)
- **Frontend**: ⚛️ React.js
- **Authentication**: 🔐 JSON Web Token (JWT)
- **Streaming**: 📡 RTMP (Real-Time Messaging Protocol)
- **Database**: 🍃 MongoDB
- **Chat**: ⚡️ Socket.io

## 📥 Installation

To get started with this project, follow these steps:

1. **📂 Clone the repository**:
    ```sh
    git clone https://github.com/kaustubhkolhe99/twitch-clone.git
    cd twitch-clone
    ```

2. **🔧 Install server dependencies**:
    ```sh
    cd server
    npm install
    ```

3. **🔧 Install client application dependencies**:
    ```sh
    cd ../client
    npm install
    ```

4. **🔐 Set up environment variables**:
    - Edit a `.env` file in the `server` directory and add the necessary environment variables:
        ```env
        API_PORT=5002
        MONGO_URI=your_mongodb_connection_string
        TOKEN_KEY=your_jwt_secret
        ```

5. **🚀 Start the RTMP server**:
   ```sh
    cd ../rtmp-server
    npm start
    ```

6. **🚀 Run the API server**:
    ```sh
    cd ../server
    npm start
    ```

7. **🚀 Run the client application**:
    ```sh
    cd ../client
    npm start
    ```

## 🚀 Usage

Once the servers are up and running, you can access the application in your browser at `http://localhost:3000`. 

### 🔐 Authentication

- **✍️ Sign Up**: Create a new account.
- **🔑 Login**: Authenticate with your credentials to access the platform.
- **🔒 JWT Tokens**: Tokens are used to secure API endpoints and manage user sessions.
- **🔄 Change Password**: Users can change their password from their profile settings.

### 📡 Streaming

- **📹 Broadcast**: Start a live stream using an RTMP-compatible streaming software (e.g., OBS Studio).
- **🔑 Stream Key**: Obtain a unique stream key from your profile settings to use with OBS for live streaming.
- **👀 Watch**: View live streams from other users.
- **💬Comment/Chat** Post comments and chat on the live stream.
- **🟢 Channel Status**: See whether a channel is online or offline.

### 💬 Chat

- **💬 Real-time Chat**: Engage with viewers through integrated chat functionality powered by Socket.io.

## 🤝 Contributing

Contributions are welcome! Please follow these steps to contribute:

1. 🍴 Fork the repository.
2. 🌿 Create a new branch (`git checkout -b feature/your-feature-name`).
3. 🛠️ Make your changes.
4. 💾 Commit your changes (`git commit -m 'Add some feature'`).
5. 🚀 Push to the branch (`git push origin feature/your-feature-name`).
6. 📥 Open a pull request.

### ⚡️ Register as new user 
![Screenshot from 2024-09-17 17-37-46](https://github.com/user-attachments/assets/6db3443b-ed98-4c76-9bc4-8ab18652f122)

### ⚡️ Login in to existing user account
![Screenshot from 2024-09-17 17-37-41](https://github.com/user-attachments/assets/b3fb0c47-2c67-424e-a667-becc3e41ff2a)

### ⚡️ Go to Browse to explore other channerls
![Screenshot from 2024-09-17 17-38-16](https://github.com/user-attachments/assets/83927e4c-d582-48d9-8155-e5f1b1faf1a6)

### ⚡️ Go to MyAccount to edit account info
![Screenshot from 2024-09-17 17-42-40](https://github.com/user-attachments/assets/ed1aac77-197b-44c7-8638-448acbabf1e3)
 by default the user channel is disable, put any image link from google and put it in avatar url to enable account to stream 
 the below string is the stream key 

### ⚡️ Put the stream key to the OBS and server url of the rtmp server (default url if you are running locally: rtms://localhost/live) 
![Screenshot from 2024-09-17 17-47-06](https://github.com/user-attachments/assets/479d3d2f-1a79-4d4c-8811-aa8a8e4430ad)

### ⚡️ Check the stream, channel status and comment on the stream 
![Screenshot from 2024-09-17 17-39-07](https://github.com/user-attachments/assets/4a5412e4-5469-418d-be48-78da8a14ede7)

