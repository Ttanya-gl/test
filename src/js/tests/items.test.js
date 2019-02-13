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
    // afterEach(function () {
    //     collection.remove()
    // });
        
    xit('checks url', function(){
        expect(collection.url()).toEqual('test-entry/api/v3/item-question/?expand=answers&per-page=7')
        collection.sids = [456654, 123456];
        expect(collection.url()).toEqual('test-entry/api/v3/item-question/?expand=answers&item_id=456654&per-page=0')
    });
    it('searchitems()', function(){

    });
    it('parse()', function(){
    });
});