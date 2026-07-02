let str = " hello this    is      Ram";

let s = str.split(" ").filter((ele)=>ele!=='').join(' ').trim();
// console.log(s)


let arr = [1,2,3,4,5,6, 6];

let sum = 0;
arr.forEach((ele)=>sum+=ele)
console.log(sum);



let res = arr.reduce((curr, ele)=>{
    if(!curr[ele]){
        curr[ele] = 1;
    }else{
        curr[ele]++;
    }
    return curr
},{})


console.log(res);
