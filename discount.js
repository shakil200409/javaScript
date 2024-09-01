const money = 10000;

const price = 1999;

if(price >= 5000){
    // 10% Discount
    const discount = price * 10/100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price >= 3000){
    // 7% Discount 
    const discount = price * 7/100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price >= 2000){
    // 5% discount
    const discount = price * 5/100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}