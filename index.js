//                                   find max and min 

//                                        using math 


const num = [5, 10, 2, 8, 3, 1] ;


// Giving value for max and min to compare  num 

let maxnum = num[0];
let minnum = num[0];

// creating loop 


for (let i = 1; i < num.length ; i++){

    maxnum = Math.max(maxnum , num[i] );
    minnum = Math.min(minnum , num[i]);

}

console.log("min number is :",minnum);
console.log("max number is :", maxnum);