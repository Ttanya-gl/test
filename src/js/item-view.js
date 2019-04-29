/* View для товара */
import Backbone from 'backbone';
import Item from './item';
import $ from 'jquery';
import template from  'lodash/template'

var ItemView = Backbone.View.extend({
    el: '.js-wrapper',

    'click .js-more-link': 'initItemView',

    run: function () {
        this.template = app.helpers.TemplateHelper.getTemplate('#item-template');
        this.renderTemplate();
    },


    renderTemplate: function() {
        this.$('.js-item-wrapper').html(this.template());
    },
});

export default ItemView