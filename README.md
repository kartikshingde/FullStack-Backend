Backend Development

<!-- CJS vs MJS module -->
<!-- sync or async, non-strict and script -->
<!-- calculator folder to export them in one go -->


<!-- DOminos Example -->

HomeWork:=>
- app.use() vs app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all routes, except /user/login
- error hadling using app.use("/",(err,req,res,next)=>{})

- Create a UserSchema.

- Create /signup API to add data to database
- Push some document using API with Postman
- Error handling using try Catch.

HW*
- API- Get user by Email'
- API - Get /feed - get all the users from the database
- get Users BY ID;
- create a delete user API
- create api to update user
- explore the mongoose documentation for Model.methods()
- what are options in a Model.findOneAndUpdate, explore more about it
- API - update the user with email id

- explore Schema options from documentation
- add required,unique,min,minLength,trim,
- add default value
- Create a custom validate function for gender
- Improve the DB Schema - Put all appropriate validations on each field in Schema
- Add timestamps

- add API level validations on Patch request and signup post api
- add api validation for each field
// this is data sanitization

-Install validator 
-Explore validator library functions and use for password email photoUrl
//note: NEVER TRUST req.body  ...always keep validations

//EP09
- validate data in SignUp API
- Install bcrypt package
- Create a passwordHash using bcrypt.hash() and save the user with encrypted password