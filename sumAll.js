const sumAll = function(numA, numB) {
    var sum = 0;
    if (typeof numA === 'string' || typeof numB === 'string' || 
    numA instanceof Array || numB instanceof Array || 
    numA < 0 || numB < 0) {
        return 'ERROR';
    } else if (numA < numB) {
            for (let i = numA; i <= numB; i++) {
                sum = sum + i;
    }
 } else {
        for (let i = numB; i <= numA; i++) {
                sum = sum + i;
            }
        }
        return sum;
    };