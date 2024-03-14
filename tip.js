// accesing all the inputs
let totalAmt = document.getElementById('totalAmt');
let tipAmt = document.getElementById('tipAmt');
let increaseBtn = document.getElementById('increaseCount');
let decreaseBtn = document.getElementById('decreaseCount');
let billAmt = document.getElementById('billAmt');
let people = document.getElementById('peopleCount');
let noOfPeople = 1;
//calculating the bill
const calculateBill = () => {
    let bill = Number(totalAmt.value)
    let tipPercent = Number(tipAmt.value / 100)
    let totalBill = bill + (bill * tipPercent)
    billAmt.innerText = '$' + totalBill / noOfPeople;
}
const increaseOpt = () => {
    noOfPeople++;
    people.innerText = noOfPeople;
    billAmt.innerText = '$' + Number(totalAmt.value) / noOfPeople;
}
const decreaseOpt = () => {
    noOfPeople--;
    if (noOfPeople < 1) {
        people.innerText = "1";
        noOfPeople = 1;
    } else {
        people.innerText = noOfPeople;
    }
    billAmt.innerText = '$' + Number(totalAmt.value) / noOfPeople;
}