const label = document.querySelector(".label");
const content = document.querySelector(".content");
const divOptionDashboard = document.querySelector(".div-option-dashboard");
const divOptionSetting = document.querySelector(".div-option-setting");
const settings = document.querySelector(".settings");
const formDiv = document.querySelector(".form-div");
const addTask = document.querySelector(".add");
const cross = document.querySelector(".cross");
const saveTransacton = document.querySelector(".add1");
const form = document.querySelector(".form");
const typeInput = document.querySelector("#type");
const descriptionInput = document.querySelector("#des");
const amountInput = document.querySelector("#amoun");
const dateInput = document.querySelector("#dat");
const categoryInput = document.querySelector("#cat");
const row = document.querySelector(".row");

dateInput.value = new Date().toISOString().split("T")[0];


const body = document.body;

let transactions = [];

ui();

function ui(){
        row.innerHTML="";
    transactions.forEach(item=>{
        row.innerHTML+=`<div class="inner">
            <p class="date">${item.date}</p>
            <p class="description">${item.description}</p>

            <p class="category">${item.category}</p>

            <p class="price ${item.type === "Expense" ? "red" : "green"}">${item.amount}</p>

            <p class="action">
            </p>
            </div>`
    });

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        type:typeInput.value,
        description : descriptionInput.value,
        amount:amountInput.value,
        date : dateInput.value,
        category:categoryInput.value,
    }

    transactions.push(obj);
    body.style.overflow="auto";
    formDiv.style.display="none";

    console.log(transactions);
    ui();
})

cross.addEventListener("click",()=>{
    formDiv.style.display="none";
    body.style.overflow="auto";

})
addTask.addEventListener("click",()=>{
    formDiv.style.display="block";
    body.style.overflow="hidden";
})

label.addEventListener("click",()=>{
    label.classList.toggle("active");
})

divOptionSetting.addEventListener("click",()=>{
    divOptionDashboard.classList.toggle("active");  
     divOptionSetting.style.backgroundColor = " rgba(108, 189, 251, 0.318)";
    divOptionSetting.style.color=" rgba(19, 2, 171, 0.899)"
    content.style.display="none";
    settings.style.display="block";
})

divOptionDashboard.addEventListener("click",()=>{
    divOptionSetting.style.backgroundColor="";
    divOptionDashboard.classList.toggle("active");  
    settings.style.display="none";
    content.style.display="block";
})



