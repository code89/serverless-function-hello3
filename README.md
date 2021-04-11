# serverless-function-hello3

## Added Redirect
Type '/api/1-hello' in URL
Will redirect default '/.netlify/functions/1-hello'

## netlify.toml update
```bash
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

#### adding `status = 200` hides having two 1-hello in console network.
It hides the 'redirected one'.  


#### Unchecked VSCode: 
### ```settings > javascript > suggest : Auto Imports```
To prevent Axios import suggestions 