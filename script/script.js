let numbers = [2,5,7,10,50]

function displayNumber(){
    const nextNumber = numbers.shift();
    document.getElementById('display').innerHTML = nextNumber;
}if(numbers.length>0){
    setTimeout(displayNumber, 1000);
}