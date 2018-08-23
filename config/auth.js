const auth = {
  mode: 'session',
  acl: {
    //@guest is Role
    // * - it has access to all the routes.
    'guest': {
      models: {
        'User': ['login']
      }
    },
    //@user is Role
    // @users -> ModelName
    //  * - it has access to all the actions of Model 'users'
    'api': {
      models: {
        'User': '*'
      }
    },
    //@api is Role
    // @users -> ModelName
    //  @createUser it's ActionName
    'user': {
      models: {
        'User': '*' // modelName : ['ActionName','ActionName']
      },
      // extraRoutes: ['getAwesomeUser'], //Future Enhencement
      // failureRedirect: 'https://google.com' //if this was specified, then it will redirect to this page, otherwise it will return Response in JSON (Auth Failed)
    }
  },
  token: {
    secret: 'SecretForJWTToken', //JWT
    options: {
      expiresIn: 60 ///1 minute - 60 seconds
    }
    //https://www.npmjs.com/package/jsonwebtoken
  }
}
export default auth;