
#  Travel Devise

This is a full Stack Project built on MERN Technologies Using React.js , Node.js , Express.js , Mongo DB 
It is a simple social media app that allows users to post about their travelling histories of the places that are left undiscovered till now.
Or the places that are on the this planet earth. but no body has listened about them yet.



## API Reference

#### Get all Posts 

```http
  GET /posts?page=${page}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` |/posts?page=${page}|

#### Get specific post 

```http
  GET /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get posts by search 
```http
  GET /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `searchQuery`      | `string` | /posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags} |


#### Create Post 
```http
  POST /posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `newPost`      | `string` | /posts,newPost|


#### Like Post 
```http
  PATCH /posts/${id}/likePost
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | /posts/${id}/likePost|




#### Comment 
```http
  POST /posts/${id}/commentPost
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `value , id  `      | `string` | /posts/${id}/commentPost ,{value}|


#### Update Post  
```http
  PATCH  /posts/${id}`, updatedPost)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id , updatedPost  `      | `string` | /posts/${id}`, updatedPost|



#### delete Post  
```http
  DELETE  /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id `      | `string` | /posts/${id}|



#### Login to application   
```http
  POST  /user/signin
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `formData `      | `string` | /user/signin|

#### Register  to application   
```http
  POST  /user/signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `formData `      | `string` | /user/signup|














## Demo Link 
https://traveldevise.netlify.app/





## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CONNECTION_URL = YOUR MONGO DB CLUSTER URL` 


## To Run the Application 

Clone the project

```bash
  git clone https://github.com/nk1102/TravelDevise.git
```

Go to the project directory

```bash
  cd client ( for Front-end)
  cd server ( for Back-end)
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start ( For both client & server )
```



## License

Copyright (c) 2022 Nikunj Khandelwal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

