# Express-flux
This is a proof of concept for using React.js and Node.js.

React components are able to rendered on the server. This means that you can render the initial data on the server, and send the rendered HTML down to the client.

Then after the page loads, react is smart enough on the client side to realize that it already has all of its markup on the page.

React then simply applies the event handlers to the DOM.

### Installation
```shell
npm install
webpack
./bin/www
```

Browse to `localhost:3000`.



