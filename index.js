let slide=document.querySelectorAll("#slider_box_id");
let slideid=document.querySelectorAll("#slider_id");
let arrowleft=document.getElementById("arrow_left");
let cloth=document.getElementById("clothright");
let count=0;
let num=0;
slide.forEach((Ele,ind)=>{
    Ele.style.left=`${ind*100}%`
})

slideid.forEach((Element,index)=>{
    Element.style.left=`${index*100}%`
})

let slides=()=>{
    slide.forEach((Element)=>{
        Element.style.transform=`translateX(-${count*100}%)`
    })
}

let movesilde=()=>{
    slideid.forEach((Elem)=>{
        Elem.style.transform=`translateX(-${num*100}%)`
    })
}

clothleft=()=>{
    num++;
    movesilde()
    console.log(num+"hi");
    if(num==5){
        num=1;
    }
    if(num==1){
        cloth.style.display="flex"
    }
   else if(num==0){
        cloth.style.display="none"
        
    }
}
console.log(num+"hi");
clothright=()=>{
    num--;
    movesilde()
    console.log(num+"hi");
    if(num==0){
        cloth.style.display="none" 
    }
}

run=()=>{
    count++;
    slides()
    console.log(count);
    if(count==6){
        count=1;
    }
    if(count==1){
        arrowleft.style.display="flex"
    }
   else if(count==0){
        arrowleft.style.display="none"
        
    }
}
console.log(count);
runback=()=>{
    count--;
    slides()
    console.log(count);
    if(count==0){
        arrowleft.style.display="none" 
    }
}

let pro=document.querySelector(".box_profile")
let profile=()=>{
    pro.style.display="flex"
    
}
let backpage=()=>{
    pro.style.display="none"
}

let pass=document.querySelector(".password");
let cpass=document.querySelector(".cpassword");
let fname=document.querySelector(".frist_name");
let lname=document.querySelector(".last_name");
let email=document.querySelector(".email");
let passcon=()=>{
    if(pass.value==""){
        cpass.style.borderColor="red"
        pass.style.borderColor="red"
    }
    else if(pass.value!=cpass.value){
         alert("this is not same pls check")
     }
    if(fname.value==""){
        fname.style.borderColor="red"
    } else{
                fname.style.borderColor="green"
    }
    if(lname.value==""){
        lname.style.borderColor="red"
    } else{
                lname.style.borderColor="green"
    }
    if(email.value==""){
        email.style.borderColor="red"
    } else{
                email.style.borderColor="green"
    }
    if(pass.value && cpass.value && email.value && fname.value && lname.value){
    pro.style.display="none"
    alert("thankyou for loging")
    }
    
}

let cartlist=document.getElementsByClassName("shoping_list")[0];
let iconchange=document.querySelector("#icon_change");
let shopingadd=document.querySelector("shoping_list h1");

shopingcart=()=>{
    cartlist.classList.add("shoping_lists");
    iconchange.style.display="none";
}
let input=document.querySelector(".input")
let head=document.querySelector("h3");
additem=()=>{
    let a=input.value
    let shopinglist=document.querySelector(".h3_remove");
    let head=document.createElement("h3")
    shopinglist.appendChild(head);
    head.innerHTML=a;
    head.addEventListener('click',()=>{
        head.remove();
    })
}

remove=()=>{
    iconchange.style.display="block";
    cartlist.classList.remove("shoping_lists");
    input.classList.add("input")
}

let load=document.querySelector(".loader_sheet");
let loadimg=document.querySelector(".loader_sheet img")
loading=()=>{
    load.style.display="none"
}
setInterval(loading,8000)

