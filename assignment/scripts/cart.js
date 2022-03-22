console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];
// const maxItems = 5;

function addItem(itemName) {
    basket.push('onions');
        if (itemName = 'onions'){
            return true;
        }
}

console.log(`Basket is ${basket}`); 
console.log('Adding onions (expect true)', addItem());
console.log(`Basket is now ${basket}`);

basket.push('celery');
basket.push('green peppers');


function listItems(){
    for(let item of basket) {
        console.log('Thru unholy computer sorcery, the basket now contains:', item);
    }
}
listItems();

function empty(){
    let basket = [];
    console.log('Basket has been emptied.');   
}    
empty();



// function isFull(){
//     for (items of basket){
//         if (items < maxItems){
//             return false;
//         }
//         else if (items >= maxItems){
//             return true;
//         }
//     }    
// }
// console.log('Basket is full:', isFull());


