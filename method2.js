let btn=document.querySelector("button");
let body=document.querySelector("body");
let mode="light";

btn.addEventListener("click" ,()=>
{
    if( mode === "light" )
        {
            console.log("dark");
            mode="dark";
            body.classList.add("dark");
            body.classList.remove("light");
        }
    else
        {
            console.log("light");
            mode="light";
            body.classList.add("light");
            body.classList.remove("dark");
        }  
});

