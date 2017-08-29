import * as assert from 'assert';
import {MongoClient } from 'mongodb';


const url = 'mongodb://admin:admin@ds145293.mlab.com:45293/app-test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');
  db.close();
});
