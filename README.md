![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Q Server

### Author: Becca Lee

### Links and Resources
* [repo](https://github.com/beccalee123/q-server)
* [url](https://db-q-server.herokuapp.com/)

### Modules
#### `network.js`
Creates a Queue and subscribes to events. Connects to `lib/subsriber.js`
#### `publish.js`
Connects to the `client.js` and subscribes to events in the Queue. 
#### `server.js`
Connects with `lib/server.js` and listens to the `client.js` and the `publisher.js` files. It also monitors events and creates new Q's.
#### `logger.js`
This file subscribes to rooms and runs console.logs when it hears those events
#### `lib/server.js`
This file is connected to `queue-server.js`. It starts the server, stops the server, creates Qs and opens events.
#### `lib/subscriber.js`
This file is connected to the `publisher.js`, and subsrcibes to events. 
#### `lib/publisher.js`
This file is connected to `simulator.js`, publishes events to the Q, and sends them to the server. 

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000

#### Running the app
* To run locally:
  * Open four windows in your terminal
  * In the first run `node server.js` 
  * In the next run `node publish.js`
  * In the next run `node client.js`
  * In the last, run `node logger.js`
* Otherwise, this can be run with the url above
