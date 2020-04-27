// Name: Binyam Kahsay   ID:610694


"use strict";
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num1
}


//***********************************************************************8 */



function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        return num1;
    else if (num2 > num1 && num2 > num3)
        return num2;
    else
        return num3;
}


//***********************************************************************8 */



function isVowel(c) {
    switch (c) {
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'a':
        case 'A':
        case 'o':
        case 'O':
            return true;
        default:
            return false;
    }
}


//***********************************************************************8 */



function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


//***********************************************************************8 */



function reverse(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


//***********************************************************************8 */



function multiply(arr) {
    let total = 1;
    for (let i in arr) {
        total *= arr[i];
    }
    return total;
}



//***********************************************************************8 */




function findLongestWord(words) {
    let longest = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}


//***********************************************************************8 */



function filterLongWords(Arrayss, len) {
    let give = new Array();
    let lw = 0;
    Arrayss.forEach(function (sample) {
        if (len <= sample.length) {
            give.push(sample);
        }
    });
    return give;
}


//***********************************************************************8 */



function computeSumOfSquares(num) {
    return num.map((n) => n * n)             // find the squares
                  .reduce((sum, n) => sum + n);           // sum them
}


//***********************************************************************8 */



function printOddNumbersOnly(nums) {
    const oddnumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1)
        oddnumbers.push(nums[i]);
    }
    return oddnumbers;
}


//***********************************************************************8 */



function computeSumOfSquaresOfEvensOnly(sample) {

    let totalsum = 0;

    for (let i = 0; i < sample.length; i++) {
        if ((sample[i] % 2) == 0) {
            totalsum += sample[i] * sample[i]
        }
    }
    return totalsum;
}


//***********************************************************************8 */




function sum(numbers) {
   
    return numbers.reduce((x, y) => x + y , 0);
}




function multiply(numbers) {
    return numbers.reduce((x, y) => x * y, 1);
}

//***********************************************************************8 */



function findSecondBiggest(numbers) {
    var max1 = numbers[0];
    var max2 = -Infinity;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > max1) {
            max2 = max1;
            max1 = numbers[i];
        } else if (numbers[i] > max2 && numbers[i] !== max1) {
            max2 = numbers[i];
        }
    }
    return max2;
}


//***********************************************************************8 */



function printFibo(n, a, b) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = a;
    fib[1] = b;
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}



//***********************************************************************8 */
 //webform1
 var form = document.querySelector("#webform1");
 form.addEventListener("submit", function(event) {
     console.log(document.getElementById("email").value);
     console.log(document.getElementById("password").value);
     console.log(document.getElementById("url").value);
     event.preventDefault();
 });
 
 //webform2
 var form = document.querySelector("#webform2");
 form.addEventListener("submit", function(event) {
         console.log(document.getElementById("productNumber").value);
         console.log(document.getElementById("productName").value);
         console.log(document.getElementById("unitPrice").value);
         console.log(document.getElementById("supplier").value);
         console.log(document.getElementById("supplyDate").value);
         event.preventDefault();
     })

//**************************************************************************** */
setInterval(() => {
    let now = new Date();
    console.log(now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+" " +now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
}, 1000)