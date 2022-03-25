let exponent = (base, power) => {
    if (power == 0) {
        return 1;
    } if (power < 0) {
        return 1 / exponent(base, -power);
    } else {
        return base * exponent(base, power-1)
    }
}


console.log(exponent(-2,5)); //-32
console.log(exponent(-7,3)); //-343
console.log(exponent(-12,2)); //144
console.log(exponent(-9,4)); //6561
console.log(exponent(4,-2)); //0.0625
console.log(exponent(2,0)); //1
console.log(exponent(2,1)); //2
