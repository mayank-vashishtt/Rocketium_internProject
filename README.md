# Data Handling with Node.js

## Overview

This project is designed to demonstrate fundamental skills in Node.js and working with APIs. It includes fetching dummy JSON data, serving it through an API, and providing functionality for basic filtering and sorting of the data.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine
- Git installed on your machine

### Installation

1. **Clone the repository**:
    ```bash
    git clone your-repo-url
    cd advanced-node-project
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    npm start
    ```

The server will start on port 3000 by default. You can access the API at `http://localhost:3000`.

## API Endpoints

### Get All Data

Retrieve all the data.

- **URL**: `/api/data`
- **Method**: `GET`
- **example**: `http://localhost:3000/api/data`

#### Example Request in Postman

1. Open Postman and create a new GET request.
2. Set the URL to `http://localhost:3000/api/data`.
3. Click "Send".

### Get Filtered Data

Retrieve data filtered by a specified key and value.

- **URL**: `/api/data`
- **Method**: `GET`
- **eample**: `http://localhost:3000/api/data?filterKey=language&filterValue=Sindhi`
- **Query Parameters**:
  - `filterKey` (optional): The key to filter by.
  - `filterValue` (optional): The value to filter by.

#### Example Request in Postman

1. Open Postman and create a new GET request.
2. Set the URL to `http://localhost:3000/api/data`.
3. Add query parameters:
   - `filterKey`: `language`
   - `filterValue`: `Sindhi`
4. Click "Send".

### Get Sorted Data

Retrieve data sorted by a specified key.

- **URL**: `/api/data`
- **Method**: `GET`
- **Query Parameters**:
  - `sortKey` (optional): The key to sort by.
  - `sortOrder` (optional, values: 'asc' or 'desc'): The order to sort (ascending or descending).
   **eample**: `http://localhost:3000/api/data?sortKey=name&sortOrder=asc`

#### Example Request in Postman

1. Open Postman and create a new GET request.
2. Set the URL to `http://localhost:3000/api/data`.
3. Add query parameters:
   - `sortKey`: `name`
   - `sortOrder`: `asc`
4. Click "Send".

### Get Filtered and Sorted Data

Retrieve data filtered by a specified key and value, and sorted by a specified key.

- **URL**: `/api/data`
- **Method**: `GET`
**eample**: `http://localhost:3000/api/data?filterKey=language&filterValue=Sindhi&sortKey=name&sortOrder=asc`



- **Query Parameters**:
  - `filterKey` (optional): The key to filter by.
  - `filterValue` (optional): The value to filter by.
  - `sortKey` (optional): The key to sort by.
  - `sortOrder` (optional, values: 'asc' or 'desc'): The order to sort (ascending or descending).

#### Example Request in Postman

1. Open Postman and create a new GET request.
2. Set the URL to `http://localhost:3000/api/data`.
3. Add query parameters:
   - `filterKey`: `language`
   - `filterValue`: `Sindhi`
   - `sortKey`: `name`
   - `sortOrder`: `asc`
4. Click "Send".

## Example Responses

### Get All Data

```json
[
    {
        "name": "Adeel Solangi",
        "language": "Sindhi",
        "id": "V59OF92YF627HFY0",
        "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
        "version": 6.1
    },
    ...
]
