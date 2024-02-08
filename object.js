const phones = [
    {  name:  'sumnang', price: 24000, color: 'black', camera: '108px' },
    {  name:  'xoami', price: 25000, color: 'black', camera: '108px' },

    {  name:  'oppo', price: 18000, color: 'black', camera: '108px' },
    {  name:  'techono', price: 15000, color: 'black', camera: '108px' },
    {  name:  'infinix', price: 12000, color: 'black', camera: '108px' },
    {  name:  'iphone', price: 224000, color: 'black', camera: '108px' },
    {  name:  'realmi', price: 30000, color: 'black', camera: '108px' },
]

function qulaifiphone(phones) {
    let min =phones[0]
    for( const phn of phones){
        if(phn.price < min.price){
            min = phn;
        }
    }
    return min
}
const mobile = qulaifiphone(phones);
console.log(mobile);
