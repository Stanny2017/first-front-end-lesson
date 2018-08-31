// var line = readline().split('');
// var num = parseInt(line[0]);
// var price = parseFloat(line[1]);


function store1(num, price) {
    let originPrice = num * price;
    if (num < 3) {
        if (originPrice < 50) {
            return originPrice+10;
        } else {
            return originPrice
        }
    } else {
        if (originPrice * 0.7 < 50) {
            return originPrice * 0.7+10
        } else {
            return originPrice * 0.7
        }
    }
}
function store2(num, price) {
    let originPrice = num * price;
    if (originPrice < 10) {
        return originPrice+6
    } else if (originPrice < 99) {
        return originPrice - 2 +6
    } else {
        return originPrice - 6
    }
}

let num = 4,
    price = 2.30;
let price1 = store1(num,price).toFixed(2)
let price2 = store2(num,price).toFixed(2)
// if(price1===price2){
//     print(0)
// }else if(price1<price2){
//     print(1)
// }else{
//     print(2)
// }
if(price1===price2){
        console.log(0)
    }else if(price1<price2){
        console.log(1)
    }else{
        console.log(2)
    }