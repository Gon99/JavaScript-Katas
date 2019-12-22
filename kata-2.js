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
    const directArabValue = romansDict[romanSymbol];
    if(directArabValue){
        console.log(directArabValue);
        return 1;
    }
    
    checkLeftValues(romanSymbol);
    howManyTimesMaximumSymbol(romanSymbol);
    howManyTimesMinimumSymbol(romanSymbol);
    if(errorSyntax === false){
        console.log(`roman symbol: ${romanSymbol}`);
        for (let index = 0; index < romanSymbol.length; index++) {
            if(romanSymbol[index] === "I"){
                if(romanSymbol[index + 1] === "V" || romanSymbol[index + 1] === "X"){
                    let value = romansDict[romanSymbol.charAt(index)];
                    arabValue -= value;
                    //arabValue += romansDict[romanSymbol.charAt(index+1)];
                }
            }
            if(romanSymbol[index] === "X"){
                if(romanSymbol[index + 1] === "L" || romanSymbol[index + 1] === "C"){
                    let value = romansDict[romanSymbol.charAt(index)];
                    arabValue -= value;
                    //arabValue += romansDict[romanSymbol.charAt(index+1)];
                }
            }
            if(romanSymbol[index] === "C"){
                if(romanSymbol[index + 1] === "D" || romanSymbol[index + 1] === "M"){
                    let value = romansDict[romanSymbol.charAt(index)];
                    arabValue -= value;
                    //arabValue += romansDict[romanSymbol.charAt(index+1)];
                }
            }else{
                console.log(`el arabvalue llega con ${arabValue}`);
                let positionOfIV = romanSymbol.indexOf("IV");
                console.log("posicionIV"+positionOfIV);
                let value = 0;
                if(positionOfIV >= 0){
                    console.log("dentro IV");
                    value = romansDict[romanSymbol.charAt(positionOfIV+1)];
                    arabValue += value;
                    
                }
                let positionOfIX = romanSymbol.indexOf("IX");
                console.log("posicionIX: "+ positionOfIX);
                if(positionOfIX >= 0){
                    console.log("dentro IX");
                    value = romansDict[romanSymbol.charAt(positionOfIX+1)];
                    arabValue += value;
                }
                
                console.log("El value" + value);
                
                console.log(`values ${value}`);
                
                
                /*if(romanSymbol.includes("IV") ){
                    console.log("se da el caso");
                }*/
            }
        }
        console.log(`arabValue es: ${arabValue}`);
    }
}

romanToArab("XIX");
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
    const directRomanValue = arabDict[userArabNumber];
    if(directRomanValue){
        console.log(directRomanValue);
        return 1;
    }

    while(userArabNumber -1000 >= 0){
        romanNumberFromArab += "M";
        userArabNumber -= 1000;
    }
    
    while(userArabNumber -500 >= 0){
        romanNumberFromArab += "D";
        userArabNumber -= 500;
    } 

    while(userArabNumber - 100 >= 0){
        romanNumberFromArab += "C";
        userArabNumber -= 100;
    }
    
    while(userArabNumber -50 >= 0){
        romanNumberFromArab += "L";
        userArabNumber -= 50;
    }
    
    while(userArabNumber -10 >= 0){
        romanNumberFromArab += "X";
        userArabNumber -= 10;
    }

    while(userArabNumber - 5 >= 0){
        romanNumberFromArab += "V";
        userArabNumber -= 5;
    }
    
    while(userArabNumber -1 >= 0){
        romanNumberFromArab += "I";
        userArabNumber -= 1;
    }
}

const arabToRoman = arabNumber => {
    arabToRomanNumber(arabNumber);
    const howManyTimesI = romanNumberFromArab.replace(/[^I]/g, "").length;
    const howManyTimesX = romanNumberFromArab.replace(/[^X]/g, "").length;
    const howManyTimesC = romanNumberFromArab.replace(/[^C]/g, "").length;
    if(howManyTimesI > 3){
        let positionOfFirstI = romanNumberFromArab.indexOf("I");
        if(romanNumberFromArab[positionOfFirstI -1] === "V"){
            romanNumberFromArab = romanNumberFromArab.replace("VIIII", "IX");
        }else{
            romanNumberFromArab = romanNumberFromArab.replace("IIII", "IV");
        }
    }
    if(howManyTimesX > 3){
        let positionOfFirstX = romanNumberFromArab.indexOf("X");
        if(romanNumberFromArab[positionOfFirstX -1] === "L"){
            romanNumberFromArab = romanNumberFromArab.replace("LXXXX", "XC");
        }else{
            romanNumberFromArab = romanNumberFromArab.replace("XXXX", "XL");
        }
    }
    if(howManyTimesC > 3){
        let positionOfFirstC = romanNumberFromArab.indexOf("C");
        if(romanNumberFromArab[positionOfFirstC -1] === "D"){
            romanNumberFromArab = romanNumberFromArab.replace("DCCCC", "CM");
        }else{
            romanNumberFromArab = romanNumberFromArab.replace("CCCC", "CD");
        }
    }
    console.log(`Resultado en números romanos: ${romanNumberFromArab}`);
}
arabToRoman(49);

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