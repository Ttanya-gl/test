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
    var sidsString = this.$('textarea').val();
    var sids = sidsString.match(/(\d+)/g);
    this.collection.searchitems(sids.join(','));
  },
  
  render: function(collection) {
    this.$('.js-search').html(this.template({
      items: collection.toJSON()
    }));
    return this;
  },

  searchTemplate: function() {
    this.$('.js-search').html(this.templateForm());
  },
});

export default SearchFormView
