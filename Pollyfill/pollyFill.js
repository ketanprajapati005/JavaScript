// let arr = [1,2,3,4,5];

// function cb(ele){
//     return ele/2;
// }

// let ans1 = arr.map(cb);

// console.log(ans1);
// function customMap(arr, cb){
//     let arr2 = [];

//     for(let i=0; i<arr.length; i++){
//         let res = cb(arr[i], i, arr);
//         arr2.push(res);
//     }
//     return arr2;
// };

// <----- pollyfill of MAP function ----->
// Array.prototype.customMap = function(cb) {
//     let inputArray=this;
//     let arr2 = [];

//     for(let i=0; i<inputArray.length; i++){
//         let res = cb(inputArray[i], i, inputArray);
//         arr2.push(res);
//     }
//     return arr2;
// };
// let ans = arr.customMap(cb);
// console.log(ans);


// <--- pollyfill of Filter function --->
// let arr = [1,2,3,4,5];

// function cb(ele){
//     return ele%2==0;
// };

// Array.prototype.customFilter = function (cb){
//     let inputArray = this;
//     let ans = [];

//     for(let i=0; i<inputArray.length; i++){
//         let res = cb(inputArray[i], i, inputArray);
        
//         if(res){
//             ans.push(inputArray[i]);
//         }

//     }
//     return ans;
// }

// let ans = arr.customFilter(cb);
// console.log(ans);

let arr = [1,2,3,4,5];

let cb =function (acc,currEle){
    return acc + currEle;
};

Array.prototype.customFilter = function (cb, defaultValue){
    let inputArray = this;
    let ans = null;

    let index = 0;
    let acc = defaultValue;
    if(!defaultValue){
        index = 1;
        acc = inputArray[0];
    }

    while(index<inputArray.length){
        acc = cb(acc, inputArray[index]);
        index++;
    }    
    return acc;
}    