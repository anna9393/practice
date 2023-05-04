const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'newsletter.html'));
})

app.post('/signup', (req, res) => {
  const name = req.body.user_name;
  const email = req.body.user_email;

  res.render('submitted', {
    name: name, email: email
  });
})

app.listen(port, () => {
  console.log(`app listening on PORT:${port}`)
});
