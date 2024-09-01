const age = 65;
const bill = 1000;

if(age <= 10){
    console.log("You don't need to pay");
}
else if(age >= 60){
    const discount = bill *20/100;
    console.log(discount);
    const payAmount = bill - discount;
    console.log(payAmount);
}
else{
    const discount = bill * 10/100;
    console.log(discount);
    const payAmount = bill - discount;
    console.log(payAmount);
}