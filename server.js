const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.locals.dances = [];

app.locals.dances = [
  { id: '1', name: 'Salsa', type: 'sexy' },
  { id: '2', name: 'Hip Hop', type: 'fun' },
  { id: '3', name: 'Waltz', type: 'tricky' }
];

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Back End 1904';

app.get('/', (request, response) => {
  response.send('Back End 1904');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/api/v1/dances', (request, response) => {
  const dances = app.locals.dances;

  return response.json({ dances });
});

app.get('/api/v1/dances/:id', (request, response) => {
  const { id } = request.params;
  const dance= app.locals.dances.find(dance => dance.id === id)
  return response.status(200).json(dance);
});