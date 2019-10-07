const express = require('express');
const app = express();

app.locals.dances = [];

app.locals.pets = [
  { id: 'a1', name: 'Salsa', type: 'sexy' },
  { id: 'b2', name: 'Hip Hop', type: 'fun' },
  { id: 'c3', name: 'Waltz', type: 'tricky' }
];

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Back End 1904';

app.get('/', (request, response) => {
  response.send('Back End 1904');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});