const featured = [
    {
        "id": 1,
        "name": "Mini 3D Glass",
        "price": 220,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/40-1.png"
    },
    {
        "id": 2,
        "name": "Bluetooth Gamepad",
        "price": 199,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/45-1.png"
    },
    {
        "id": 3,
        "name": "Apple iPhone 6s",
        "price": 299,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png"
    },
    {
        "id": 4,
        "name": "Kotion Headset",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/49-300x300-1-1.jpg"
    },
    {
        "id": 5,
        "name": "Waterproof Camera",
        "price": 560,
        "sale": 520,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/06-300x300-1-1.jpg"
    },
    {
        "id": 6,
        "name": "Moving Camera",
        "price": 230,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/07-300x300-1-1.jpg",
    },
    {
        "id": 7,
        "name": "Core i7 Laptop",
        "price": 125,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/08-2.png",
    },
    {
        "id": 8,
        "name": "Stereo Headset",
        "price": 16,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-1.jpg",
    },
    {
        "id": 9,
        "name": "Golden Bluetooth",
        "price": 23,
        "sale": 12,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Headphones-Wireless-Stereo-Headsets-earbuds-with-Mic-1.jpg",
    },
    {
        "id": 10,
        "name": "Camera Drone",
        "price": 720,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/camera-drone-1.png",
    },
    {
        "id": 11,
        "name": "Mic for Phone",
        "price": 70,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/Speaker-Cannon-2-Mini-Smart-Bluetooth-1.png"
    },
    {
        "id": 12,
        "name": "wireless Speaker",
        "price": 65,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/REMAX-Portable-Wireless-Bluetooth-Speaker-1.jpg"
    }
]

const trending = [
    {
        "id": 1,
        "name": "Mini 3D Glass",
        "price": 220,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/40-1.png"
    },
    {
        "id": 2,
        "name": "Bluetooth Gamepad",
        "price": 199,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/45-1.png"
    },
    {
        "id": 3,
        "name": "Apple iPhone 6s",
        "price": 299,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png"
    }
]

const hotsale = [
    {
        "id": 1,
        "name": "Mini 3D Glass",
        "price": 220,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/40-1.png"
    },
    {
        "id": 2,
        "name": "Bluetooth Gamepad",
        "price": 199,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/45-1.png"
    },
    {
        "id": 3,
        "name": "Apple iPhone 6s",
        "price": 299,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png"
    }
]
const sliderOwl = $("#slider_3");
$(document).ready(function () {
    const options_3 = {
        items: 3,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>',
        ]
    }
    $("#slider_3").owlCarousel(options_3);
    renderItems(featured.reverse());
    const owlItem = $(".owl-item");
    $("#nav-3").on("click", "li", function () {
        $("#nav-3 li").removeClass("active");
        $(this).addClass("active");
        if (this.id === "featured") {
            for (let i = 0; i < owlItem.length; i++) {
                sliderOwl.trigger("remove.owl.carousel", [i]).trigger("refresh.owl.carousel");
            }
            renderItems(featured.reverse());
        }
        else if (this.id === "trending") {
            for (let i = 0; i < owlItem.length; i++) {
                sliderOwl.trigger("remove.owl.carousel", [i]).trigger("refresh.owl.carousel");
            }
            renderItems(trending.reverse());
        }
        else {
            for (let i = 0; i < owlItem.length; i++) {
                sliderOwl.trigger("remove.owl.carousel", [i]).trigger("refresh.owl.carousel");
            }
            renderItems(hotsale.reverse());
        }
    })
})

function renderItems(products) {
    let index = 0;
    for (let i = 0; i < products.length; i += 3) {
        const subArr = products.slice(i, i + 3);
        const htmlString = subArr.map((item) => {
            if (item.sale === 0) {
                return `<div class="item-product flex-center">
                    <img src="${item.image}"
                    alt="">
                    <div class="content-item">
                        <p class="product-title">${item.name}</p>
                        <span class="price-sale">${formatCurrency(item.price)}</span>
                    </div>
                </div>
                `
            }
            else {
                return `<div class="item-product flex-center">
                    <img src="${item.image}"
                        alt="">
                    <div class="content-item">
                        <p class="product-title">${item.name}</p>
                        <span class="price">${formatCurrency(item.price)}</span>
                        <span class="price-sale">${formatCurrency(item.sale)}</span>
                    </div>
                </div>
                `
            }
        }).join("");
        const items = `<div class="slider">${htmlString}</div>`
        sliderOwl.trigger("add.owl.carousel", [items, index++]).trigger("refresh.owl.carousel");
    }
}

