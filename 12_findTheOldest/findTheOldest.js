const findTheOldest = function(objArr) {
    return objArr.reduce((oldest, item) => {
        let itemDeath = 2025
        let oldestDeath = 2025
        if(item.yearOfDeath) itemDeath = item.yearOfDeath
        if(oldest.yearOfDeath) oldestDeath = oldest.yearOfDeath
        if(
            itemDeath - item.yearOfBirth > oldestDeath - oldest.yearOfBirth
        ) return item
        
        return oldest
    }, {
        name: "lolka",
        yearOfBirth: 1,
        yearOfDeath: 1,})
};

// Do not edit below this line
module.exports = findTheOldest;
