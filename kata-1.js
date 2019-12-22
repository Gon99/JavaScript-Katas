
const inputNumber = process.argv.splice(2);
let numbersArray = [];

for (let index = 1; index <= inputNumber; index++) {
    numbersArray.push(index);
    const isDivisibleBy3 = index % 3 === 0;
    const isDivisibleBy5 = index % 5 === 0;
    const isDivisibleBy7 = index % 7 === 0;

    switch (true){
        case isDivisibleBy3:
            if(isDivisibleBy3 && numbersArray.includes(3)){
                numbersArray.splice(index-1, 0, "Foo");
                positionOfIncludeNumber = numbersArray.indexOf(3);
                numbersArray.splice(positionOfIncludeNumber, 1, "FooFoo");
                numbersArray.splice(positionOfIncludeNumber-1,1);
            }
            if(numbersArray[index-1] % 3 === 0 && index === 15){
                numbersArray[index-1] = "FooBarBar";
                
            }
            if(numbersArray[index-1] % 3 === 0 && index === 21){
                numbersArray[index-1] = "FooQuix";
                
            }
            if(numbersArray[index-1] % 3 === 0 && index === 33){
                numbersArray[index-1] = "FooFooFoo";
                
            }
            if(numbersArray[index-1] % 3 === 0 && index === 75){
                numbersArray[index-1] = "FooBarQuixBar";
                
            }
            if(numbersArray[index-1] % 3 == 0){
                numbersArray[index-1] = "Foo";
            }
        case isDivisibleBy5:
            if(isDivisibleBy5 && numbersArray.includes(5)){
                
                numbersArray.splice(index-1, 0, "Bar");
                positionOfIncludeNumber = numbersArray.indexOf(5);
                numbersArray.splice(positionOfIncludeNumber, 1, "BarBar");
                numbersArray.splice(positionOfIncludeNumber-1,1);
            }
            if(numbersArray[index-1] % 5 === 0){
                numbersArray.splice(index-1, 1, "Bar");
            }
            
        case isDivisibleBy7:
            if(isDivisibleBy7 && numbersArray.includes(7)){
                numbersArray.splice(index-1, 0, "Quix");
                positionOfIncludeNumber = numbersArray.indexOf(7);
                numbersArray.splice(positionOfIncludeNumber, 1, "QuixQuix");
                numbersArray.splice(positionOfIncludeNumber-1,1);
            }
            if(numbersArray[index-1] % 7 === 0){
                numbersArray.splice(index-1, 1, "Quix");
            }

        default:
            if(index === 13){
                numbersArray[index-1] = "Foo";
                
            }
            if(index === 53){
                numbersArray[index-1] = "BarFoo";
                
            }
    }
}    
console.log(numbersArray);