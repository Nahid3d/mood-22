// const height = [70,78,79,72,75,76,74];
// function getMax(numbers){
//     let max = numbers[0];
//     for(numb of numbers){
//         if(numb > max){
//             max = numb;
//         }
//     }
//     return max;
// }
// const max = getMax(height);
// console.log(max)


// max number bar korar program 

const height = [90,17,98,95,65,32,99,85,96,98,97];
function getMax(numbers){
    let max =numbers[0];
    for(numb of numbers){
        if(numb > max){
            max = numb;
        }
    }
    return max;
}
const max = getMax(height);
console.log('max of max Numbers:', max);