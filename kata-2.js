const romansDict = {
    "I": 1, 
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M":1000
}

const inputRomanValues = [];
let errorSyntax = false;

const checkLeftValues = inputRomanSymbol => {
    for (let index = 0; index < inputRomanSymbol.length; index++) {
        let value = romansDict[inputRomanSymbol.charAt(index)]; 
        if(value === 5 && romansDict[inputRomanSymbol.charAt(index+1)]>5){
            console.log("Wrong Syntax V cant be there");
            errorSyntax = true;
        }
        if(value === 50 && romansDict[inputRomanSymbol.charAt(index+1)]>50){
            console.log("Wrong Syntax L cant be there");
            errorSyntax = true;
        }
        if(value === 500 && romansDict[inputRomanSymbol.charAt(index+1)]>500){
            console.log("Wrong Syntax D cant be there");
            errorSyntax = true;
        }
    }
}

const howManyTimesMaximumSymbol = inputRomanSymbol => {
    const howManyTimesI = inputRomanSymbol.replace(/[^I]/g, "").length;
    const howManyTimesX = inputRomanSymbol.replace(/[^X]/g, "").length;
    const howManyTimesC = inputRomanSymbol.replace(/[^C]/g, "").length;
    const howManyTimesM = inputRomanSymbol.replace(/[^M]/g, "").length;
    if(howManyTimesI > 3 || howManyTimesX > 3 || howManyTimesC > 3 || howManyTimesM > 3){
        console.log("Wrong Syntax maxium characters excedeed");
        errorSyntax = true;
    }
}

const howManyTimesMinimumSymbol = inputRomanSymbol => {
    const howManyTimesV = inputRomanSymbol.replace(/[^V]/g, "").length;
    const howManyTimesL = inputRomanSymbol.replace(/[^L]/g, "").length;
    const howManyTimesD = inputRomanSymbol.replace(/[^D]/g, "").length;
    if(howManyTimesV > 1 || howManyTimesL > 1 || howManyTimesD > 1){
        console.log("Wrong Syntax minimum characters excedeed");
        errorSyntax = true;
    }
}

let arabValue = 0;

const romanToArab = romanSymbol => {
    checkLeftValues(romanSymbol);
    howManyTimesMaximumSymbol(romanSymbol);
    howManyTimesMinimumSymbol(romanSymbol);
    if(errorSyntax === false){
        for (let index = 0; index < romanSymbol.length; index++) {
            if(romanSymbol[index] === "I"){
                if(romanSymbol[index + 1] === "V" || romanSymbol[index + 1] === "X"){
                    let value = romansDict[romanSymbol.charAt(index)];
                    console.log(value); 
                    arabValue -= value;
                    //arabValue += romansDict[romanSymbol.charAt(index+1)];
                }
            }
        }
    }
}

romanToArab("DCIXV");
console.log(arabValue);

arabDict = {
    1 : "I",
    5 : "V",
    10 : "X",
    50 : "L",
    100 : "C",
    500 : "D",
    1000 : "M"

}
let romanNumberFromArab = "";
const arabToRomanNumber = userArabNumber => {
    console.log(userArabNumber);
    const directRomanValue = arabDict[userArabNumber]
    if(directRomanValue){
        console.log(directRomanValue);
        return 1;
    }
    do {
        do{
            console.log(userArabNumber % 1000 === 0);
            console.log("divisible entre 1000");
            romanNumberFromArab += "M";
            userArabNumber -= 1000;
            console.log(`divisible1000 ${userArabNumber}`);
        }while(userArabNumber === 1);
        
        console.log(userArabNumber % 500);
        do {
            console.log("divisible entre 500");
            romanNumberFromArab += "D";
            userArabNumber -= 500;
            console.log(`divisble500 ${userArabNumber}`);
        } while(userArabNumber % 500 === 0);
        
        console.log("hola2");
        do{
            console.log("divisible entre 100");
            romanNumberFromArab += "C";
            userArabNumber -= 100;
            console.log(`divisible100 ${userArabNumber}`);
        }while(userArabNumber % 100 === 0);
        
        do{
            console.log("divisible entre 50");
            romanNumberFromArab += "L";
            userArabNumber -= 50;
            console.log(`divisible50 ${userArabNumber}`);
        }while(userArabNumber % 50 === 0);
        
        do{
            console.log("divisible entre 10");
            romanNumberFromArab += "X";
            userArabNumber -= 10;
            console.log(`divisible10 ${userArabNumber}`);
        }while(userArabNumber % 10 === 0);
        
        /*}else{
            console.log("else");
            romanNumberFromArab += "I";
            userArabNumber -= 1;
            console.log(`else ${userArabNumber}`);
        }*/
    }while (userArabNumber > 0);
}

const arabToRoman = arabNumber => {
    arabToRomanNumber(arabNumber);
    console.log(romanNumberFromArab);
}
//arabToRoman(2);

const romanValidator = (romanNumber) => {

}


/*IF ERROR SYNTAX == FALSE PONER ESTO*/
/*if(howManyTimesMaximumSymbol <= 3 && howManyTimesMinimumSymbol <= 1){
    if(romanSymbol[index] === "I"){
        if(romanSymbol[index + 1] === "X" || romanSymbol[index + 1] === "V"){
            let value = romansDict[romanSymbol.charAt(index)]; 
            totalRestValue -= value;
            totalRestValue += romansDict[romanSymbol.charAt(index+1)];
        }
    }
    if(romanSymbol[index] === "X"){
        if(romanSymbol[index + 1] === "L" || romanSymbol[index + 1] === "C"){
            let value = romansDict[romanSymbol.charAt(index)]; 
            totalRestValue -= value;
            totalRestValue += romansDict[romanSymbol.charAt(index+1)];
        }
    }if(romanSymbol[index] === "C"){
        if(romanSymbol[index + 1] === "D" || romanSymbol[index + 1] === "M"){
            let value = romansDict[romanSymbol.charAt(index)]; 
            totalRestValue -= value;
            totalRestValue += romansDict[romanSymbol.charAt(index+1)];
        }
    }if(romanSymbol[index] === "M"){
        let value = romansDict[romanSymbol.charAt(index)];
        totalSumValue += value;
    }else{
        let value = romansDict[romanSymbol.charAt(index)];
        totalSumValue += value;
    }
}else{
    console.log("4Wrong Syntax");
    break;
}*/