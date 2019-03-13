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
   it('searchitems() works properly', function(){
       spyOn(Items.prototype, 'fetch');
       var sids = 123456;
       collection.searchitems(sids);
       expect(collection.fetch).toHaveBeenCalledTimes(1);
   });
   it('parse() works properly', function(){
       var testResponse = {
           items: [
               ['item1'],
               ['item2'],
           ],
       }
       collection.parse(testResponse);
       expect(collection.parse(testResponse)).toEqual([["item1"], ["item2"]]);
   });
});
