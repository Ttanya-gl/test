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
    this.template = _.template($('#template').html() || '');
    window.$ = $;
    window._ = _;
  },
  
  search: function(e) {
    this.collection.searchitems(123456)
  },
  
  render: function(collection) {
    console.log(collection.toJSON())
    $('body').html(this.template())
  },

});

export default SearchFormView
