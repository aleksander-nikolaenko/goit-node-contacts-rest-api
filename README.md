## REST API поддерживает следующие рауты

### ENDPOINT: **CONTACTS**

### @ GET CONTACTS

---

Возвращает массив всех контактов в json-формате

- **URL**
  /api/contacts
- **Method:**
  `GET`
- **URL Params**
  None
- **Data Params**
  `page=[integer]`
  `limit=[integer]`
  `favorite=[bool]`

#### Request

```shell
GET /api/contacts
Content-Type: application/json
Authorization: "Bearer {{token}}"
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody: [
  {
    "_id": "62e416cd43a3ec9b1a4b1fd4",
    "name": "test1",
    "email": "test1@ukr.net",
    "phone": "(748) 206-2688",
    "favorite": true,
    "owner": {
      "_id": "62e3e191038845b2f6b3cd9c",
      "email": "oleksandr@gmail.com",
      "subscription": "starter"
    }
  },
  {
    "_id": "62e416d443a3ec9b1a4b1fd7",
    "name": "test2",
    "email": "test2@ukr.net",
    "phone": "(748) 206-2689",
    "favorite": true,
    "owner": {
      "_id": "62e3e191038845b2f6b3cd9c",
      "email": "oleksandr@gmail.com",
      "subscription": "starter"
    }
  }
]
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Unauthorized"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ GET CONTACTS BY ID

---

Возвращает данные одного контакта в json-формате

- **URL**
  /api/contacts/:id
- **Method:**
  `GET`
- **URL Params**
  **Required:**
  `id=[string]`
- **Data Params**
  None

#### Request

```shell
GET /api/contacts/62e416cd43a3ec9b1a4b1fd4
Content-Type: application/json
Authorization: "Bearer {{token}}"
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody:
  {
    "_id": "62e416cd43a3ec9b1a4b1fd4",
    "name": "test1",
    "email": "test1@ukr.net",
    "phone": "(748) 206-2688",
    "favorite": true,
    "owner": {
      "_id": "62e3e191038845b2f6b3cd9c",
      "email": "oleksandr@gmail.com",
      "subscription": "starter"
    }
}
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Unauthorized"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ ADD CONTACT

---

Возвращает данные добавленного контакта в json-формате

- **URL**
  /api/contacts
- **Method:**
  `POST`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
POST /api/contacts
Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
  "name": "test1",
  "email": "test1@ukr.net",
  "phone": "(748) 206-2688"
}
```

#### Success response

```shell
Status: 201 Created
Content-Type: application/json
ResponseBody:
  {
  "name": "test1",
  "email": "test1@ukr.net",
  "phone": "(748) 206-2688",
  "favorite": false,
  "owner": "62e3e191038845b2f6b3cd9c",
  "_id": "62e416cd43a3ec9b1a4b1fd4"
}
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Unauthorized"
}
```

or

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "<Ошибка от Joi или другой библиотеки валидации>"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ DELETE CONTACT

---

Возвращает сообщение о успешном удалении контакта в json-формате

- **URL**
  /api/contacts/:id
- **Method:**
  `DELETE`
- **URL Params**
  **Required:**
  `id=[string]`
- **Data Params**
  None

#### Request

```shell
DELETE /api/contacts/62e416cd43a3ec9b1a4b1fd4
Content-Type: application/json
Authorization: "Bearer {{token}}"
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody: {
    "message": "contact deleted"
    }
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Unauthorized"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ UPDATE CONTACT

---

Возвращает данные измененного контакта в json-формате

- **URL**
  /api/contacts/:id
- **Method:**
  `PUT`
- **URL Params**
  **Required:**
  `id=[string]`
- **Data Params**
  None

#### Request

```shell
PUT /api/contacts/62e416cd43a3ec9b1a4b1fd4
Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
  "name": "test2",
  "email": "test2@ukr.net",
  "phone": "(748) 206-2689"
}
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody:
  {
  "name": "test2",
  "email": "test2@ukr.net",
  "phone": "(748) 206-2689",
  "favorite": false,
  "owner": "62e3e191038845b2f6b3cd9c",
  "_id": "62e416cd43a3ec9b1a4b1fd4"
}
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Unauthorized"
}
```

or

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "<Ошибка от Joi или другой библиотеки валидации>"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ UPDATE CONTACT FAVORITE

---

Возвращает данные измененного контакта в json-формате

- **URL**
  /api/contacts/:id/favorite
