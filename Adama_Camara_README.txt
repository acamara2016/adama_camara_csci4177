GET request: 
 '/' : return list of users
 '/' : userName : return specific user 

PUT request:
'/usernames/editUser' : update username, takes in body {current_username : 'John', new_username : 'Wick'}

POST request: 
'/register' : add a new user, takes in body {email:"yahoo@gmail.uk", username:"username"}

References: 
Used this stackoverflow blog as guidance: https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
Used this library to auto-generate the new users ID https://www.uuidgenerator.net/dev-corner/javascript