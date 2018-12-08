/* View для формы поиска */
import Backbone from 'backbone';
import Items from './items';
import $ from 'jquery';
import template from  'lodash/template'

var SearchFormView = Backbone.View.extend({

  el: '.search-form',

  events: {
    'click .search-button': 'search'
  },
  
  initialize: function(){
    console.log(this)
    this.collection = new Items();
    this.listenTo(this.collection, 'sync', this.render)
    this.template = template($('#result-template').html() || '');
  },
  
  search: function(e) {
    this.collection.searchitems('123456,721877')
  },
  
  render: function(collection) {
    console.log(collection.toJSON())
    this.$('.js-search').html(this.template({
      items: collection.toJSON()
    }));
    return this;
  },

});

export default SearchFormView
