const session = {
  local: {
    store: 'file',
    secret: 'YourSessionSecret',
    path: './tmp/sessions',
    cookie: { 
      maxAge: 3600000 
    }
  }
}
export default session;