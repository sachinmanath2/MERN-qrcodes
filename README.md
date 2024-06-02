# Generate QR API

Generate QR API is a RESTful service that allows users to create, update, retrieve, and delete QR codes. This API is built using Node.js and Mongoose for MongoDB interaction. Each QR code is associated with a unique ID, and the system also generates a short URL for each QR code.

## Features

- **Create QR Code**: Generate a QR code from a provided URL and name.
- **Retrieve QR Code**: Fetch a specific QR code using its ID.
- **Retrieve All QR Codes**: Fetch all QR codes.
- **Update QR Code**: Update an existing QR code's details.
- **Delete QR Code**: Remove a QR code from the system.

## Future Plans

- **User Management**: Implement user registration and associate QR codes with registered users.

## API Endpoints

### Create a QR Code

- **URL**: `/api/qrcodes`
- **Method**: `POST`
- **Request Body**:
```shell
  {
    "url": "https://example.com",
    "name": "Example"
  }
```
- **Response**:
```shell
{
  "id": "unique_id",
  "url": "https://example.com",
  "name": "Example",
  "qr_code": "generated_qr_code",
  "short_url": "short_url",
  "ip": "user_ip"
}
```

### Retrieve a Single QR Code
- **URL**: /api/qrcodes/:id
- **Method**: GET
- **Response**:
```shell
{
  "id": "unique_id",
  "url": "https://example.com",
  "name": "Example",
  "qr_code": "generated_qr_code",
  "short_url": "short_url",
  "ip": "user_ip"
}
```

### Retrieve All QR Codes
- **URL**: /api/qrcodes
- **Method**: GET
- **Response**
```shell
[
  {
    "id": "unique_id",
    "url": "https://example.com",
    "name": "Example",
    "qr_code": "generated_qr_code",
    "short_url": "short_url",
    "ip": "user_ip"
  },
  ...
]
```

### Update a QR Code
- **URL**: /api/qrcodes/:id
- **Method**: PUT
- **Request Body**:
{
  "url": "https://newexample.com",
  "name": "New Example"
}
- **Response**
```shell
{
  "id": "unique_id",
  "url": "https://newexample.com",
  "name": "New Example",
  "qr_code": "updated_qr_code",
  "short_url": "updated_short_url",
  "ip": "user_ip"
}
```

### Delete a QR Code
- **URL**: /api/qrcodes/:id
- **Method**: DELETE
- **Response**
```shell
{
  "id": "unique_id",
  "url": "https://newexample.com",
  "name": "New Example",
  "qr_code": "updated_qr_code",
  "short_url": "updated_short_url",
  "ip": "user_ip"
}
```


# Getting Started

## Prerequisites
- Node.js
- MongoDB


## Dependencies
- express
- mongoose
- body-parser
- qrcode
- shortid
- dotenv

## Installation and start server

1. Clone repository

```shell
git clone https://github.com/sachinmanath2/MERN-qrcodes.git
```

## Install backend

2. Get in the backend folder

```shell
cd backend
```

3. Install dependencies via npm or yarn

```shell
npm i
```

4. Set up environment variables (e.g., in a .env file):
```shell
MONGODB_URI=your_mongodb_uri
PORT=your_port
```

5. Start Client

```shell
npm start
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.