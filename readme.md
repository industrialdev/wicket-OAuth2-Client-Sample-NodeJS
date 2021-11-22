# Wicket.io - OAuth 2.0 Client Sample - NodeJS

Establishes OAuth2.0 connection to Wicket.io. 
Uses the package. https://www.npmjs.com/package/client-oauth2


## Initialize
```
npm install
```

Copy the sample .env file.
```
cp .env.sample .env
```

Edit the .env file's settings.

| FIELD | DESCRIPTION | 
| --- | --- |
| clientId | OAuth 2.0 ClientID Ex:c02...be4 |
| clientSecret | OAuth 2.0 Client Secret Ex:c02...be4 |
| accessTokenUri | Ex:https://{tenant}-login.staging.wicketcloud.com/oauth2.0/accessToken |
| authorizationUri | Ex: https://{tenant}-login.staging.wicketcloud.com/oauth2.0/authorize |
| profileUri | ex: https://{tenant}-login.staging.wicketcloud.com/oauth2.0/profile |
| redirectUri | Ex: https://{domain}/auth/callback |



## Run
```
npm run start
```
Or click "Launch Program" in VSCode.

## Testing Locally
Browse to http://localhost:3000

## Testing via NGROK
Ngrok Tunnel
```
    ./ngrok http 3000 --subdomain {subdomain}
```
Browse to https://{subdomain}/auth/
