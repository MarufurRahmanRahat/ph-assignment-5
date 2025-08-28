//heart-click
const Hearts =  document.querySelectorAll("#click-heart")
Hearts.forEach((heart)=>{
    heart.addEventListener("click",function(){
     const heartCount = document.getElementById("count-heart");
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
    })
    
})
// Clear History

document.getElementById("clear-history").addEventListener("click",function(){
    document.getElementById("historyadded").innerHTML = '';
})

// Call

const buttonCalls = document.querySelectorAll("#call")
const alertMsg = document.getElementById("alert-msg")
const coinNumber = document.getElementById("coin-number")



buttonCalls.forEach((calling)=>{
    calling.addEventListener("click",function(){
        // console.log(calling);
        
        if(parseInt(coinNumber.innerText)<20){
            // console.log(coinNumber.innerText);
            
            const showDiv = document.createElement("div");
            showDiv.innerHTML = `
               <div class="div-1 ">
    <p>emergency-service.netify.app says</p>
    </div>
    <br>
    <div class="div-2 flex gap-3">
     <div class="icon-div">
        <i class="fa-solid fa-square-xmark" style="color: #fa0000;"></i>
     </div>
     <div class="calling flex gap-3">
        <p>Atleast 20 coins needed to make a call</p>
     </div>
    </div>
    <br>
    <div class="div-3 flex justify-between">
<div class=""></div>
<div class="">
    <button id="ok" class="bg-red-400 text-shadow-black w-16 h-10 rounded-xl ">OK</button>
</div>
    </div>
            ` 
            // console.log(showDiv.innerHTML);
            
            // alertMsg.style.background = 'black'
            alertMsg.appendChild(showDiv);
            alertMsg.style.display = "block"
            const okBtn = document.getElementById("ok");
            okBtn.addEventListener("click",function(){
                alertMsg.style.display = 'none'
                alertMsg.textContent = '';
            })
            return;
        }
        const name = calling.parentNode.parentNode.children[1].children[1];
        const number = calling.parentNode.parentNode.children[2].children[0];
        const showDiv = document.createElement("div");
        showDiv.innerHTML = `
                      <div class="div-1 ">
    <p>emergency-service.netify.app says</p>
    </div>
    <br>
    <div class="div-2 flex gap-3">
     <div class="icon-div">
        <i class="fa-solid fa-phone" style="color: #f50000;"></i>
     </div>
     <div class="calling flex gap-3">
         <p>Calling ${name.innerText}</p>
        <p>${number.innerText}...</p>
     </div>
    </div>
    <br>
    <div class="div-3 flex justify-between">
<div class=""></div>
<div class="">
    <button id="ok" class="bg-red-400 text-shadow-black w-16 h-10 rounded-xl ">OK</button>
</div>
    </div>
        `
        alertMsg.appendChild(showDiv);
        alertMsg.style.display = "block"
        const okBtn = document.getElementById("ok");
            okBtn.addEventListener("click",function(){
                alertMsg.style.display = 'none'
                alertMsg.textContent = '';
                coinNumber.innerText = parseInt(coinNumber.innerText)-20;
                const showHistory = document.createElement("div")
                const time = new Date().toLocaleTimeString();
                showHistory.innerHTML = `
                <div id="historyadd" class="flex justify-between p-6 bg-[#fafafa] rounded-md mb-4 h-24">
                      <div>
                        <h2>${name.innerText}</h2>
                        <p class="mt-1">${number.innerText}</p>
                       </div>
                       <div class="time">
                        <p>${time}</p>
                       </div>
                    </div>
                 
                `
                document.getElementById("historyadded").appendChild(showHistory)
             })
        
    })
})