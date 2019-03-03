import SearchFormView from './../search-form-view';
import $ from 'jquery';

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
    });
    it('search() calls when click', function(){
        spyOn(SearchFormView.prototype, 'search');
        view = createView();
        view.$('.search-button').click();
        expect(view.search).toHaveBeenCalledTimes(1);
    });
    it('searchTemplate() calls when click', function(){
        spyOn(SearchFormView.prototype, 'searchTemplate');
        view = createView();
        view.$('.js-button-more').click();
        expect(view.searchTemplate).toHaveBeenCalledTimes(1);
    });
    it('render', function(){
    });
    it('searchTemplate', function(){
    });
});
