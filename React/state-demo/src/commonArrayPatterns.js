// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE

const shoppingCart = [
    {id: 1, name: "Apple", price: 1.0},
    {id: 2, name: "Banana", price: 0.5},
    {id: 3, name: "Cherry", price: 2.0}     
];

// 1. ADDING AN ITEM
[...shoppingCart, {id: 4, name: "Date", price: 1.5}];

// 2. REMOVING AN ITEM BY ID
shoppingCart.filter(item => item.id !== 2);

// 3. UPDATING AN ITEM BY ID

shoppingCart.map((item) => {
    return {
        ...item,
    name: item.name.toLowerCase(),
    }  
})

// 4. MODIFYING AN ITEM BY ID

shoppingCart.map((item) => {
    if (item.id === 1) {
        return {
            ...item,
            price: item.price * 0.9 // Apply a 10% discount
        };
    }
    return item;
});