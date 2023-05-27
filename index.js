const ClientOAuth2 = require('client-oauth2');
const https = require('https');

require('dotenv').config();

const client = new ClientOAuth2({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  accessTokenUri: process.env.accessTokenUri,
  authorizationUri: process.env.authorizationUri,
  redirectUri: process.env.redirectUri,
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Wicket OAuth Sample Application! <br/> <a href="/auth">Login</a>');

});

app.get('/auth', (req, res) => {
  const uri = client.code.getUri();
  res.redirect(uri);
});

app.get('/auth/callback', (req, res) => {
  client.code.getToken(req.originalUrl)
    .then(async (user) => {
      const signed = user.sign({
        method: 'get',
        url: process.env.profileUri,
      });

      const profileData = await new Promise((resolve, reject) => {
        https.get(process.env.profileUri, signed, (profileRes) => {
          let data = '';

          profileRes.on('data', (chunk) => {
            data += chunk;
          });

          profileRes.on('end', () => {
            resolve(data);
          });
        }).on('error', (err) => {
          reject(err.message);
        });
      });

      return res.send({ accessToken: user.accessToken, profile: JSON.parse(profileData) });
    });
});

const port = 80;
console.log(`Starting server on Port ${port}`);
app.listen(port);
