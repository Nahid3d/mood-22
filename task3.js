function deleteInvalids(onlyNumbers){
 if(!Array.isArray(onlyNumbers)){
    return "You must be use an array";
 }
    const arr =onlyNumbers.filter(element => typeof element  === "number");
    return arr;
 
}
// const inputnumbers =[Array, isNaN, 14,54,87,'string', undefined, 'me'];
// const result =deleteInvalids(inputnumbers);
console.log(result);
