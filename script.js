// Global variables
let items = document.querySelectorAll(".card");


// fetch data from json file 
async function getData () {
    let data = await fetch('./store-demo-data.json');
    let jsonData = await data.json();
    showData(jsonData)
    
}

getData();

//display data
function showData(data){
    let products = data.products;
    let cards = document.querySelectorAll(".card")
    cards.forEach((card,i)=>{
    card.children[0].src = products[i].img;
    card.children[1].children[1].children[0].textContent = products[i].price;
    card.children[2].textContent = products[i].name;
    card.children[3].textContent = products[i].discription;
    })
}



//Search for item on keypress
function search(){
    let value = document.getElementById("search").value.toUpperCase();
    for (i = 0; i < items.length; i++) {
        let a = items[i].getElementsByTagName("a")[0];
        let textValue = a.textContent;
        if (textValue.toUpperCase().indexOf(value) > -1) {
            items[i].style.display = "";
            // items[i].getElementsByTagName("p").
        } else {
            items[i].style.display = "none";
        }  
    }
}


// search by range
function Filter1(){
    for (i=0; i<items.length;i++){
        let price = items[i].querySelector(".price").children[0];
        let priceText = price.textContent;
        if(priceText >= 10 && priceText <= 100){
            items[i].style.display = "";
        }
        else {
            items[i].style.display = "none";
        }
        
    }
}

function Filter2(){

    for (i=0; i<items.length;i++){
        let price = items[i].querySelector(".price").children[0];
        let priceText = price.textContent;
        if(priceText >= 100 && priceText <= 500){
            items[i].style.display = "";
        }
        else {
            items[i].style.display = "none";
        }
        
    }


}
    
     

function Filter3(){
    for (i=0; i<items.length;i++){
        let price = items[i].querySelector(".price").children[0];
        let priceText = price.textContent;
        if(priceText >= 500){
            items[i].style.display = "";
        }
        else {
            items[i].style.display = "none";
        }
        
    }
}


// show all 

function All(){
    for (i=0; i<items.length;i++){
        
            items[i].style.display = "";
        
    }
}


// show drop down
function ShowList(){
document.querySelector(".drop-down").classList.toggle("show");
}



// Darkmode 
function DarkMode(){
    document.querySelector("body").classList.toggle("dark-body");
    document.querySelector(".drop-down ul").classList.toggle("dark-item");
    document.querySelector(".filters").classList.toggle("dark-item");
    document.querySelector(".left").classList.toggle("dark-item");
    document.querySelector(".product-search .search input").classList.toggle("dark-item");
    document.querySelector(".nav").classList.toggle("dark-item");
    let cards =document.querySelectorAll(".card");
    for(let i =0;i<cards.length;i++){
        cards[i].classList.toggle("dark-item");

    }
}
// feather icons
feather.replace()