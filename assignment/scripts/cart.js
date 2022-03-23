console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];
// const maxItems = 5;

function addItem(itemName) {
    basket.push(itemName);
    return true;
}


console.log(`Basket is ${basket}`); 
console.log('Adding mirepoix (expect true)', addItem('mirepoix'));
console.log(`Basket is now ${basket}`);
console.log('Adding onions (expect true)', addItem('onions'));
console.log('Adding celery (expect true)', addItem('celery'));
console.log('Adding green peppers (expect true)', addItem('green peppers'));
console.log(`Basket is now ${basket}`);

// list current basket items
function listItems(){
    for(let item of basket) {
        console.log('Fire sale at the temple! Your basket now contains:', item);
    }
}
listItems();

// reset the basket array to 0
// 
function empty(){
    basket = [];
    console.log('Jesus has overturned your basket.');
}
empty();
console.log(`Basket is now ${basket}`);




