//--------------selectors-------------//

const input = document.getElementById("number");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const numbers = input.value.toString();
    const numArr = splitNumberIntoDigits(numbers);
    let sum1 = 0;
    let sum2 = 0;
    let totalsum = 0;
    for(let i = 0; i<9;i++) {
        if(i % 2 == 0){
            sum1 += numArr[i];
        } else {
            sum2 += numArr[i];
        }    
    }
    for(let i = 0; i<9 ; i++) {
        totalsum += numArr[i];
    }
    const numberTen = (sum1 * 7 - sum2) % 10;
    console.log(numberTen);
    const numberEleven = (totalsum + numberTen) % 10;
    console.log(numberEleven);
    console.log(numArr[0]);

    if(numArr.length !== 11) {
        result.textContent = "It has to be 11 characters.";
    } else if(numArr[0] == 0) {
        result.textContent = "It cannot start with `0`.";
    } else if(numArr[9] !== numberTen || numArr[10] !== numberEleven) {
        result.textContent = "Please enter a valid TC ID.";
    } else {
        result.textContent = `${input.value} is a valid TC ID.`;
    }
});

function splitNumberIntoDigits(a) {
    return a
        .split("")
        .map(Number);
}
