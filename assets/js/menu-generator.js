const categories = [
    {
        "title": "Indian Starters",
        "image": "./assets/images/menu-2.png",
        "accentColor": "#c8893a",
        "items": [
            { "name": "10pcs Tandoori Prawns Starter", "price": "25.00", "desc": "Prawns cooked in clay oven with indian spices", "badge": "" },
            { "name": "8pcs Chicken Tikka Starter", "price": "20.00", "desc": "Tender pieces of chicken marinated in indian spices", "badge": "" },
            { "name": "Onion Bhaji", "price": "7.00", "desc": "Deep fried onion in gram flour batter", "badge": "" },
            { "name": "5pcs Vegetable Pakoras", "price": "7.00", "desc": "Potatoes & seasonal vegetables lightly shallow fried", "badge": "" },
            { "name": "5pcs Chicken Pakoras", "price": "9.00", "desc": "Chicken pieces finely battered shallow fried", "badge": "" },
            { "name": "Samosa", "price": "10.00", "desc": "Paneer, Vege, Lamb, Chicken, Tandoori Chicken. Whole $25.00 | 2 for $7.00", "badge": "" }
        ]
    },
    {
        "title": "Indian Main Course",
        "image": "./assets/images/menu-3.png",
        "accentColor": "#b5451b",
        "items": [
            { "name": "Butter Chicken", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Chicken Korma", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Lamb Korma", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Beef Korma", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Chicken Tikka Masala", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Mango Chicken", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Chicken Madras", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Vindaloo Chicken", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Vindaloo Lamb", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Vindaloo Beef", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Rogan Josh Chicken", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Rogan Josh Lamb", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Saag Chicken", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Kadai Chicken", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" },
            { "name": "Goat Curry", "price": "18.99", "desc": "M:$18.99 | L:$25.00", "badge": "" }
        ]
    },
    {
        "title": "Mains Vegetarian",
        "image": "./assets/images/menu-1.png",
        "accentColor": "#4a7c3f",
        "items": [
            { "name": "Mixed Vegetable Korma", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Vegetable Makhani", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Palak Paneer", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Paneer Tikka Masala", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Butter Paneer Masala", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Kadai Paneer", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Shahi Paneer", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Saag Aloo", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Aloo Ghobi", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Chana Masala", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" },
            { "name": "Daal Makhani or Yellow Daal", "price": "18.00", "desc": "M:$18.00 | L:$24.00", "badge": "" }
        ]
    },
    {
        "title": "Mains Seafood",
        "image": "./assets/images/menu-4.png",
        "accentColor": "#1a6b8a",
        "items": [
            { "name": "Fish Masala", "price": "20.00", "desc": "M:$20.00 | L:$25.00", "badge": "" },
            { "name": "Prawn Masala", "price": "20.00", "desc": "M:$20.00 | L:$25.00", "badge": "" },
            { "name": "Prawn Malabari", "price": "20.00", "desc": "M:$20.00 | L:$25.00", "badge": "" },
            { "name": "Butter Prawns", "price": "20.00", "desc": "M:$20.00 | L:$25.00", "badge": "" },
            { "name": "Prawn Saag", "price": "20.00", "desc": "M:$20.00 | L:$25.00", "badge": "" },
            { "name": "Fish Madras", "price": "20.00", "desc": "M:$20.00 | L:$25.00", "badge": "" }
        ]
    },
    {
        "title": "Chinese",
        "image": "./assets/images/chinese.png",
        "accentColor": "#c0392b",
        "items": [
            { "name": "Classic Fried Rice", "price": "18.99", "desc": "Wok-tossed rice with seasonal vegetables and soy sauce.", "badge": "" },
            { "name": "Vegetable Chow Mein", "price": "18.99", "desc": "Stir-fried noodles with crisp vegetables and savory spices.", "badge": "" },
            { "name": "Sweet & Sour Chicken", "price": "18.99", "desc": "Crispy chicken tossed in our house-made sweet and sour glaze.", "badge": "" },
            { "name": "Egg Foo Yong", "price": "18.99", "desc": "Authentic Chinese-style omelette served with a rich savory gravy.", "badge": "" },
            { "name": "Garlic Prawn with Rice", "price": "18.99", "desc": "Succulent prawns sautéed in fragrant garlic sauce, over steamed rice.", "badge": "" },
            { "name": "Honey Chicken", "price": "18.99", "desc": "Tender chicken pieces glazed in a thick, golden honey sauce.", "badge": "" },
            { "name": "Chilli Chicken", "price": "18.99", "desc": "A spicy Indo-Chinese classic with bell peppers and green chillies.", "badge": "" }
        ]
    },
    {
        "title": "Biryani Rice",
        "image": "./assets/images/biryani.png",
        "accentColor": "#d4a017",
        "items": [
            { "name": "Beef Biryani", "price": "22.00", "desc": "Slow-cooked beef layered with aromatic basmati rice and spices.", "badge": "" },
            { "name": "Chicken Biryani", "price": "22.00", "desc": "Chicken marinated in yogurt and spices, layered with fragrant rice.", "badge": "" },
            { "name": "Vegetable Biryani", "price": "18.00", "desc": "Garden fresh vegetables with saffron-infused basmati rice.", "badge": "" },
            { "name": "Lamb Biryani", "price": "25.00", "desc": "Tender lamb slow-cooked with long-grain rice and exotic spices.", "badge": "" }
        ]
    },
    {
        "title": "Naan Bread",
        "image": "./assets/images/naans.png",
        "accentColor": "#c8893a",
        "items": [
            { "name": "Roti (Wholemeal)", "price": "4.00", "desc": "Traditional whole wheat bread cooked in the tandoor.", "badge": "" },
            { "name": "Peshwari Naan", "price": "6.00", "desc": "Sweet naan stuffed with nuts, raisins, and coconut.", "badge": "" },
            { "name": "Cheese And Garlic Naan", "price": "5.50", "desc": "Freshly baked naan topped with garlic and stuffed with melted cheese.", "badge": "" },
            { "name": "Cheese Naan", "price": "5.50", "desc": "Soft naan bread stuffed with premium mozzarella cheese.", "badge": "" },
            { "name": "Garlic Naan", "price": "4.50", "desc": "Classic naan infused with roasted garlic and fresh coriander.", "badge": "" },
            { "name": "Plain Naan", "price": "4.00", "desc": "Traditional soft leavened bread baked fresh in our clay oven.", "badge": "" }
        ]
    },
    {
        "title": "Sides",
        "image": "./assets/images/sides.png",
        "accentColor": "#7d5a2e",
        "items": [
            { "name": "Loaded Fries", "price": "9.99", "desc": "Crispy golden fries topped with a blend of cheeses and house spices.", "badge": "" },
            { "name": "Garlic Chips", "price": "6.99", "desc": "Thick-cut potato chips tossed in savory garlic and herb seasoning.", "badge": "" },
            { "name": "Spicy Chicken Wings", "price": "11.99", "desc": "Crunchy wings tossed in our signature hot and spicy marinade.", "badge": "" },
            { "name": "Southern Style Wings", "price": "11.99", "desc": "Tender chicken wings with a classic southern-style breading.", "badge": "" },
            { "name": "Prawn Twister", "price": "10.00", "desc": "Succulent prawns wrapped in a crispy, golden pastry shell.", "badge": "" },
            { "name": "Potato Wedges", "price": "7.99", "desc": "Thick-cut seasoned wedges served with sweet chilli and sour cream.", "badge": "" },
            { "name": "Onion Rings", "price": "7.00", "desc": "Crispy, golden-brown battered onion rings seasoned to perfection.", "badge": "" }
        ]
    },
    {
        "title": "Meat Pizza",
        "image": "./assets/images/pizza_meat.png",
        "accentColor": "#8b2500",
        "items": [
            { "name": "Copper Chimney Special", "price": "19.50", "desc": "Our signature meat deluxe pizza with premium toppings.", "badge": "Signature" },
            { "name": "BBQ Lamb Deluxe", "price": "18.50", "desc": "Tender lamb pieces with a smoky BBQ sauce base and fresh onions.", "badge": "" },
            { "name": "Classic Italian", "price": "14.00", "desc": "Italian herbs, pepperoni, and fresh mozzarella.", "badge": "" },
            { "name": "Hot and Spicy Beef", "price": "15.50", "desc": "Ground beef with jalapeños and spicy sauce for an extra kick.", "badge": "" },
            { "name": "Double Beef and Bacon", "price": "15.00", "desc": "A hearty combination of double ground beef and crispy beef bacon.", "badge": "" }
        ]
    },
    {
        "title": "Seafood Pizza",
        "image": "./assets/images/pizza_meat.png",
        "accentColor": "#1a6b8a",
        "items": [
            { "name": "Salmon & Feta Special", "price": "21.50", "desc": "Premium smoked salmon with creamy feta and fresh baby spinach.", "badge": "Premium" },
            { "name": "Prawn & Bacon Deluxe", "price": "19.50", "desc": "Juicy prawns paired with crispy beef bacon and a garlic butter base.", "badge": "" },
            { "name": "Butter Prawn", "price": "19.50", "desc": "Succulent prawns in our famous mild butter sauce glaze.", "badge": "" }
        ]
    },
    {
        "title": "Chicken Pizza",
        "image": "./assets/images/pizza_meat.png",
        "accentColor": "#c8893a",
        "items": [
            { "name": "Butter Chicken Pizza", "price": "16.50", "desc": "Tender tandoori chicken on a rich butter chicken sauce base.", "badge": "Best Seller" },
            { "name": "Apricot Chicken", "price": "15.50", "desc": "Succulent chicken with a sweet and savory apricot glaze.", "badge": "" },
            { "name": "Tandoori Chicken", "price": "16.50", "desc": "Clay-oven grilled chicken with authentic Indian spices.", "badge": "" },
            { "name": "Peri Peri Chicken", "price": "16.50", "desc": "Spicy grilled chicken with our signature peri-peri sauce.", "badge": "" }
        ]
    },
    {
        "title": "Vegetarian Pizza",
        "image": "./assets/images/menu-6.png",
        "accentColor": "#4a7c3f",
        "items": [
            { "name": "Butter Paneer", "price": "16.50", "desc": "Soft cottage cheese in a rich and creamy butter sauce base.", "badge": "" },
            { "name": "Veg Delight", "price": "15.50", "desc": "A colorful medley of seasonal vegetables and fresh mozzarella.", "badge": "" },
            { "name": "Tandoori Paneer", "price": "14.50", "desc": "Marinated paneer on this flavorful and spicy vegetarian pizza.", "badge": "" },
            { "name": "Margherita", "price": "12.50", "desc": "Classic tomato base with extra mozzarella and fresh basil oil.", "badge": "" }
        ]
    },
    {
        "title": "Desserts",
        "image": "./assets/images/menu-5.png",
        "accentColor": "#7b3fa0",
        "items": [
            { "name": "Dessert Pizza", "price": "15.50", "desc": "A sweet pizza base topped with chocolate and seasonal fruits.", "badge": "" },
            { "name": "Chocolate Mousse", "price": "4.50", "desc": "Rich and velvety chocolate mousse, perfect for a light finish.", "badge": "" },
            { "name": "Cheesecake", "price": "5.00", "desc": "Traditional New York style cheesecake with a berry compote.", "badge": "" }
        ]
    },
    {
        "title": "Combos",
        "image": "./assets/images/menu-5.png",
        "accentColor": "#2e6b38",
        "items": [
            { "name": "Combo 1", "price": "15.00", "desc": "1 x Butter Chicken, Plain Naan, Can of Drink", "badge": "Chefs Combo" },
            { "name": "Combo 2", "price": "55.00", "desc": "2 x Chinese Combo, Chow Mein Beef, Sweet & Sour Chicken, 2 x Garlic Chicken, Egg Foo Yong, Chips OR 1 x 1.5L drink", "badge": "Chefs Combo" },
            { "name": "Value Pack Combo", "price": "45.00", "desc": "2 x Butter Chicken, Chicken Tikka Masala, Naan Bread, Poppadums, 4 x Wings OR 1 x 1.5L Drink", "badge": "Chefs Combo" },
            { "name": "Best buy Combo", "price": "25.00", "desc": "1 x Medium Butter Chicken, Naan Bread, 600ml Drink", "badge": "Chefs Combo" },
            { "name": "Chinese Combo", "price": "45.00", "desc": "1 x Fried Rice Chicken, Beef Stir fry Noodle, Sweet n Sour Chicken, 1 x Chicken Wonton OR 1 x 1.5L Drink", "badge": "Chefs Combo" },
            { "name": "Lunch Deal", "price": "12.00", "desc": "Butter Chicken Pizza (small) + Fries + Drink", "badge": "Pizza Combo" },
            { "name": "1 Large Pizza + 1 Side", "price": "20.00", "desc": "", "badge": "Pizza Combo" },
            { "name": "2 Large Pizza + 2 Sides", "price": "35.00", "desc": "", "badge": "Pizza Combo" },
            { "name": "3 Large Pizza + 2 Sides", "price": "48.00", "desc": "", "badge": "Pizza Combo" },
            { "name": "4 Large Pizza + 2 Sides", "price": "68.00", "desc": "", "badge": "Pizza Combo" }
        ]
    }
];

