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
        collection.sids = 123456;
        expect(collection).toBeDefined();
        expect(collection.url()).toEqual(`https://www.sima-land.ru/api/v3/item/?sid=${collection.sids}`);
    });
    it('searchitems()', function(){

    });
    it('parse()', function(){
    });
});
