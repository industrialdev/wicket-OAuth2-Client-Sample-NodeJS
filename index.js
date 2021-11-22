const ClientOAuth2 = require('client-oauth2');
const https = require('https');
require('dotenv').config();
const client = new ClientOAuth2({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  accessTokenUri: process.env.accessTokenUri,
  authorizationUri: process.env.authorizationUri,
  redirectUri: process.redirectUri
});

process.env.clientId

const profileUrl = 'https://wqa-login.staging.wicketcloud.com/oauth2.0/profile';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
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
        url: profileUrl,
      });

      const profileData = await new Promise((resolve, reject) => {
        https.get(profileUrl, signed, (profileRes) => {
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

      return res.send({ accessToken: user.accessToken, profile: profileData });
    });
});

const port = 3000;
console.log(`Starting server on Port ${port}`);
app.listen(port);
