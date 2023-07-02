
const num = [5, 10, 2, 8, 3, 1] ;



const maxnum =(x,y)=>{
    return ( x > y);
}

const minnum = (x,y)=>{
    return (x < y);
}

// Giving value for max and min to compare  num 

let max = num[0];
let min = num[0];

// creating loop 


for (let i = 1; i < num.length ; i++){

    if ( maxnum (num[i] , max ) ) {

         max = num[i];

    }
    else if ( minnum (num[i] , min)){
        min = num[i];

    }


}

console.log("min number is :",min);
console.log("max number is :", max);