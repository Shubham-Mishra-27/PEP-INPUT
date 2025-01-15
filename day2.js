// basic banking operation

let accName = "Shubham Mishra"
let accBal = 5000
let accNo = 76588


function addMoney(acc, amt) {
    if (acc == accNo) {
        accBal = accBal+=amt
        console.log("Amount added to given account..!!")
    } else {
        console.log("No account found..!!")
    }
}

function withdrawAmount(acc,amt) {
    if (acc == accNo && amt<=accBal) {
        accBal = accBal-amt
        console.log("Amount Withdrawn..!!")
    } else {
        console.log("Account not found..!!")
    }
}

withdrawAmount(76588,500)
addMoney(76588,505)
console.log(accBal)


// string interpolation

name1 = "Shubham Mishra"

greet = `Hello Mr. `$(name1)``
console.log(greet)