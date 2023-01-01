// farenheit to celcius
//[23, 140, 212, 41] => [-5, 60, 100, 5]


function getCelcius(farenheit) {
    return farenheit.map(value => (value - 32) * 5/9)
}
function addNumbers(numbers){
    return numbers.reduce((a,b) => a + b)
}
function goodOrBadIdea(arr){
    let goodCounter = 0;

    for(const idea of arr){
        if(idea === "good"){
            goodCounter += 1;
        }
    }
    return goodCounter === 0 ? "Fail!"
    : goodCounter > 2 ? "I smell a series!" : "Publish";
}