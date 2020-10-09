//Recursive Function which returns an integer's string roman numeral value
// @param {Integer} num
// @return {String}
// @Requires 1 < num < 4000
//@Params: 
// - num: the integer
// - array of roman numerals 1-10,40,50,90,100,400,500,900,1000
// - array of numbers same as above

export function intToRoman(num,romans,numbers){
    if (num == 0){
        return ""
    }
    let i = 15
    while (num - numbers[i] < 0){
        i--
    }
    num = num - numbers[i]
    current = romans[i]
    return (current + intToRoman(num,romans,numbers))
}
