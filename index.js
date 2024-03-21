let slide=document.querySelectorAll(".slider_box");
let arrowleft=document.getElementById("arrow_left")[0]
let count=0;
slide.forEach((Element,index)=>{
    Element.style.left=`${index*100}%`
})
let slides=()=>{
    slide.forEach((Element)=>{
        Element.style.transform=`translateX(-${count*100}%)`
    })
}
// start=()=>{
//     return interval= setInterval(()=>{
//         count++;
//         slides()
//         console.log(count);
//         if(count==6){
//             count=-1;
//         }
//     },1500) 
// }
// start()
run=()=>{
    count++;
    slides()
    console.log(count);
    if(count==6){
        count=-1;
    }
    // if(count==0){
    //     arrowleft.style.visabilti="hidden"
    // }
}
console.log(count);
runback=()=>{
    count--;
    slides()
    console.log(count);
}