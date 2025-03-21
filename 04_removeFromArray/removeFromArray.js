const removeFromArray = function(array, ...args) {
    args.forEach((item) => {
        for(let i = 0; i <array.length; i++){
            if(array[i] === item) {
                array.splice(i, 1)
                i--
            }
        }
    })
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
