const signupRoutes = (app, fs) => {
  // variables
  const dataPath = './initialSignup.json';

  // READ
  app.get('/signup', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = signupRoutes;