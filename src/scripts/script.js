//----- დავალება #1 -----//

const fruits = ["apple", "pear", "peach", "mango"]

// for (const fruit of fruits){
//     console.log(fruit)
// }

for(let i = 0; i < fruits.length; i++){

    console.log(fruits[i])

}

//----- დავალება #2 -----//

function display(price){
    console.log(price)
}

function classifyPrice(x){
    if(x > 50){
        return "ძვირია"
    }
    else if(x < 20){
        return "იაფია"
    }
    else{
        return "ნორმალურია"
    }
}

display(classifyPrice(12))

//----- დავალება #3 -----//

const numbers = [15,53,22,198,10,28,16,70,33,951]

let max = 0

for(let i = 0; i < numbers.length; i++){
    if(max < numbers[i]){
        max = numbers[i]
        // console.log(max)
    }
}

// let max = numbers.reduce((a, b) => a > b ? a : b, 0)

console.log(max)

// console.log(double)