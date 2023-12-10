let count = 1;
let form = document.getElementById("form");
let expenseAmount = document.getElementById("amount");
let discription  = document.getElementById("detail");
let category = document.getElementById("category");

form.addEventListener("submit",(d)=>{
    d.preventDefault();

    let expenseAmountValue = expenseAmount.value;
    let discriptionValue = discription.value;
    let categoryValue = category.value;
    const userData = {
        id:count,
        expenseAmountValue: expenseAmountValue,
        discriptionValue: discriptionValue,
        categoryValue: categoryValue,
    }

    count++
    const userDetails = JSON.stringify(userData);
    localStorage.setItem(userData.id,userDetails);
    displayExpense(userData);
});


function displayExpense(userData){
    const ulist = document.getElementById("newExpense");
    const li =  document.createElement("li"); 
    li.className = "expenselist";
    li.setAttribute('data-user-data', JSON.stringify(userData));
    const text = document.createTextNode("Expenseamount: " + userData.expenseAmountValue +
    " discription: " + userData.discriptionValue + " Category: " + userData.categoryValue + " ");

    const deleteButton = document.createElement("button");
    deleteButton.classList = "delete";
    
    const editButton = document.createElement("button");
    editButton.classList = "edit";

    li.appendChild(text);
    deleteButton.appendChild(document.createTextNode("delete"));
    editButton.appendChild(document.createTextNode("edit"));
    
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    
    ulist.appendChild(li);
    }

const ulist = document.getElementById("newExpense");

ulist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        const li = e.target.parentElement;
        const  userStorageData = JSON.parse(li.getAttribute('data-user-data'));
        localStorage.removeItem(userStorageData.id);
        li.remove();
    }
    
    if (e.target.classList.contains("edit")){
        const liEdit = e.target.parentElement;
        const userEditData = JSON.parse(liEdit.getAttribute("data-user-data"));

        let expenseAmount = document.getElementById("amount");
        let discription  = document.getElementById("detail");
        let category = document.getElementById("category");

        expenseAmount.value = userEditData.expenseAmountValue;
        discription.value = userEditData.discriptionValue;
        category.value = userEditData.categoryValue;

        localStorage.removeItem(userEditData.id);
        liEdit.remove();

    }
})

function displayExistingDisplay(){
    for(let i =0; i < localStorage.length;i++){
        const key = localStorage.key(i);
        const userExsitingData = JSON.parse(localStorage.getItem(key));
        displayExpense(userExsitingData);
    }
    if (localStorage.length === 0){
        count = 1;
    }
    else{
        count++
    }
}

window.addEventListener("load", ()=>{
    displayExistingDisplay();
})