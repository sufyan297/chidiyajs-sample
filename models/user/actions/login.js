import { Authenticator } from '@ascendtis/chidiya'
//this should be accessible with /User/login
export default {
  name: 'login',
  method: 'POST',
  main: async (input, {Database, orm, Session, req, res, next}) => {

    const user = await Database.query('User',{
      find: {
        username: 'Sufyan',
        password: '123456'
      }
    })
    .catch(err => {
      console.log("ERROR: ", err);
    })
    console.log("User: ", user[0]);

    if (user) {
      Authenticator.authenticate(req, {role: 'user', user: user[0]});
    } else {
      return res.status(404).send({status: 'error', message: 'Invalid username/password.'});
    }

    return res.status(200).send({user: user[0], input});
  }
}
