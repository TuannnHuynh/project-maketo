const products = [
    {
        "id": 1,
        "name": "Xpeed Projector",
        "price": 520,
        "sale": 499,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/36-2.png",
    },
    {
        "id": 2,
        "name": "Apple iPhone 7s",
        "price": 690,
        "sale": 660,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/24-1.png",
    },
    {
        "id": 3,
        "name": "Apple iPhone 6s",
        "price": 299,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png",
    },
    {
        "id": 4,
        "name": "Wireless Microphone",
        "price": 70,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/Cannon-2-Mini-Smart-Bluetooth-1.png",
    },
    {
        "id": 5,
        "name": "CC Camera",
        "price": 240,
        "sale": 210,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/08-2.png",
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
        "name": "Unlocked Mobile Phone",
        "price": 125,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/iphone7-1.png",
    },
    {
        "id": 9,
        "name": "Stereo Headset",
        "price": 16,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-1.jpg",
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
        "name": "Holy Stone Drone",
        "price": 720,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/WIFI-FPV-With-720P-Camera-High-Hold-Foldable-Drones-1.jpg",
    },
    {
        "id": 12,
        "name": "LED Projector",
        "price": 20,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Bluetooth-Smart-Projector-1.jpg",
    },
    {
        "id": 13,
        "name": "Mini 3D Glass",
        "price": 220,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/40-1.png",
    },
    {
        "id": 14,
        "name": "3D VR Glass",
        "price": 245,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/3D-VR-Glass-1.jpg",
    },
    {
        "id": 15,
        "name": "Bevigac Gamepad",
        "price": 220,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/47-1.png",
    },
    {
        "id": 16,
        "name": "Headset for Phones",
        "price": 39,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/51-1.png",
    },
    {
        "id": 17,
        "name": "Kotion Headset",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/49-300x300-1-1.jpg",
    },
    {
        "id": 18,
        "name": "Fuers Outdoor",
        "price": 520,
        "sale": 499,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/05-2.png",
    },
    {
        "id": 19,
        "name": "Metal Body Mobile",
        "price": 190,
        "sale": 160,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/22-1.png",
    },
    {
        "id": 20,
        "name": "Stereo Headset",
        "price": 16,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-1.jpg",
    },
    {
        "id": 21,
        "name": "Golden Bluetooth",
        "price": 23,
        "sale": 12,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Headphones-Wireless-Stereo-Headsets-earbuds-with-Mic-1.jpg",
    },
    {
        "id": 22,
        "name": "Bluetooth Speaker",
        "price": 70,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/HTB1olbtmlDH8KJj-1.jpg",
    },
    {
        "id": 23,
        "name": "Xpeed Headset",
        "price": 600,
        "sale": 560,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-4.jpg",

    },
    {
        "id": 24,
        "name": "Gaming Headphones",
        "price": 69,
        "sale": 42,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-2-1.jpg",
    },
    {
        "id": 25,
        "name": "Colorful LED Lights",
        "price": 90,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/BQ-615-Colorful-LED-Lights-Portable-Bluetooth-Speakers-1.jpg",
    },
    {
        "id": 26,
        "name": "Xpeed Laptop V2",
        "price": 699,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Licence-Windows10-13-3-VOYO-VBOOK-V3Pro-Celeron-N3450-Tablet-PC-Laptop-with-8G-RAM-128G-1-1.jpg",
    },
    {
        "id": 27,
        "name": "Xpeed Laptop",
        "price": 640,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/laptop_features_1-1.jpg",
    },
    {
        "id": 28,
        "name": "Mini Game Controller",
        "price": 320,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/46-1.png",
    },
    {
        "id": 29,
        "name": "Fortnite Controller",
        "price": 170,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/48-1.png",
    },
    {
        "id": 30,
        "name": "Bluetooth Gamepad",
        "price": 199,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/45-1.png",
    },
    {
        "id": 31,
        "name": "Bracelet Watch",
        "price": 40,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/43-1.png",
    },
    {
        "id": 32,
        "name": "Goldenhour Watch",
        "price": 60,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/42-1.png",
    },
    {
        "id": 33,
        "name": "Goldenhour Watch",
        "price": 560,
        "sale": 520,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/13-2.png",
    },
    {
        "id": 34,
        "name": "VOYO VBOOK V3Pro",
        "price": 310,
        "sale": 210,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Licence-Windows10-13-3-VOYO-VBOOK-V3Pro-Celeron-N3450-Tablet-PC-Laptop-with-8G-RAM-128G-1-1.jpg",
    },
    {
        "id": 35,
        "name": "Intel Laptop",
        "price": 640,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/15-6-Core-i7-3517U-Netbook-with-bluetooth-wifi-HDMI-VGA-Laptop-Computer-4M-Cache-Intel-1.jpg",
    },
    {
        "id": 36,
        "name": "Luxury Watche",
        "price": 640,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Brand-Luxury-Men-Watches-Men-Quartz-1.jpg",
    },
    {
        "id": 37,
        "name": "3D Glass",
        "price": 640,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/3D-VR-Glass-Virtual-Reality-1.jpg",
    },
    {
        "id": 38,
        "name": "Drones Helicopter",
        "price": 720,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Arasdm-APP-RC-Drones-1.jpg",
    },
    {
        "id": 39,
        "name": "Diamond Watches",
        "price": 310,
        "sale": 210,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Watch-Women-Quartz-Watches-1.jpg",
    },
    {
        "id": 40,
        "name": "HD LED TV",
        "price": 310,
        "sale": 210,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/28-1.png",
    },
    {
        "id": 41,
        "name": "Summer CaSual Cotton",
        "price": 19,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/36-1-1.png"
    },
    {
        "id": 42,
        "name": "Women Tops",
        "price": 19,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/35-1-1.png"
    },
    {
        "id": 43,
        "name": "Women Tops Solid Color",
        "price": 19,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/34-1-1.png"
    },
    {
        "id": 44,
        "name": "Black Solid Color Full Sleeve",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/30-1.png"
    },
    {
        "id": 45,
        "name": "Men's Solid Color Short Sleeve",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/31-1.png"
    },
    {
        "id": 46,
        "name": "Pionner Men Casual Short",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/26-1.png"
    },
    {
        "id": 47,
        "name": "Pionner Men Casual Short",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/39-1-1.png"
    },
    {
        "id": 48,
        "name": "Pionner Men Casual Short",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/38-1-1.png"
    },
    {
        "id": 49,
        "name": "Pionner Men Casual Full Sleeve",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/37-1-1.png"
    },
    {
        "id": 50,
        "name": "JBL Evol Type DC Wifi Speaker",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/37-1-1.png"
    },
    {
        "id": 51,
        "name": "JBL Evol Type DC Wifi Speaker",
        "price": 29,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/33-1.png"
    },
    {
        "id": 52,
        "name": "Zhndu Mobile",
        "price": 230,
        "sale": 160,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Zhndu-Mobile-1-1.png"
    },
    {
        "id": 53,
        "name": "Smart TV",
        "price": 30,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/LED-32-LG-32LJ500U-1-1.jpg"
    },
    {
        "id": 54,
        "name": "Mens Watches",
        "price": 240,
        "sale": 0,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Mens-Watches-1.jpg"
    },
    {
        "id": 55,
        "name": "Waterproof Camera",
        "price": 560,
        "sale": 520,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/06-300x300-1-1.jpg"
    },
    {
        "id": 56,
        "name": "Women Gold Watch",
        "price": 640,
        "sale": 540,
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/New-High-Quality-Luxury-Crystal-Diamond-Watches-1.jpg"
    },
]


