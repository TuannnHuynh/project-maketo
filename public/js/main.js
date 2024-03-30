//import product from "./product.js";
let boolDownAngle = false;
let boolActive = false;
let contentGroup = document.querySelector(".content-group");
$(document).ready(function () {
    const option_1 = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        mouseDrag: false,
        animateIn: `fadeIn`,
        animateOut: `fadeOut`,
    }
    const option_2 = {
        items: 1,
    }
    $("#slider_1").owlCarousel(option_1);
    $(".slider_2").owlCarousel(option_2);
    $("#backtop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500)
    })
});
$(".menu-all-categories").on("click", function (e) {
    $(".drop-down-categories").fadeToggle(200);
    if (!boolDownAngle) {
        boolDownAngle = true;
        $(".down-angle i").addClass("scaleDown");
    }
    else {
        boolDownAngle = false;
        $(".down-angle i").removeClass("scaleDown");
    }
})

$(".group").on("click", function (e) {
    $(".drop-down-input").toggle();
    if (!boolActive) {
        boolActive = true;
        $(".group span").addClass("active-blue");
        $(".group i").addClass("active-blue");
    }
    else {
        boolActive = false;
        $(".group span").removeClass("active-blue");
        $(".group i").removeClass("active-blue");
    }
})
$(".drop-down-input").on("click", "li", function (e) {
    e.preventDefault();
    setTimeout(function () {
        contentGroup.textContent = e.target.textContent;
        $(".drop-down-input").toggle();
        if (!boolActive) {
            boolActive = true;
            $(".group span").addClass("active-blue");
            $(".group i").addClass("active-blue");
        }
        else {
            setTimeout(function () {
                boolActive = false;
                $(".group span").removeClass("active-blue");
                $(".group i").removeClass("active-blue");
            }, 200);
        }
    }, 200)

})
$(".menu-tablet-btn").on("click", function (e) {
    $(".modal-inner").addClass("modalMoveToRight");
    $(".modal-menu-tablet").addClass("modalMoveToRight");
})

$(".btn-close").on("click", function (e) {
    $(".modal-inner").removeClass("modalMoveToRight");
    $(".modal-menu-tablet").removeClass("modalMoveToRight");
})