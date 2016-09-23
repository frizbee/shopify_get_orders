import { Template } from 'meteor/templating';

import { Orders } from '../api/orders.js';

import './body.html';

Template.body.helpers({

  orders() {
    return Orders.find({});
  },


});


Orders.find({}).forEach(function(item){
  console.log( item.id );
});
