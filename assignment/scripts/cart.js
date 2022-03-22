console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];

function addItem(itemName) {
    basket.push('onions');
        if (itemName === 'onions'){
            return true;
        }
}

console.log(`Basket is ${basket}`); 
console.log('Adding onions (expect true)', addItem('onions'));
console.log(`Basket is now ${basket}`);

basket.push('celery');
basket.push('green peppers');


function listItems(){
    for(let item of basket) {
        console.log(item);
    }
}
listItems()

function empty(){
    let basket = [];
    console.log('Basket is empty');
    
}    
empty()