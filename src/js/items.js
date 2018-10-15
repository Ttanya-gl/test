/* Коллекция товаров */
var Items = Backbone.Collection.extend({

  model: Item,
  urlRoot: '/api/v3/client',

});
