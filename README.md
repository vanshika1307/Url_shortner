URL Shortener
A simple URL shortening service built using Node.js, Express, and MongoDB.
Table of Contents

Introduction
Features
Installation
Usage
API Documentation
Contributing

Introduction
The URL Shortener project is a web application that allows users to create short, unique URLs that redirect to longer, original URLs. This can be useful for sharing links on social media, in emails, or other contexts where a shorter URL is preferred.
Features

Generate short, unique URLs for any given URL
Redirect users from the short URL to the original URL
Track the number of clicks (visits) on each short URL
RESTful API for creating and managing short URLs

Installation

Clone the repository:
javascriptCopygit clone https://github.com/your-username/url-shortener.git

Navigate to the project directory:
Copy cd url-shortener

Install the dependencies:
npm install nodemon mongoose express shortid

Start the server:
npm start

The server will start running on http://localhost:8000.

Usage

Send a POST request to http://localhost:8000/url with the following JSON payload:
{
  "url": "https://www.example.com"
}

The server will respond with a JSON object containing the short URL ID:
{
  "id": "abc123"
}

Users can access the short URL at http://localhost:8000/abc123, which will redirect them to https://www.example.com.

API Documentation
Create Short URL

Endpoint: POST /url
Request Body:
javascriptCopy{
  "url": "https://www.example.com"
}

Response:
javascriptCopy{
  "id": "abc123"
}


Redirect to Original URL

Endpoint: GET /:shortId
Parameters:

shortId: The ID of the short URL (e.g., abc123)


Response: Redirects the user to the original URL.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
