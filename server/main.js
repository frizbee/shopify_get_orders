import { Meteor } from 'meteor/meteor';
import { Orders } from '../imports/api/orders.js';

Meteor.startup(() => {
  // code to run on server at startup

  var api = new Shopify.API({
    shop: "robin-41",
    api_key: "74e38279ff44ec2989aacb8512c0528b",
    password: "244d9ce7d2e4e20c621d8b3ff69c196b"
  });

  var all_orders = api.getAllOrders({ status: "any" });

  //console.log(all_orders);

  collection = Orders.insert(all_orders[0]);

});
