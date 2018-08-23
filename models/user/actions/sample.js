//this should be accessible with /User/sample
export default {
  name: 'sample',
  method: 'GET',
  main: (input, {Database, orm, Session, req, res, next}) => {

    return res.status(200).send({input});
  }
}
