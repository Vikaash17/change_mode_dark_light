let btn=document.querySelector("button");
let body=document.querySelector("body");
let h1=document.querySelector("h1");
let mode="light";
btn.addEventListener("click",()=>{
    if(mode==="light")
    {
        console.log("Dark");
        mode="Dark";
        body.style.backgroundColor="black";
        h1.style.color="white";

    }
    else
    {
        console.log("Light");
        mode="light";
        body.style.backgroundColor="white";
        h1.style.color="black";

    }
})