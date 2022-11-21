const btnAdd = document.querySelector("#btn-add");
const btnClear = document.querySelector("#clear-adding-card");
const addCards = document.querySelector("#add-cards");
const inputQuestion = document.querySelector("#input-question");
const inputAnswer = document.querySelector("#input-answer");
const btnSave = document.querySelector("#btn-save");
const cardsContainer = document.querySelector("#cards-container");
const alertMessage = document.querySelector("#message");
addCards.style.display = "none";
alertMessage.style.display = "none";

btnAdd.addEventListener('click',()=>{
    addCards.style.display = "block";
});
btnClear.addEventListener('click',()=>{
    addCards.style.display = "none";
})

const createSingleCard = () => {
    const div = document.createElement("div");
    div.className = "single-card";
    const question = document.createElement("h3");
    const btnToggle = document.createElement("a");
    const answer = document.createElement("h3");
    const btnDivs = document.createElement("div");
    btnDivs.className = "btns"
    const btnEdit = document.createElement("button");
    btnEdit.className = "btn-edit";
    const btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";

    question.innerHTML = inputQuestion.value; 
    btnToggle.innerHTML = "Show/Hide Answer";
    answer.innerHTML = inputAnswer.value; 
    answer.style.display = "none";
    btnEdit.innerHTML = "EDIT";
    btnDelete.innerHTML = "DELETE";

    btnDivs.append(btnEdit, btnDelete)

    div.append(question, btnToggle, answer, btnDivs);
    cardsContainer.append(div);

    btnToggle.addEventListener("click", ()=>{
        if(answer.style.display === "none"){
            answer.style.display = "block";
        }else{
            answer.style.display = "none";
        }

    });

    btnEdit.addEventListener("click", ()=>{

        inputQuestion.value = question.innerText;
        inputAnswer.value = answer.innerText;
    
        div.remove();

    });

    btnDelete.addEventListener("click", ()=>{
        div.remove()
    });


};
btnSave.addEventListener("click", ()=> {
    if(inputQuestion.value.length && inputAnswer.value.length){
        createSingleCard();
        inputQuestion.value = "";
        inputAnswer.value = "";
    }else{  
        alertMessage.style.display = "block";
        setTimeout(()=>{
            alertMessage.style.display = "none";
        },1000)

        
    }
 
});












