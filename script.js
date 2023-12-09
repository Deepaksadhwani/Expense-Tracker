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

    const text = document.createTextNode("Expenseamount: " + userData.expenseAmountValue +
    " discription: " + userData.discriptionValue + " Category: " + userData.categoryValue);

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