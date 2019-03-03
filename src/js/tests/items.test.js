import Items from './../items';

/**
 * Тест items
 */
describe('items', function () {
    var collection,
    createCollection = function() {
        return new Items();
    };
    beforeEach(function () {
        collection = createCollection();
      });
    afterEach(function () {
        collection.remove()
    });
        
    it('checks url', function(){
        expect(collection).toBeDefined();
        expect(collection.url).toEqual('/api/v3/item-search');
    });
    it('searchitems()', function(){

    });
    it('parse()', function(){
    });
});