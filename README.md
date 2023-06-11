# ChatGPT Cloud Service


[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.com/your-username/chatgpt-microservice.svg?branch=main)](https://travis-ci.com/your-username/chatgpt-microservice)

ChatGPT Cloud Service is a Node.js cloud microservice written in TypeScript that allows developers to easily implement the ChatGPT service into their applications for their users. This service handles the authentication token and modifies the requests before passing them to the ChatGPT API.

By using this microservice, developers no longer need to expose their API keys to users, providing a secure way to add ChatGPT functionality to their apps.

## Features

- Securely integrate ChatGPT into your applications
- Manage user authentication tokens
- Modify and customize requests before sending them to the ChatGPT API
- Easy-to-use TypeScript interface
- Deployable as a containerized application
- Planned features:
  - Database integration

## Prerequisites

Before using the ChatGPT Microservice, make sure you have the following installed:

- Node.js
- npm
- ChatGPT API access token
- Docker (optional, for containerization)

## Getting Started

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/arihantparsoya/chatgpt-cloud-service.git
   ```

2. Navigate to the project directory:

   ```shell
   cd chatgpt-cloud-service
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

### Configuration

1. Open the `.env` file in the project root directory.

2. Set your ChatGPT API key:

   ```plaintext
   CHATGPT_API_KEY=your-api-key
   ```

### Usage

1. Start the project:

   ```shell
   npm start
   ```

2. The service will be running at `http://localhost:3000`.

3. Make a POST request to `http://localhost:3000/chat` with the following parameters:

   Example using cURL:

   ```shell
curl --location 'http://localhost:3000/chat' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_BEARER_TOKEN' \
--data '{
    "message": "What is the population of USA?"
}'
   ```

4. The microservice will modify the request and forward it to the ChatGPT API. The response from the API will be returned to the user.

### Containerization (Docker)

1. Build the Docker image:

   ```shell
   docker build -t chatgpt-cloud-service .
   ```

2. Run the Docker container:

   ```shell
   docker run -p 3000:3000 chatgpt-cloud-service
   ```

   The microservice will be accessible at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0). See the [LICENSE](LICENSE) file for more details.
