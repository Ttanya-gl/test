/* Модель для товара */
import Backbone from 'backbone';

var Item = Backbone.Model.extend({
    url: function () {
        //var currentCurrency = this.get('currency');
        //var currencyParam = currentCurrency ? '?currency=' + currentCurrency : '';
        return 'https://www.sima-land.ru/api/v3/item/' + this.get('sid') + '/' + this.get('slug') + '/';
    },
});

export default Item