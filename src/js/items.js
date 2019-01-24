/* Коллекция товаров */
import Backbone from 'backbone';

var Items = Backbone.Collection.extend({

  url: function() {
    return 'https://www.sima-land.ru/api/v3/item/' + '?sid=' + this.sids
  },
  searchitems: function (sid) {
    this.sids = sid
    this.fetch()
  },
  parse: function (response) {
    return response.items;
  },
});

export default Items
