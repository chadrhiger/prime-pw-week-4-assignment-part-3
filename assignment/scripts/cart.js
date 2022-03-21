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

// loop over items in basket
// console.log each individual item on a new line


function listItems(){
    for(item in basket){
         console.log('Basket contains:', basket[0], basket[1], basket[2]);
        //  console.log('Basket contains:', basket[1])
        //  console.log('Basket contains:', basket[2])
    } 
}
listItems()



function empty(){
    basket === [];
    if( basket === 0){
        console.log('Basket is empty.');
    }

}



