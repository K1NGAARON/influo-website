$(document).scroll(function () {
    const header = $('.header');

    if ($(this).scrollTop() > header.height()) {
        header.addClass('active');
    } else {
        header.removeClass('active');
    }
});

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

$('.small-menu-content .nav').click(closeMenu);

function toggleMenuDropdown(e) {
    if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass('active');
    } else {
        $('.dropdown-btn').parent().removeClass('active');
        $(this).parent().addClass('active');
    }
};

$('.dropdown-btn').click(toggleMenuDropdown);

const cookieBanner = document.querySelector(".cookie-banner-wrapper");
const cookiesAccepted = document.querySelector("#accept-cookies");
const blackOverlay = document.querySelector("#overlay");

// Accept cookies
cookiesAccepted.addEventListener("click", function acceptCookies() {
    blackOverlay.classList.add("hide-cookie-banner");
    cookieBanner.classList.add("hide-cookie-banner");
    storeCookieConsent();
});

function storeCookieConsent() {
    localStorage.cookies = "accepted";
}

window.addEventListener("DOMContentLoaded", function() {
    if ("cookies" in localStorage) {
        blackOverlay.classList.add("hide-cookie-banner");
        cookieBanner.classList.add("hide-cookie-banner");
    } else {
        // Shows cookieBanner
    }
});

let animationStyle = "slideUp";
let animationTarget = ".animate";

// SLIDE UP ROWS IN VIEWPORT
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(animationStyle);
        }
      });
  });
  
const targets = document.querySelectorAll(animationTarget);
for (const target of targets) {
    observer.observe(target);
}

function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');

};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});