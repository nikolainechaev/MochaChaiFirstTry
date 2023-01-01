// farenheit to celcius
//[23, 140, 212, 41] => [-5, 60, 100, 5]


function getCelcius(farenheit) {
    return farenheit.map(value => (value - 32) * 5/9)
}