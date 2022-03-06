module.exports = function reverse (n) {
    n = Math.abs(n);
    let arrayReverseInt = n.toString().split('').reverse().join('');
    return arrayReverseInt;
}
