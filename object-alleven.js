const prodacts = [
    {  name:  'sumnang', price: 24000, color: 'black', camera: '108px'},

    {  name:  'xoami', price: 25000, color: 'black', camera: '108px' },

    {  name:  'oppo', price: 18000, color: 'black', camera: '108px'},
    {  name:  'techono', price: 15000, color: 'black', camera: '108px'},
    {  name:  'infinix', price: 12000, color: 'black', camera: '108px'},
    {  name:  'iphone', price: 224000, color: 'black', camera: '108px'},
    {  name:  'realmi', price: 30000, color: 'black', camera: '108px'},
]
function allProdact(prodacts){
    let total = 0;
    for(const prodact of prodacts){
        // const thisprodect = prodact.price * prodact.;         
         total = total + prodact.price;
    }
    return total;
}
const totalprodacts = allProdact(prodacts);
console.log(totalprodacts);