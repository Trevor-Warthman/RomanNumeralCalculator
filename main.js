import "./intToRoman.js"
import "./romanToInt.js"
      
var romans = ["I","IV","V","VI","VII","VIII","IX","X","XL","L","XC","C","CD","D","CM","M"]
var numbers = [1,4,5,6,7,8,9,10,40,50,90,100,400,500,900,1000]
    
function detectTypeAndConvert(romans,numbers) {
    var inp = document.getElementById("inputText").value;
    var out = ""
    if (Number.isInteger(inp)){
        out = intToRoman(parseInt(inp),romans,numbers)
    }
    else{
      out = romanToInt(toUpperCase(inp),romans,numbers)
    }
    //else{
    //  out = "Please enter a number or roman numeral between 1 and 4000."
    //}
    document.getElementById("demo").innerHTML = out;
}
