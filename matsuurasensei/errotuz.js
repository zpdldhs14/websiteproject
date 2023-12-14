var openButton = document.getElementById("openPopup");
var popup = document.getElementById("popup");
var closeButton = document.getElementById("closePopup");

openButton.addEventListener("click", function() {
    popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
    popup.style.display = "none";
});

// 배경 클릭 시 팝업 닫기
popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

var openButton2 = document.getElementById("openPopup2");
var popup2 = document.getElementById("popup2");
var closeButton2 = document.getElementById("closePopup2");

openButton2.addEventListener("click", function() {
    popup2.style.display = "block";
});

closeButton2.addEventListener("click", function() {
    popup2.style.display = "none";
});

// 배경 클릭 시 팝업 닫기
popup2.addEventListener("click", function(event) {
    if (event.target === popup2) {
        popup2.style.display = "none";
    }
});

var openButton3 = document.getElementById("openPopup3");
var popup3 = document.getElementById("popup3");
var closeButton3 = document.getElementById("closePopup3");

openButton3.addEventListener("click", function() {
    popup3.style.display = "block";
});

closeButton3.addEventListener("click", function() {
    popup3.style.display = "none";
});

// 배경 클릭 시 팝업 닫기
popup3.addEventListener("click", function(event) {
    if (event.target === popup3) {
        popup3.style.display = "none";
    }
});

var openButton4 = document.getElementById("openPopup4");
var popup4 = document.getElementById("popup4");
var closeButton4 = document.getElementById("closePopup4");

openButton4.addEventListener("click", function() {
    popup4.style.display = "block";
});

closeButton4.addEventListener("click", function() {
    popup4.style.display = "none";
});

// 배경 클릭 시 팝업 닫기
popup4.addEventListener("click", function(event) {
    if (event.target === popup4) {
        popup4.style.display = "none";
    }
});


function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'block';
    dropdownMenu.classList.toggle('visible');
}


function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

function openPopup2(popupId) {
    var popup2 = document.getElementById(popupId);
    popup2.style.display = 'block';
    dropdownMenu.classList.toggle('visible');
}


function closePopup2(popupId) {
    var popup2 = document.getElementById(popupId);
    popup2.style.display = 'none';
}

function openPopup3(popupId) {
    var popup3 = document.getElementById(popupId);
    popup3.style.display = 'block';
    dropdownMenu.classList.toggle('visible');
}


function closePopup3(popupId) {
    var popup3 = document.getElementById(popupId);
    popup3.style.display = 'none';
}

function openPopup4(popupId) {
    var popup4 = document.getElementById(popupId);
    popup4.style.display = 'block';
    dropdownMenu.classList.toggle('visible');
}


function closePopup4(popupId) {
    var popup4 = document.getElementById(popupId);
    popup4.style.display = 'none';
}

const hamburgerMenu = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');


hamburgerMenu.addEventListener('click', function(){
    dropdownMenu.classList.toggle('visible');
})

document.addEventListener('click', function(event){
    if (!hamburgerMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('visible');
    }
});
