/* View для формы поиска */
import Backbone from 'backbone';
import Items from './items';
import Item from './item';
import ItemView from './item-view';
import $ from 'jquery';
import template from  'lodash/template'

var SearchFormView = Backbone.View.extend({

  el: '.js-search-items',

  events: {
    'click .search-button': 'search',
    'click .js-button-more': 'searchTemplate',
    'click .js-more-link': 'initItemView',
  },
  
  initialize: function(){
    this.template = template($('#result-template').html() || '');
    this.templateForm = template($('#search-template').html() || '');
    this.collection = new Items();
    this.listenTo(this.collection, 'sync', this.render)
  },
  
  /* Поиск товаров по артикулам */
  search: function(e) {
    var sidsString = this.$('textarea').val();
    var sids = sidsString.match(/(\d+)/g);
    if (sids) {
      this.collection.searchitems(sids.join(','));
      this.render();
    } 
  },
  
  /* Рендеринг списка найденных товаров товаров */
  render: function() {
    this.$('.js-search').html(this.template({
      items: this.collection.toJSON()
    }));
    return this;
  },

  /* Показ формы поиска по артикулам */
  searchTemplate: function() {
    this.$('.js-search').html(this.templateForm());
  },

  initItemView: function() {
    this.item = new Item();
    this.childViews.ItemView = new ItemView({
        model: this.item
    });
  },
});

export default SearchFormView
