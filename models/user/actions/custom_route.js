//this should be accessible with /about/<YourMessage>
export default {
  name: 'sample',
  method: ['GET','POST'], // This action supports both OPTIONS, it can be accessed by GET or POST
  route: '/about/:msg',
  main: (input, {Database, orm, Session, req, res, next}) => {

    return res.status(200).send({input});
  }
}
