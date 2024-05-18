
function processArray(num){
    const result = [];

    for (let key in num){
        if(num[key]%2==0){
            result.push(num[key]**2);
        }
        else{
            result.push(num[key]**3);
        }
    }
    return result;
}

const number = [1,2,8,4]
const result = processArray(number)
console.log(result)

function formatArrayStrings(num,str){
    const formattedString = [];
    for (let key in str){
        if (num[key]%2==0){
            formattedString.push(str[key].toUpperCase()) 
        }
        else {
            formattedString.push(str[key].toLowerCase())
        }
    }
    return formattedString;
}

const str = ["boy","class","FOR","poll"]
const newNum =[2,3,4,5]
const num = processArray(newNum)
const formattedString = formatArrayStrings(num,str)
console.log(formattedString)