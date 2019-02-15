'use strict';

const Q = require('./lib/server.js');
Q.start();

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('read');
db.monitorEvent('delete');






/*
  socket.on('publish', _publish);
  socket.on('list', _listQueues);
  socket.on('subscriptions', _subscriptions);
  socket.on('subscribe', _subscribe);
  socket.on('unsubscribe', _unsubscribe);
  socket.on('unsubscribeAll', _unsubscribeAll);
  socket.on('disconnect', _unsubscribeAll);
*/


