# get-oidc-token

Retrieves an access token via Open Id Connect Implicit flow

## Prerequisite

Your open id connect client must be configured to allow localhost as redirect url.

## Install

```
npm install get-oidc-token -g
```

## Example

```
get-oidc-token --authority <url to your authority> --clientId <id of your oidc client> --scope  openid profile <other scopes>
```
