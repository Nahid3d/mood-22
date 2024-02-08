
function getMin(numbers){
    let min =minheight[0];
 for(num of numbers){
    if(num < min){
        min = num;
    }
    // console.log(num)
 }
   
   
   return min;
}
const minheight = [20,69,87,78,96,54,47,85,96,98,89,87];
const minwidth = getMin(minheight);
console.log("minimu small numbers:" , minwidth)


