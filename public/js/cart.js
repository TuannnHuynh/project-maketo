const itemsAdd = [
    {
        "id": 1,
        "name": "Intel Laptop",
        "price": 640,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/15-6-Core-i7-3517U-Netbook-with-bluetooth-wifi-HDMI-VGA-Laptop-Computer-4M-Cache-Intel-1.jpg",
        "rate": 4,
    },
    {
        "id": 2,
        "name": "Core i7 Laptop",
        "price": 125,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/01-1.png",
        "rate": 5,
    },
    {
        "id": 3,
        "name": "Xpeed Laptop V2",
        "price": 699,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Licence-Windows10-13-3-VOYO-VBOOK-V3Pro-Celeron-N3450-Tablet-PC-Laptop-with-8G-RAM-128G-1-1.jpg",
        "rate": 3.5,
    },
    {
        "id": 4,
        "name": "Xpeed Laptop",
        "price": 640,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/laptop_features_1-1.jpg",
        "rate": 3.5,
    },
]
const carts = [];
const likeItem = [];
let boolModal = false;
let sum = 0;
renderAllItems(itemsAdd);
renderNoCart();
const btnsAdd = $(".btn-add-to-cart");
const btnsTextAdd = $(".btn-add-to-cart span");
$(".items-add .col").on("click", "button", function (e) {
    const parent = $(e.target).parents(".items-add .col")[0];
    const id = $(parent).data("id");
    const itemAdd = itemsAdd.find((val) => val.id === id);
    const idx = itemsAdd.findIndex((val) => val.id === +id);
    const item = itemsAdd[idx];
    const idx_cart = carts.findIndex((val) => val.id === item.id);
    btnsAdd[idx].classList.add("active-yellow");
    btnsTextAdd[idx].textContent = "View cart";
    if (idx_cart === -1) {
        carts.push({ ...itemAdd });
    }
    if (itemAdd.sale === 0) {
        sum += itemAdd.price;
    } else {
        sum += itemAdd.sale;
    }
    if (carts.length === 0) {
        renderNoCart();
        $(".modal-bottom").addClass("dis-none")
    }
    else {
        $("#value").text(carts.length);
        $(".modal-bottom").removeClass("dis-none")
        renderCart(carts);
        $("#sub").text(formatCurrency(sum));
    }
})

function toggleModal() {
    if (!boolModal) {
        boolModal = true;
        $(".modal").removeClass("dis-none");
        $(".modal-inner").removeClass("modal-close-animate");
        $(".modal-inner").addClass("modal-show-animate");
    } else {
        boolModal = false;
        $(".modal-inner").removeClass("modal-show-animate");
        $(".modal-inner").addClass("modal-close-animate");
        setTimeout(function () {
            $(".modal").addClass("dis-none");
        }, 500);
    }
}

function renderItemCart_NotSale(product) {
    let item = `
        <div data-id="${product.id}" class="col flex-center-center item-add-cart">
            <div class="img-item">
                <img src="${product.image}"
                    alt="">
            </div>
            <div class="content-item">
                <div class="header-content flex-center-between">
                    <div class="rating">
                        ${renderRateStar(product.rate)}
                    </div>
                    <span class="heart"><i class="fa-regular fa-heart"></i></span>
                </div>
                <p class="product-title">${product.name}</p>
                <div class="price-item">
                    <span class="price-sale">${formatCurrency(product.price)}</span>
                </div>
                <button class="btn-add-to-cart hover-btn"><span>Add to cart</span></button>
            </div>
        </div>
        `;
    return item;
}

function renderItemCart(product) {
    let item = `
        <div data-id="${product.id}" class="col flex-center-center item-add-cart">
            <div class="img-item">
                <img src="${product.image}"
                    alt="">
            </div>
            <div class="content-item">
                <div class="header-content flex-center-between">
                    <div class="rating">
                        ${renderRateStar(product.rate)}
                    </div>
                    <span class="heart"><i class="fa-regular fa-heart"></i></span>
                </div>
                <p class="product-title">${product.name}</p>
                <div class="price-item">
                    <span class="price">${formatCurrency(product.price)}</span>
                    <span class="price-sale">${formatCurrency(product.sale)}</span>
                </div>
                <button class="btn-add-to-cart hover-btn"><span>Add to cart</span></button>
            </div>
        </div>
        `;
    return item;
}

function renderAllItems(products) {
    let items = "";
    for (const product of products) {
        if (product.sale === 0) {
            items += renderItemCart_NotSale(product);
        }
        else {
            items += renderItemCart(product);
        }
    }
    $(".items-add .row").html(items);
}

function renderCart(carts) {
    let items = "";
    for (const cart of carts) {
        if (cart.sale === 0) {
            items += `
            <div data-id=${cart.id} class="item-cart flex">
                <img src="${cart.image}"
                    alt="">
                <div class="content-item flex-between">
                    <div class="content">
                        <p class="product-title">${cart.name}</p>
                        <p class="amount-item">1 x <span class="price-sale">${formatCurrency(cart.price)}</span></p>
                    </div>
                    <button class="btn-delete"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        `
        } else {
            items += `
            <div data-id=${cart.id} class="item-cart flex">
                <img src="${cart.image}"
                    alt="">
                <div class="content-item flex-between">
                    <div class="content">
                        <p class="product-title">${cart.name}</p>
                        <p class="amount-item">1 x <span class="price-sale">${formatCurrency(cart.sale)}</span></p>
                    </div>
                    <button class="btn-delete"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        `
        }
    }
    $(".modal-body").html(items);
}
function renderNoCart() {
    let noProducts = `<p class="no-products">No products in the cart</p>`
    $(".modal-body").html(noProducts);
}
$(".close-modal").on("click", toggleModal)
$(".btn-cart").on("click", toggleModal)
$(".modal").on("click", function (e) {
    if (e.target.closest(".item-cart")) {
        const parent = $(e.target).parents(".item-cart")[0];
        const id = $(parent).data("id");
        const idx = carts.findIndex((val) => val.id === +id);
        if (carts[idx].sale === 0) {
            sum -= carts[idx].price;
        } else {
            sum -= carts[idx].sale;
        }
        carts.splice(idx, 1);
        renderCart(carts);
        if (carts.length === 0) {
            $(".modal-bottom").addClass("dis-none");
            renderNoCart();
        } else {
            $(".modal-bottom").removeClass("dis-none");
            $("#sub").text(formatCurrency(sum));
        }
        $("#value").text(carts.length);
    }
    if (e.target === e.currentTarget) {
        toggleModal();
    }
})

let count = 0;

$(".items .categories").on("click", function (e) {
    if (e.target.closest(".heart")) {
        const parent = $(e.target).parents(".heart")[0];
        parent.innerHTML = `<i class="fa-solid fa-check"></i>`
        count += 1;
        console.log(count);
        $("#value-like").text(count);
        parent.classList.remove("heart");
        parent.classList.add("check");
    }
})

$(".item-add-cart .heart").on("click", function (e) {
    const parent = $(e.target).parents(".heart")[0];
    parent.innerHTML = `<i class="fa-solid fa-check"></i>`
    count += 1;
    console.log(count);
    $("#value-like").text(count);
    parent.classList.remove("heart");
    parent.classList.add("check");
})

