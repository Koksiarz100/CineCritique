const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const secretKey = 'SKwlV6Z55ODDFFxADHDQs7qf7UWivSmEXPpZGiGFsjLfTKUU8rq8Wbh6ntYQS4s'; // Trzeba zmienić w przyszłości
const { action, adventure, new_films, horror, fantasy } = require('./data');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = Object.values(action).filter(movie =>
    movie.title.toLowerCase().includes(query)
  );
  res.send(results);
});

app.get('/api/user', (req, res) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        if (err.message === 'jwt expired') {
          return res.status(401).send('Token expired');
        }
        return res.sendStatus(403);
      }

      const userData = getUserFromDatabase(user.id);

      res.json(userData);
    });
  } else {
    res.sendStatus(401);
  }
});

function getUserFromDatabase(userId) {
  return { id: userId, username: 'John Doe' };
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/api', (req, res) => {
  const category = req.query.categories;
  const categories = { action, adventure, new_films, horror, fantasy };
  
  if (categories[category]) {
    res.status(200).json(categories[category]);
  } 
  else {
    res.status(404).send('Not Found');
  }
});

app.use('/images', express.static('server/images'));

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(process.env.PORT || port);
});