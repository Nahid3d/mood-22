function checkName(str){
    if(typeof str !== "string"){
        return "Invalite";
    }
    let result = str.slice(-1);
    let i = result.toLocaleLowerCase();
   
    if(i === 'a' ||i === 'y' ||i === 'i' ||i === 'e' ||i === 'o' ||i === 'u' ||i === 'w'){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }

}
let nam = checkName("hgf");
console.log(nam);


