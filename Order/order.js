let items = [];
const order={
    '1001' : ["Affogato Coffee",6000],
    '1002' : ["Americano",5000],
    '1003' : ["Cafe Mocha",6000],
    '1004' : ["Cappuccino",5000],
    '1005' : ["Chai Latte",6000],
    '1006' : ["Double Espresso",5500],
    '1007' : ["Espresso",4500],
    '1008' : ["Filter Cofffee",5000],
    '1009' : ["Macchiato",5500],
    '1010' : ["Red Velvet",6000],
    '1011' : ["Latte",4500],
    '1012' : ["Flat White",5000],

    '2001' : ["Black Tea",6000],
    '2002' : ["Butterfly pea tea",5500],
    '2003' : ["Oolong tea",5500],
    '2004' : ["Ceylon cinnamon ",5500],
    '2005' : ["Earl grey tea",5000],
    '2006' : ["Chamomile tea",5000],
    '2007' : ["Hibiscus tea",4500],
    '2008' : ["Ginger tea",3500],
    '2009' : ["Green tea",4500],
    '2010' : ["Jasmine tea",6000],
    '2011' : ["lemon tea",3500],
    '2012' : ["Red date tea",5000],
    '2013' : ["Rooibos tea",5000],
    '2014' : ["Rose tea",5000],
    '2015' : ["White tea",5500],
    '2016' : ["Pu-erh tea",4500],

    '3001' : ["Cheese cake",6000],
    '3002' : ["Chocolate cake",8000],
    '3003' : ["Furit cake",7000],
    '3004' : ["Moon cake",3500],
    '3005' : ["Pudding",4000],
    '3006' : ["Strawberry cake",5000],
    '3007' : ["Tiramisu cake",8000],
    '3008' : ["Cupcake",5000],
    '3009' : ["Bagel",1500],
    '3010' : ["Bread stick ",2000],
    '3011' : ["Challah",4000],
    '3012' : ["Chessy garlic ",4000],
    '3013' : ["Cookies",2000],
    '3014' : ["Croissant",3000],
    '3015' : ["Pretzel",3000],
    '3016' : ["Nann",3000],

    '4001' : ["Strawberry",5000],
    '4002' : ["Watermelon",3500],
    '4003' : ["Dragron Fruit",5000],
    '4004' : ["Lemon",3500],
    '4005' : ["Orange",3500],
    '4006' : ["Pineapple",4000],
    '4007' : ["Avocado",5000],
    '4008' : ["Yogurt",4000],
    '4009' : ["Vanilla",8000],
    '4010' : ["Dark chocolate ",8000],
    '4011' : ["Durian ",12000],
    '4012' : ["Oreo cookies ",8000],
    '4013' : ["Matcha ",8000],
    '4014' : ["Strawberry",8000],
    '4015' : ["Cherry ",8000],
    '4016' : ["Butter pecan",10000],
    
    '5001' : ["Special Set",37000],
    '5002' : ["dumpling",7000],
    '5003' : ["Burger",5000],
    '5004' : ["Cheese potato",5000],
    '5005' : ["Pizza",5000],
    '5006' : ["potato stick",3000],
    '5007' : ["salad",5000],
    '5008' : ["Sandwish",6000],
    '5009' : ["steak",40000],
    '5010' : ["Spaghetti ",15000],
    '5011' : ["sushi",8000],
    '5012' : ["Spicy chicken ",10000],
    '5013' : ["Fish cake",3500],
    '5014' : ["Mul Naengmyeon ",25000],
    '5015' : ["dimsum ",4500],
    '5016' : ["Burrito",3500],
};

// Populate item details based on selected ID
function populateItemDetails() {
    const id = document.getElementById('item-id').value;
    if (order[id]) {
        document.getElementById('item-name').value = order[id][0];
        document.getElementById('item-price').value = order[id][1];
    } else {
        clearItem();
    }
}


function addItems() {
    let itemName = document.getElementById('item-name').value;
    let itemPrice = document.getElementById('item-price').value;
    let itemQuantity = document.getElementById('item-quantity').value;

    if (!itemName || !itemQuantity || !itemPrice) {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Information',
            text: 'Please fill in all fields.',
        });
        return;
    }

    if (isNaN(itemQuantity) || itemQuantity <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Quantity',
            text: 'Quantity must be a positive number.',
        });
        return;
    }

    items.push({
        name: itemName,
        price: parseInt(itemPrice),
        quantity: parseInt(itemQuantity),
    });

    showItems();
    calculatingTotalPrice();
    clearItem();
}


function confirmOrder() {
    if (items.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Empty Cart',
            text: 'Your cart is empty! Please add items to proceed.',
        });
        return;
    }

    // Calculate and display order summary
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const finalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    document.getElementById('total-items').innerText = totalItems;
    document.getElementById('final-amount').innerText = `${finalAmount}.00 Ks`;

    Swal.fire({
        icon: 'success',
        title: 'Order Confirmed!',
        text: 'Thank you for your purchase.',
    }).then(() => {
        // Reset fields and billing list
        items = [];
        showItems();
        calculatingTotalPrice();
        
       
        clearItem();
        document.getElementById('name').value = "";
        document.getElementById('number').value = ""; 
        document.getElementById('address').value = ""; 
    });
}



// Clear item input fields
function clearItem() {
    document.getElementById("item-id").value = "";
    document.getElementById("item-name").value = "";
    document.getElementById("item-quantity").value = "";
    document.getElementById("item-price").value = "";
}

function showItems() {
    const tbody = document.querySelector('#billing-table tbody');
    tbody.innerHTML = ""; 
    
    items.forEach((item, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
            <td><button class="btn btn-danger" onclick="removeItem(${index})">Remove</button></td>
        `;
        
        tbody.appendChild(tr); 
    });
}


// Search for items
function searchItem() {
    const searchValue = document.getElementById('search-item').value.toLowerCase();
    for (const id in order) {
        if (order[id][0].toLowerCase().includes(searchValue) || id.includes(searchValue)) {
            document.getElementById('item-id').value = id;
            populateItemDetails();
            break;
        }
    }
}


