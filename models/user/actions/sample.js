export default {
  name: 'Sample',
  method: 'GET',
  main: (input, {Database, orm, Session, req, res, next}) => {

    return res.status(200).send({input});
  }
}
