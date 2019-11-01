var priceSneakers = 120;
var priceSocks = 5;
var priceBackpack = 80;

var total;

var sneakersQuantity = document.getElementById("sneakers-quantiy").innerHTML;
var socksQuantity = document.getElementById("socks-quantiy").innerHTML;
var backpackQuantity = document.getElementById("backpack-quantiy").innerHTML;

var sneakerQuantity = parseInt(sneakersQuantity);
socksQuantity = parseInt(socksQuantity);
backpackQuantity = parseInt(backpackQuantity);


function addSneackerItem() {
    document.getElementById("sneakers-quantiy").innerHTML = ++sneakerQuantity;
    sneakersPrice = priceSneakers * sneakerQuantity;
    document.getElementById("sneaker-price").innerHTML=sneakersPrice;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
}

function removeSneackerItem() {
    if (sneakerQuantity >0){
    document.getElementById("sneakers-quantiy").innerHTML = --sneakerQuantity; 
    sneakersPrice = priceSneakers * sneakerQuantity;
    document.getElementById("sneaker-price").innerHTML=sneakersPrice;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
}

}

function addSocksItem() {
    document.getElementById("socks-quantiy").innerHTML = ++socksQuantity;
    socksPrice = priceSocks * socksQuantity;
    document.getElementById("socks-price").innerHTML=socksPrice;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
}

function removeSocksItem() {
    if (socksQuantity >0){
    document.getElementById("socks-quantiy").innerHTML = --socksQuantity;
    socksPrice = priceSocks * socksQuantity;
    document.getElementById("socks-price").innerHTML=socksPrice;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
    }
}

function addBackpackItem() {
    document.getElementById("backpack-quantiy").innerHTML = ++backpackQuantity;
    backpackPrice = priceBackpack * backpackQuantity;
    document.getElementById("backpack-price").innerHTML=backpackPrice;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
}

function removeBackpackItem() {
    if (backpackQuantity >0){
    document.getElementById("backpack-quantiy").innerHTML = --backpackQuantity;
    backpackPrice = priceBackpack * backpackQuantity;
    document.getElementById("backpack-price").innerHTML=backpackPrice;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
    }
}

var sneakersPrice = priceSneakers * sneakerQuantity;
var socksPrice = priceSocks * socksQuantity;
var backpackPrice = priceBackpack * backpackQuantity;


function removeSneaker() {
    var elmnt = document.getElementById("sneakers-row");
    elmnt.remove();
    sneakersPrice = 0;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
}

function removeSocks() {
    var elmnt = document.getElementById("socks-row");
    elmnt.remove();
    socksPrice = 0;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;
}

function removeBackpack() {
    var elmnt = document.getElementById("backpack-row");
    elmnt.remove();
    backpackPrice = 0;
    total = sneakersPrice + socksPrice + backpackPrice;
    document.getElementById("total").innerHTML = " " + total;

}
document.getElementById("sneakers-delete").addEventListener("click", removeSneaker);
document.getElementById("socks-delete").addEventListener("click", removeSocks);
document.getElementById("backpack-delete").addEventListener("click", removeBackpack);

document.getElementById("sneakers-quantity-up").addEventListener("click", addSneackerItem);
document.getElementById("sneakers-quantity-down").addEventListener("click", removeSneackerItem);
document.getElementById("socks-quantity-up").addEventListener("click", addSocksItem);
document.getElementById("socks-quantity-down").addEventListener("click", removeSocksItem);
document.getElementById("backpack-quantity-up").addEventListener("click", addBackpackItem);
document.getElementById("backpack-quantity-down").addEventListener("click", removeBackpackItem);

total = sneakersPrice + socksPrice + backpackPrice;

document.getElementById("total").innerHTML = " " + total;
document.getElementById("sneaker-price").innerHTML = sneakersPrice;
document.getElementById("socks-price").innerHTML = socksPrice;
document.getElementById("backpack-price").innerHTML = backpackPrice;

var sneakersNbrClick=1;
var sneakersHeart= document.getElementById("love-sneakers");
function chnageSneakersHeartColor(){
    if ((sneakersNbrClick % 2) ==0){
        sneakersHeart.style.color="black";
        sneakersNbrClick++
    }
    else {sneakersHeart.style.color="red";
    sneakersNbrClick++;
}
}
var socksNbrClick=1;
var socksHeart= document.getElementById("love-socks");
function chnageSocksHeartColor(){
    if ((socksNbrClick % 2) ==0){
        socksHeart.style.color="black";
        socksNbrClick++
    }
    else {socksHeart.style.color="red";
        socksNbrClick++;
}
}
var backpackNbrClick=1;
var backpackHeart= document.getElementById("love-backpack");
function chnageBackpackHeartColor(){
    if ((backpackNbrClick % 2) ==0){
        backpackHeart.style.color="black";
        backpackNbrClick++
    }
    else {backpackHeart.style.color="red";
        backpackNbrClick++;
}
}
document.getElementById("love-sneakers").addEventListener("click", chnageSneakersHeartColor);
document.getElementById("love-socks").addEventListener("click", chnageSocksHeartColor);
document.getElementById("love-backpack").addEventListener("click", chnageBackpackHeartColor);