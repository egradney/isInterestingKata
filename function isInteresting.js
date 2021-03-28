const hasZeroTail = (input) => {
    let array = String(input).split("");
    let length = array.length;
    if (length < 3) {
        return false;
    }
    if (array[0] !== '0') {
        if (array.slice(1, array.length + 1).every(num => num === '0')) {
            return true;
        };
   };
   return false;
};

const isIncrementing = (input) => {                    
    let array = String(input).split("");
    let length = array.length;
    if (length < 3) {
        return false;
    }
    if (! (Number(array[length - 2]) === 9 && 
    Number(array[length -1]) === 0)) {
        for (let i = 0; i < length - 1; i++) {
            if (!((Number(array[i]) + 1 === Number(array[i+1])))) {
                return false;
            };
        }
    }
    for (let i = 0; i < length -3; i++) {
        if (!((Number(array[i]) + 1 === Number(array[i+1])))) {
            return false;
            };
        };
    return true;
};

const isDecrementing = (input) => {
    let array = String(input).split("");
    let length = array.length;
    if (length < 3) {
        return false;
    }
    for (let i = 0; i < array.length - 1 ; i++) {
        if (!((Number(array[i]) - 1 === Number(array[i+1])))) {
            return false;
        };
    };
    return true;
};

const areAllTheSame = (input) => {
    let array = String(input).split("");
    let length = array.length;
    if (length < 3) {
        return false;
    }
    const allTheSame = (char) => char === array[0];
    if (array.every(allTheSame)) {
        return true;
    };
    return false;
};

const isAPalindrome = (input) => {
    let array = String(input).split("");
    let length = array.length;
    if (length < 3) {
        return false;
    };
    for (let i = 0; i < (length/2); i++) {
        if (! (array[i] === array[length-i-1])) {
            return false;
        };
    };
    return true;
};


const isInteresting = (number, awesomePhrases) => {
    let plusOne = number + 1;
    let plusTwo = number + 2;
    if (String(number).length < 3 && String(plusOne).length < 3 && String(plusTwo).length < 3) {
        return 0;
    };
    if (awesomePhrases) {
        for (let i = 0; i < awesomePhrases.length; i++) {
        if (number === Number(awesomePhrases[i])) {
            return 2;
        } else if (plusOne === Number(awesomePhrases[i]) ||
        plusTwo === Number(awesomePhrases[i])) {
            return 1;
            };
        }
    }; 
    if (hasZeroTail(number)  || 
        areAllTheSame(number)  || 
        isIncrementing(number)  ||  
        isDecrementing(number)  ||
        isAPalindrome(number)) {
        return 2;
    } else if (hasZeroTail(plusOne)  || 
        hasZeroTail(plusTwo)  || 
        areAllTheSame(plusOne)  || 
        areAllTheSame(plusTwo)  ||
        isIncrementing(plusOne)  || 
        isIncrementing(plusTwo)  || 
        isDecrementing(plusOne)  || 
        isDecrementing(plusTwo)  ||
        isAPalindrome(plusOne)  || 
        isAPalindrome(plusTwo) ) {
        return 1;
    } else {
        return 0;
    };
};
 
isInteresting(4000);
isInteresting(3);
isInteresting(30098);
isInteresting(98);
isInteresting(99);
isInteresting(3999);
isInteresting(799998);