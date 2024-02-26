const jwt = require('jsonwebtoken');
const express = require('express');

const { action, adventure, new_films, horror, fantasy } = require('../data/carousel');
const { movies } = require('../data/movies');

const secretKey = 'SKwlV6Z55ODDFFxADHDQs7qf7UWivSmEXPpZGiGFsjLfTKUU8rq8Wbh6ntYQS4s';

function getUserFromDatabase(userId) {
  return { id: userId, username: 'John Doe' };
}

var carousel = 0;

exports.carousel = carousel;

exports.setupRoutes = (app) => {

  app.get('/movie/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = Object.values(movies).find(movie => movie.id === movieId);
  
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send('Film nie znaleziony: ' + movieId);
    }
    console.log('API request! (movies)');
  });

  app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = Object.values(movies).filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    res.send(results);
    console.log('API request! (search results)');
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
    console.log('API request! (user data)');
  });

  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'admin' && password === 'password') {
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).send('Unauthorized');
    }
    console.log('API request! (login auth)');
  });
  
  app.get('/api/carousel', (req, res) => {
    const categoriesParam = req.query.categories;
    const categoriesList = categoriesParam.split(','); // przekształca ciąg kategorii na tablicę
    const categories = { action, adventure, new_films, horror, fantasy };
    const result = {};
  
    categoriesList.forEach(category => {
      if (categories[category]) {
        result[category] = categories[category];
      }
    });
  
    if (Object.keys(result).length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).send('Not Found');
    }
  
    carousel++;
    console.log('API request! (carousel) '+ carousel);
  });
  
  app.use('/images', express.static('server/images'));

  app.use((req, res) => {
    res.status(404).send('Not Found');
  });
};