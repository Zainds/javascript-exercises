const fibonacci = function(n) {
    if(n < 0) return "OOPS"
    let previous = 0
    let current = 1
    for(let i = 1; i <=n; i ++){     
        let temp = current
        current += previous
        previous = temp
    }
    return previous
};


// Do not edit below this line
module.exports = fibonacci;
