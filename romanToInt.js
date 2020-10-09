//Note: Easier than making roman numerals. Just take each part one at a time.
//Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
export var romanToInt = function(s,romans,numbers) {
    if (s.length == 0)
        return 0
    var current = 0
    let i = 15
    while (romans[i] != s.substring(0,romans[i].length)){
        i--
    }
    s = s.substring(romans[i].length,s.length)
    return (numbers[i] + romanToInt(s,romans,numbers))
};
