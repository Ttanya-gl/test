import { SearchFormView } from './../search-form-view';

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
    it('search', function(){
        view = createView();
        spyOn(SearchFormView.prototype, 'search');
        view = createView();
        view.$('.search-button').click();
        expect(view.search).toHaveBeenCalledTimes(1);
    });
    it('render', function(){
    });
    it('searchTemplate', function(){
    });
});
