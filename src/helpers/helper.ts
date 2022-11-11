
export const operate = (operator:string, accValue:number, inputValue:number) => {
    switch (operator) {
        case "+": return accValue + inputValue;
        case "-": return accValue - inputValue;
        case "×": return accValue * inputValue;
        case "÷": return accValue / inputValue;
        case "=": return inputValue;
    }

}