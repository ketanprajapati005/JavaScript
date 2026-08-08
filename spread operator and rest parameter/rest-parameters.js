// function sum(a,b, ...args){
//     console.log(a,b);
//     let arr = args;

//     return arr.reduce(function(acc, currEle){
//         return acc + currEle;
//     },0)
// }
// console.log(sum(1,2,3,4,46))

function sum(...args){
    let arr = args;

    return arr.reduce(function(acc, currEle){
        return acc + currEle;
    },0)
}
console.log(sum(1,2,3,4,46));