// On clicking remove button the item should be removed from DOM as well as localstorage.
var x=JSON.parse(localStorage.getItem("coffee"));
var bucket=document.getElementById("bucket");
 


x.forEach(function(el,index)
{
let image=document.createElement("img");
let img=image.src=el.image;
let total=document.getElementById("total_amount")

let title=document.createElement("h3");
let tit=title.innerText=el.title;

let price=document.createElement("h3");
let pri=price.innerText=el.price;

let pr=+el.price
console.log(typeof(pr))
let button=document.createElement("button");
button.innerText="Remove";
button.setAttribute("id","remove_coffee")
button.addEventListener("click",function(){
    remove (index);
})

var div=document.createElement("div");
div.setAttribute("id","divee")

total.append(pr)
bucket.append(div)
div.append(image,title,price,button);

})

function remove(index){
        document.getElementById("divee").innerHTML=null;
         
    
}