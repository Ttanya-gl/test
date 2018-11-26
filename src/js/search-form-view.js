/* View для формы поиска */
import Backbone from 'backbone';
import Items from './items';
import $ from 'jquery';
import _ from 'lodash';

var SearchFormView = Backbone.View.extend({

  el: '.search-form',

  events: {
    'click .search-button': 'search'
  },
  
  initialize: function(){
    console.log(this)
    this.collection = new Items();
    this.listenTo(this.collection, 'sync', this.render)
    this.template = _.template($('#result-template').html() || '');
    window.$ = $;
    window._ = _;
  },
  
  search: function(e) {
    this.collection.searchitems('123456,721877')
  },
  
  render: function(collection) {
    console.log(collection.toJSON())
    $('.js-search').html(this.template({
      items: this.items
    }));
    return this;
  },

});

export default SearchFormView
