const app = require('connect')();

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use('/home.html', (req, res, next) => {
  res.write('<h2>This is our home page</h2>');
  next();
});

app.use(require('./queryParser'));

app.use('/about', (req, res, next) => {
  const magicWord = req.searchParams.get('magicWord');
  if (magicWord === 'please') {
    res.end('<h2>You caracked the code! welcome to our about us page</h2>');
  } else {
    next(error);
  }
});

app.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500;
  res.end(`Nasty refusal - magic word was incorrect - ${error.message}`);
});

app.listen(80);