- **Method:**
  `PATCH`
- **URL Params**
  **Required:**
  `id=[string]`
- **Data Params**
  None

#### Request

```shell
PATCH /api/contacts/62e416cd43a3ec9b1a4b1fd4/favorite
Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
"favorite": true,
}
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody:
  {
  "name": "test1",
  "email": "test1@ukr.net",
  "phone": "(748) 206-2688",
  "favorite": true,
  "owner": "62e3e191038845b2f6b3cd9c",
  "_id": "62e416cd43a3ec9b1a4b1fd4"
}
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Unauthorized"
}
```

or

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "missing required field favorite"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### ENDPOINT: **USERS**

### @ ADD USER

---

Возвращает данные зарегистрированного пользователя в json-формате

- **URL**
  /api/users/signup
- **Method:**
  `POST`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
POST /api/users/signup
Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

#### Success response

```shell
Status: 201 Created
Content-Type: application/json
ResponseBody:
{
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}
```

#### Error response

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "<Ошибка от Joi или другой библиотеки валидации>"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 409 Conflict
Content-Type: application/json
ResponseBody: {
  "message": "Email in use"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ LOGIN USER

---

Возвращает данные залогиненного пользователя в json-формате

- **URL**
  /api/users/login
- **Method:**
  `POST`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
POST /api/users/login
Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody:
{
  "token": "exampletoken",
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}
```

#### Error response

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "<Ошибка от Joi или другой библиотеки валидации>"
}
```

or

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Email or password is wrong"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ LOGOUT USER

---

Ничего не возвращает

- **URL**
  /api/users/logout
- **Method:**
  `GET`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
GET /api/users/logout
Authorization: "Bearer {{token}}"
```

#### Success response

```shell
Status: 204 No Content
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
   "message": "Not authorized"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ CURRENT USER

---

Возвращает данные залогиненного пользователя в json-формате

- **URL**
  /api/users/current
- **Method:**
  `GET`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
POST /api/users/current
Authorization: "Bearer {{token}}"
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody:
{
  "email": "example@example.com",
  "subscription": "starter"
}
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
 "message": "Not authorized"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ UPDATE USER SUBSCRIPTION

---

Возвращает данные измененного пользователя в json-формате
Подписка может быть одной из значений ['starter', 'pro', 'business']

- **URL**
  /api/users
- **Method:**
  `PATCH`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
PATCH /api/users
Authorization: "Bearer {{token}}"
Content-Type: application/json
RequestBody: {
  "subscription": "pro"
}
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody:
{
  "user": {
    "email": "aleks@gmail.com",
    "subscription": "pro"
  }
}
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
 "message": "Not authorized"
}
```

or

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "<Ошибка от Joi или другой библиотеки валидации>"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ UPDATE USER AVATAR

---

Возвращает данные измененного поля пользователя в json-формате

- **URL**
  /api/users/avatars
- **Method:**
  `PATCH`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
PATCH /api/users
Authorization: "Bearer {{token}}"
Content-Type: multipart/form-data
RequestBody: upload file
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "avatarURL": "Link to file"
}
```

#### Error response

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
 "message": "Not authorized"
}
```

or

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "<Ошибка от Joi или другой библиотеки валидации>"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ VERIFY USER EMAIL

---

Возвращает сообщение в json-формате

- **URL**
  /api/users/verify/:verificationToken
- **Method:**
  `GET`
- **URL Params**
  **Required:**
  `verificationToken=[string]`
- **Data Params**
  None

#### Request

```shell
GET /api/users/verify/:verificationToken
Content-Type: application/json
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  message: 'Verification successful',
}
```

#### Error response

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  message: 'User not found'
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

### @ RESEND USER EMAIL VALIDATION

---

Возвращает сообщение в json-формате

- **URL**
  /api/users/verify
- **Method:**
  `POST`
- **URL Params**
  None
- **Data Params**
  None

#### Request

```shell
POST /api/users/verify
Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
}
```

#### Success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "message": "Verification email sent"
}
```

#### Error response

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  "message": "<Ошибка от Joi или другой библиотеки валидации>"
}
```

or

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  message: "Verification has already been passed"
}
```

or

```shell
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

or

```shell
Status: 500 Internal Server Error
Content-Type: application/json
ResponseBody: {
  "message": "Server error"
}
```

## Команди

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода при помощи eslint
- `npm lint:fix` &mdash; та же проверка линтера, но с авто исправлением простых ошибок
