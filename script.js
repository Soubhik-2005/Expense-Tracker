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
const typeInput = document.querySelector(".type");
const descriptionInput = document.querySelector(".des");
const amountInput = document.querySelector(".amoun");
const dateInput = document.querySelector(".dat");
const categoryInput = document.querySelector(".cat");
const outerRow = document.querySelector(".outer-row");
const outer1 = document.querySelector(".outer1");
const outer2 = document.querySelector(".outer2");
const pencil = document.querySelector(".pencil") || null;
const deletebtn = document.querySelector(".delete");
const editFormDiv = document.querySelector(".edit-form-div");
const descriptionInput1 = editFormDiv.querySelector(".des");
const amountInput1 = editFormDiv.querySelector(".amoun");
const dateInput1 = editFormDiv.querySelector(".dat");
const categoryInput1 = editFormDiv.querySelector(".cat");

const outer3 = document.querySelector(".outer3");

const outer4 = document.querySelector(".outer4");


dateInput.value = new Date().toISOString().split("T")[0];


const body = document.body;



function totalIncome(){
    let income = 0;
    let totalIncomeItems = transactions.filter(a=>a.type === "Income");
    totalIncomeItems.forEach((item)=>{
        income+=(Number)(item.amount);
    })
    return income;
}
function totalExpense(){
    let expense = 0;
    let totalExpenseItems = transactions.filter(a=>a.type === "Expense");
    totalExpenseItems.forEach((item)=>{
        expense+=(Number)(item.amount);
    })
    return expense;
}

function currentBalance(){
    let income = totalIncome();
    let expense = totalExpense();
    return income - expense;
}

function totalTransaction(){
    let income = totalIncome();
    let expense = totalExpense();
    return income + expense;
}

let transactions = JSON.parse(localStorage.getItem ("transactions")) || []; 

output();
box();

function box(){
    let income = totalIncome();
    let expense = totalExpense();
    let currentBal = currentBalance();
    let totalTran = totalTransaction();

    outer1.innerHTML = `<div class="box1">
            <div class="img-cover1">
              <img src="./assets/bank-fill.png" alt="" />
            </div>
            <p class="p">Current Balance</p>
            <h2 class="amount">${currentBal}</h2>
          </div>`
    outer2.innerHTML = `<div class="box2">
            <div class="img-cover2">
              <img src="./assets/increase.png" alt="" />
            </div>
            <p class="p">Total Income</p>
            <h2 class="amount green">${income}</h2>
          </div>`
    outer3.innerHTML = `<div class="box3">
            <img src="./assets/downtrend-arrow.png" alt="" />
            <p class="p">Total Expense</p>
            <h2 class="amount red">${expense}</h2>
          </div>`
    outer4.innerHTML = `<div class="box4">
            <div class="img-cover4">
              <img src="./assets/pigi-bank-removebg-preview.png" alt="" />
            </div>
            <p class="p">Total Transactions</p>
            <h2 class="amount">${totalTran}</h2>
          </div>`
}

function output(){
        outerRow.innerHTML="";
    transactions.forEach((item,id)=>{
         outerRow.innerHTML+=`<div class="row">
              <div class="inner">
                <p class="date">${item.date}</p>
                <p class="description">${item.description}</p>

                <p class="category">${item.category}</p>

                <p class="price ${item.type === "Expense" ? "red" : "green"}">${item.amount}</p>


                <p class="action">
                  <img src="./assets/pencil-line.png" onClick="edit('${id}')" class="pencil" alt="">
                  <img src="./assets/delete-bin-7-fill.png" class="delete" alt="">
                </p>
              </div>
            <div class="hr"></div>
          </div>`
    });

}

function edit(id){
    let item = transactions[id];
    console.log(item);
    console.log(descriptionInput1);
    typeInput.value = item.type;
    descriptionInput1.value = item.description;
    

    dateInput1.value = item.date;
    
    amountInput1.value = item.amount;
    
    categoryInput1.value = item.category;
    
    editFormDiv.style.display="block";

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
    localStorage.setItem("transactions",JSON.stringify(transactions));
    body.style.overflow="auto";
    formDiv.style.display="none";

    // console.log(transactions);
    output();
    box();
})

cross.addEventListener("click",()=>{
    formDiv.style.display="none";
    editFormDiv.style.display="none";
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



