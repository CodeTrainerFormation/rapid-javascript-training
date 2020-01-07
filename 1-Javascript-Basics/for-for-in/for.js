// let lineItemCount = 3;

// for (var i=0; i <= lineItemCount; i++)
//     console.log(i);


// let lineItemCount = 3;
// let i=0;
// for (; i <= lineItemCount; i++)
//     console.log(i);


// let lineItemCount = 3;
// let i=0;
// for (; i <= lineItemCount; i++)
//     console.log(i++);


// let lineItemCount = 5;

// for (let i=0; i <= lineItemCount; i++){
//     console.log(i);
//     if (i===1)
//         break;
// }

// let lineItemCount = 5;

// for (let i=0; i <= lineItemCount; i++){
//     if (i===1)
//         continue;
//     console.log(i);
// }

// let lineItemCount = 5;

// outerLoop:
// for (let i=0; i <= lineItemCount; i++){
//     for (let j=0; j<3; j++){
//     if (j===1)
//         continue outerLoop;
//     }
//     console.log(i);
// }

// let lineItem = {
//     product:  'Widget 1',
//     quantity: 4,
//     price: 9.50,
// };

// for (let field in lineItem)
//     console.log(field);

let lineItem = {
    product:  'Widget 1',
    quantity: 4,
    price: 9.50,
};

for (let field in lineItem)
    console.log(field + " : " + lineItem[field]);


