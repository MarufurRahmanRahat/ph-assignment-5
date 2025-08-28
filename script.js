//heart-click
const Hearts =  document.querySelectorAll("#click-heart")
Hearts.forEach((heart)=>{
    heart.addEventListener("click",function(){
     const heartCount = document.getElementById("count-heart");
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
    })
    
})

// Call

// const buttonCall = document.querySelectorAll("#call")