const inputSearch = document.querySelector(".input-group");
const input = inputSearch.querySelector("input");
const box = document.querySelector(".autocom-box");
const groupAutocom = document.querySelector(".group-autocom");
const viewMore = document.querySelector(".view-more");


input.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArr = [];
    let tempArr = [];
    if (userData) {
        emptyArr = products.filter((data) => {
            return data.name.toLowerCase().includes(userData.toLowerCase());
        });
        emptyArr = emptyArr.map((data) => {
            if (data.sale === 0) {
                return `<li class="item-search flex">
                    <img src="${data.image}"
                        alt="">
                    <div>
                        <p class="name-search product-title">${data.name}</p>
                        <span class="price-sale">${formatCurrency(data.price)}</span>
                    </div>
                </li>
                `
            }
            else {
                return `<li class="item-search flex">
                    <img src="${data.image}"
                        alt="">
                    <div>
                        <p class="name-search product-title">${data.name}</p>
                        <span class="price">${formatCurrency(data.price)}</span>
                        <span class="price-sale">${formatCurrency(data.sale)}</span>
                    </div>
                </li>
                `
            }
        })
        for (let i = 0; i < 6; i++) {
            tempArr.unshift(emptyArr[i]);
        }
        groupAutocom.classList.remove("dis-none");
    }
    else {
        groupAutocom.classList.add("dis-none");
    }
    if (userData !== "" && emptyArr.length === 0) {
        let data = `<li class="not-search">Sorry, but nothing matched your search criteria. Please try again
        with some
        different keywords.</li>`
        box.innerHTML = data;
    }
    else {
        showProducts(tempArr);
        showViewMore(emptyArr);
        searchHighlight(userData)
    }
    showViewMore(emptyArr);
}

function showProducts(list) {
    let listData;
    if (!list.length) {
        listData = ``
    } else {
        listData = list.join('');
    }
    box.innerHTML = listData;
}
function showViewMore(arr) {
    if (arr.length >= 6) {
        viewMore.classList.remove("dis-none");
    }
    else if (arr.length >= 0) {
        viewMore.classList.add("dis-none");
    }
}

function searchHighlight(data) {
    let textToSearch = data;
    let paragraph = document.querySelectorAll(".name-search");
    let pattern = new RegExp(`${textToSearch}`, "gi");
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = paragraph[i].textContent.replace(pattern, match => `<span class="highlight">${match}</span>`);
    }
}