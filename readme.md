# Wicket.io - OAuth 2.0 Client Sample - NodeJS

Establishes OAuth2.0 connection to Wicket.io. 
Uses: https://www.npmjs.com/package/client-oauth2

> Note:  Your Wicket.io tenant must be configured to allow OAuth 2.0 authentications for each service and redirectUri. 
> For more information please contact Wicket Support.


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
| redirectUri | The Uri to receive the OAuth 2.0 callback.  This URI has to be allow listed in Wicket. Contact Wicket Support for more information. Ex: https://{domain}/auth/callback |



## Run
```
npm run start
```
Or click "Launch Program" in VSCode.

## Testing Locally
Browse to http://localhost:80/auth/

 

## Testing via NGROK
Ngrok Tunnel
```
    ./ngrok http 80 --subdomain {subdomain}
```
Browse to https://{subdomain}/auth/
