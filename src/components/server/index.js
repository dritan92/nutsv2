import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'

import mailer from './mailer'

console.log('node.js application starting...');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/index.html#contact" to submit a message.')
})

app.post('/index.html#contact', (req, res) => {
  const { email = '', name = '', message = '' } = req.body

  mailer({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    res.redirect('/index.html#contact/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/index.html#contact/#error');
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
