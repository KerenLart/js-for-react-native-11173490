
function processArray(arr){
    const result = [];

    for (let key in arr){
        if(arr[key]%2==0){
            result.push(arr[key]**2);
        }
        else{
            result.push(arr[key]**3);
        }
    }
    return result;
}

const number = [1,2,3,4,5,6,7,8]
const result = processArray(number)
console.log(result)