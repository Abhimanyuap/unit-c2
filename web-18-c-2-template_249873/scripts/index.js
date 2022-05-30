// Add the coffee to local storage with key "coffee"
const url="https://masai-mock-api.herokuapp.com/coffee/menu";

async function getData(){
    try{
        let response=await fetch(url);
        let user=await response.json();
        append(user.menu.data);
        console.log(user.menu.data)
    }
    catch(err)
    {
        console.log(err)
    }
}

getData()

function append(user){
    let menu=document.getElementById("menu");
    
    user.forEach(function(el)
    {
        let image=document.createElement("img");
        let img=image.src=el.image;
       
        let title=document.createElement("h3");
        let tit=title.innerText=el.title;

        let price=document.createElement("h3");
        let pri=price.innerText=el.price

        let button=document.createElement("button");
        button.innerText="Add to bucket";
        button.setAttribute=("id","add_to_bucket");
        button.addEventListener("click",myFun1)

        let div=document.createElement("div");
        
        menu.append(div)
        div.append(image,title,price,button);

        
        function myFun1(){
        
            let obj={image:img,title:tit,price:pri}
            
            let arr=JSON.parse(localStorage.getItem("coffee"))||[];
            arr.push(obj)
            localStorage.setItem("coffee",JSON.stringify(arr))
           
       }
    })

}

