import SearchFormView from './../search-form-view';
import $ from 'jquery';
import template from  'lodash/template';

/*
* Тест SearchFormView
*/
describe('SearchFormView', function () {
   var view,
   createView = () => {
       return new SearchFormView();
   };
   afterEach(() => {
       view.remove();
       $('body').empty()
   });
   beforeEach(() => {
       $('body').append('<div class="js-search-items"></div>');
   });
   it('search() calls when click', function(){
       spyOn(SearchFormView.prototype, 'search');
       view = createView();
       $('.js-search-items').append('<div class="search-button"></div>');
       $('.search-button').click();
       expect(view.search).toHaveBeenCalledTimes(1);
   });
   it('searchTemplate() calls when click', function(){
       spyOn(SearchFormView.prototype, 'searchTemplate');
       view = createView();
       $('.js-search-items').append('<div class="js-button-more"></div>');
       view.$('.js-button-more').click();
       expect(view.searchTemplate).toHaveBeenCalledTimes(1);
   });
   it('initialize() works properly', function(){
       spyOn($.prototype, 'html')
       spyOn(SearchFormView.prototype, 'listenTo');
       createView();
       expect($.prototype.html).toHaveBeenCalledTimes(2);
       expect(view.listenTo).toHaveBeenCalledTimes(1);
   });
   it('search() works properly', function(){
       spyOn(SearchFormView.prototype, 'render');
       view = createView();
       $('.js-search-items').append('<textarea>123</textarea>');
       view.search()
       expect(view.render).toHaveBeenCalledTimes(1);
   });
   it('render() works properly', function(){
       createView()
       spyOn(view, 'template')
       spyOn($.prototype, 'html')
       view.render()
       expect($.prototype.html).toHaveBeenCalledTimes(1)
       expect(view.template).toHaveBeenCalledTimes(1)
       expect(view.template).toHaveBeenCalledWith({
         items: view.collection.toJSON(),
       })
   });
   it('searchTemplate() works properly', function(){
       createView()
       spyOn(view, 'templateForm')
       spyOn($.prototype, 'html')
       view.searchTemplate()
       expect($.prototype.html).toHaveBeenCalledTimes(1)
       expect(view.templateForm).toHaveBeenCalledTimes(1)
   });
});
