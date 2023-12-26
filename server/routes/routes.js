const jwt = require('jsonwebtoken');
const express = require('express');

const { action, adventure, new_films, horror, fantasy } = require('../data/carousel');
const { movies } = require('../data/movies');

const secretKey = 'SKwlV6Z55ODDFFxADHDQs7qf7UWivSmEXPpZGiGFsjLfTKUU8rq8Wbh6ntYQS4s';

function getUserFromDatabase(userId) {
  return { id: userId, username: 'John Doe' };
}

exports.setupRoutes = (app) => {

  app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = Object.values(movies).filter(movie =>
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
};