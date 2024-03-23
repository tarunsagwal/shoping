let slide=document.querySelectorAll(".slider_box");
let arrowleft=document.getElementById("arrow_left");
let count=0;
slide.forEach((Element,index)=>{
    Element.style.left=`${index*100}%`
})

let slides=()=>{
    slide.forEach((Element)=>{
        Element.style.transform=`translateX(-${count*100}%)`
    })
}

run=()=>{
    count++;
    slides()
    console.log(count);
    if(count==4){
        count=-1;
    }
    if(count==1){
        arrowleft.style.display="block"
    }
    // if(count==1){
        
        // }
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
