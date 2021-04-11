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


#### Unchecked VSCode settings: 
To prevent Axios import suggestions
```settings > javascript > suggest : Auto Imports```

#### You can now use either url to retrive serverless function the message
```https://serverless-function-hello3.netlify.app/api/1-hello```

```https://serverless-function-hello3.netlify.app/.netlify/functions/1-hello```

"Our First Netlify Function Example"