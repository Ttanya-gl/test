/* View для формы поиска */
import Backbone from 'backbone';
import Items from './items';
import $ from 'jquery';
import template from  'lodash/template'

var SearchFormView = Backbone.View.extend({

  el: '.js-search-items',

  events: {
    'click .search-button': 'search',
    'click .js-button-more': 'searchTemplate',
  },
  
  initialize: function(){
    this.template = template($('#result-template').html() || '');
    this.templateForm = template($('#search-template').html() || '');
    this.collection = new Items();
    this.listenTo(this.collection, 'sync', this.render)
  },
  
  search: function(e) {
    var sids = this.$('textarea').val();
    this.collection.searchitems(sids);
  },
  
  render: function(collection) {
    $('.js-search').html(this.template({
      items: collection.toJSON()
    }));
    return this;
  },

  searchTemplate: function() {
    $('.js-search').html(this.templateForm());
  },

});

export default SearchFormView