function generateMenuHTML() {
    let html = '';

    categories.forEach((cat, catIdx) => {
        const accentColor = cat.accentColor || '#c8893a';

        html += `
            <div class="menu-category-section">
                <div class="menu-category-header" style="--accent: ${accentColor};">
                    <div class="menu-category-image-wrap">
                        <img src="${cat.image}" alt="${cat.title}" loading="lazy" class="menu-category-img">
                        <div class="menu-category-img-overlay"></div>
                    </div>
                    <div class="menu-category-header-text">
                        <h2 class="menu-category-name">${cat.title}</h2>
                        <span class="menu-category-count">${cat.items.length} items</span>
                    </div>
                </div>
                <div class="menu-text-list">
        `;

        cat.items.forEach((item, itemIdx) => {
            const badgeHtml = item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : '';
            const descHtml = item.desc ? `<p class="menu-item-desc">${item.desc}</p>` : '';
            const itemId = `${cat.title.toLowerCase().replace(/\s+/g, '-')}-${itemIdx + 1}`;

            html += `
                <div class="menu-item-text-only" data-item-id="${itemId}" data-item-name="${item.name}" data-item-price="${item.price}">
                    <div class="menu-item-header">
                        <div class="menu-item-title-wrap">
                            <h3 class="menu-item-name">${item.name}</h3>
                            ${badgeHtml}
                        </div>
                        <div class="menu-item-leader"></div>
                        <div class="menu-item-price">$${item.price}</div>
                    </div>
                    ${descHtml}
                    <div class="menu-item-controls">
                        <button class="menu-item-add-btn add-to-order-btn">+ Add</button>
                        <div class="qty-controls" style="display: none;">
                            <button class="qty-btn qty-dec">−</button>
                            <span class="qty-number" style="font-size: 1.1rem; margin: 0 10px; color: var(--white);">1</span>
                            <button class="qty-btn qty-inc">+</button>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    html += `
        <img src="./assets/images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape"
            class="shape shape-2 move-anim">
        <img src="./assets/images/shape-6.png" width="343" height="345" loading="lazy" alt="shape"
            class="shape shape-3 move-anim">
    `;

    return html;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu-page .container');

    let titleHtml = `
        <p class="section-subtitle text-center label-2">Our Delicacies</p>
        <h1 class="headline-1 section-title text-center reveal">Our Menu</h1>
    `;

    menuContainer.innerHTML = titleHtml + generateMenuHTML();
});
