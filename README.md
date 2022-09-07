
# Toto App

This app uses Node js as a backend technology and mongodb as database.


## Features

- Create a user
- Create a Todo with title and description
- Same person who created the todo can perform CRUD opperation on its todo
- Authorisation with help of JWT.


## API Reference

#### Create Todo

```http
  POST /v1/todo
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `jwt_token` | `string` | **Required**. Your JWT token |
| `title` | `string` | **Required**. Title of todo |
| `description` | `string` | **Required**. Description of todo |

#### Get All Todo of a user

```http
  GET /v1/todo/ 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your JWT token |

#### Update Todo

```http
  PATCH /v1/todo/ 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your JWT token |
| `title` | `string` | Updated title of todo |
| `description` | `string` | Updated description of todo |

#### Delete a Todo

```http
  DELETE /v1/todo/ 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your JWT token |
| `todoId` | `string` | **Required**. Todo id  |

#### Create User

```http
  POST /v1/todo/ 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId` | `string` | **Required**. User Id |
| `name` | `string` | **Required**. Name of user  |
| `email` | `string` | **Required**. Email of user  |
| `password` | `string` | **Required**. Password of user  |



## Documentation

[Click here for Postman Collection](https://www.getpostman.com/collections/5e37d040f4b8db4b8ade)

