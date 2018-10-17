/* View для формы поиска */
import Backbone from 'backbone';
import Items from './items';

var SearchFormView = Backbone.View.extend({

  el: '.search-form',

  events: {
    'click .search-button': 'search'
  },
  
  initialize: function(){
    console.log(this)
  },
  
  search: function(e) {
    console.log(123)
    var test = new Items();
    test.searchitems(123456)
  },
  
  render: function() {
    //
  }

});

export default SearchFormView
