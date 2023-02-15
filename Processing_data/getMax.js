
const array = [1,2,3,4,5];

//* Math.max 
// console.log(Math.max(...array));
// console.log(Math.max.apply(null,array));

//* reduce 函数
function getMax(array){
  return array.reduce((prev,current)=>{
    return current>prev?current:prev
  })
}
// console.log(getMax(array));


//* sort 
function getMax(array){
  const result = array.sort();
  return result[result.length-1];
}

console.log(getMax(array));