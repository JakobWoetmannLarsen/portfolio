window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("siden vises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "><";
    }
}

////////////////////////////////////////////////////////
/////////////////// signature //////////////////////////

setTimeout(myJ, 1500);

function myJ() {
    document.querySelector('#signature').textContent = "J";
}

setTimeout(myJa, 1600);

function myJa() {
    document.querySelector('#signature').textContent = "Ja";
}

setTimeout(myJak, 1700);

function myJak() {
    document.querySelector('#signature').textContent = "Jak";
}

setTimeout(myJako, 1800);

function myJako() {
    document.querySelector('#signature').textContent = "Jako";
}

setTimeout(myJakob, 1900);

function myJakob() {
    document.querySelector('#signature').textContent = "Jakob ";
}

setTimeout(myJakobW, 2000);

function myJakobW() {
    document.querySelector('#signature').textContent = "Jakob W ";
}

setTimeout(myJakobWo, 2100);

function myJakobWo() {
    document.querySelector('#signature').textContent = "Jakob Wo ";
}

setTimeout(myJakobWoe, 2200);

function myJakobWoe() {
    document.querySelector('#signature').textContent = "Jakob Woe ";
}

setTimeout(myJakobWoet, 2300);

function myJakobWoet() {
    document.querySelector('#signature').textContent = "Jakob Woet ";
}

setTimeout(myJakobWoetm, 2400);

function myJakobWoetm() {
    document.querySelector('#signature').textContent = "Jakob Woetm ";
}

setTimeout(myJakobWoetma, 2500);

function myJakobWoetma() {
    document.querySelector('#signature').textContent = "Jakob Woetma ";
}

setTimeout(myJakobWoetman, 2600);

function myJakobWoetman() {
    document.querySelector('#signature').textContent = "Jakob Woetman ";
}

setTimeout(myJakobWoetmann, 2700);

function myJakobWoetmann() {
    document.querySelector('#signature').textContent = "Jakob Woetmann ";
}

setTimeout(myJakobWoetmannL, 2800);

function myJakobWoetmannL() {
    document.querySelector('#signature').textContent = "Jakob Woetmann L";
}

setTimeout(myJakobWoetmannLa, 2900);

function myJakobWoetmannLa() {
    document.querySelector('#signature').textContent = "Jakob Woetmann La";
}

setTimeout(myJakobWoetmannLar, 3000);

function myJakobWoetmannLar() {
    document.querySelector('#signature').textContent = "Jakob Woetmann Lar";
}

setTimeout(myJakobWoetmannLars, 3100);

function myJakobWoetmannLars() {
    document.querySelector('#signature').textContent = "Jakob Woetmann Lars";
}

setTimeout(myJakobWoetmannLarse, 3200);

function myJakobWoetmannLarse() {
    document.querySelector('#signature').textContent = "Jakob Woetmann Larse";
}

setTimeout(myJakobWoetmannLarsen, 3300);

function myJakobWoetmannLarsen() {
    document.querySelector('#signature').textContent = "Jakob Woetmann Larsen";
}

//////////////////////////////////////////////////////////

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//////////////////////////////////////////////////////////
