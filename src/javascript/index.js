class Lista {
    constructor(name) {
        this.listName = name;
    }
}

window.onload = function () {
    //Selections
    let makeListButton = document.createElement("button");
    let myForm = document.querySelector("form");

    makeListButton.type = "button";
    makeListButton.style.cursor = "pointer";
    makeListButton.className = "create-list-button";
    makeListButton.innerHTML = "Create List";
    //EventListener
    makeListButton.addEventListener("click", makeMyListFunction);
    //Appendchild
    myForm.appendChild(makeListButton);

    makeMyInputFunction();
};
//Functions
function makeMyListFunction() {
    let firstObject = new Lista("Fiska");
    let secondObject = new Lista("Laga mat");
    let thirdObject = new Lista("Tvätta");
    let fourthObject = new Lista("Borsta tänderna");
    let fifthObject = new Lista("Gå promenad");

    let myArray = [
        firstObject,
        secondObject,
        thirdObject,
        fourthObject,
        fifthObject,
    ];
    function garbage(objekt, container) {
        container.removeChild(objekt);
    }

    function undone(
        position,
        objekt,
        container,
        buttonContainer,
        returnContainer
    ) {
        container.appendChild(objekt);
        container.appendChild(buttonContainer);
        objekt.appendChild(buttonContainer);
        objekt.removeChild(returnContainer);
        myArray.splice(position.length, 1);
        console.log(myArray);
    }

    function remove(position, container, objekt) {
        container.removeChild(objekt);
        myArray.splice(position.length, 1);
        console.log(myArray);
    }
    function submit(position, container, objekt, p, buttoncontainer) {
        let submitContainer = document.querySelector(".submit-container");
        let myMain = document.querySelector("main");
        let returnContainer = document.createElement("div");
        let returnButton = document.createElement("button");
        let returnIcon = document.createElement("i");
        let deleteButton = document.createElement("button");
        let deleteIcon = document.createElement("i");

        returnButton.addEventListener("click", () => {
            undone(
                position,
                objekt,
                container,
                buttoncontainer,
                returnContainer
            );
        });

        deleteButton.addEventListener("click", () => {
            garbage(objekt, submitContainer);
        });

        deleteButton.style.cursor = "pointer";
        returnButton.style.cursor = "pointer";
        returnButton.className = "return-button";
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteIcon.className = "fas fa-trash-alt";
        returnIcon.className = "fas fa-undo";
        returnIcon.type = "button";
        returnContainer.className = "return-container";

        myMain.appendChild(submitContainer);
        submitContainer.appendChild(objekt);
        objekt.appendChild(p);
        submitContainer.appendChild(returnContainer);
        objekt.appendChild(returnContainer);
        returnContainer.appendChild(returnButton);
        returnButton.appendChild(returnIcon);
        returnContainer.appendChild(deleteButton);
        deleteButton.appendChild(deleteIcon);
        objekt.removeChild(buttoncontainer);

        console.log(myArray);
    }

    for (let i = 0; i < myArray.length; i++) {
        let objektDiv = document.createElement("div");
        let objektP = document.createElement("p");
        let todoContainer = document.querySelector(".todo-container");
        let buttonContainer = document.createElement("div");
        let submitButton = document.createElement("button");
        let submitIcon = document.createElement("i");
        let deleteButton = document.createElement("button");
        let deleteIcon = document.createElement("i");

        submitButton.addEventListener("click", () => {
            submit(i, todoContainer, objektDiv, objektP, buttonContainer);
        });

        deleteButton.addEventListener("click", () => {
            remove(i, todoContainer, objektDiv);
        });

        deleteButton.style.cursor = "pointer";
        submitButton.style.cursor = "pointer";
        objektDiv.className = "output-box";
        objektP.innerHTML = myArray[i].listName;
        buttonContainer.className = "button-box";
        submitButton.type = "button";
        submitButton.className = "submit-output-button";
        submitIcon.className = "fas fa-check-square";
        deleteButton.type = "button";
        deleteButton.className = "delete-output-button";
        deleteIcon.className = "fas fa-trash-alt";

        todoContainer.appendChild(objektDiv);
        objektDiv.appendChild(objektP);
        todoContainer.appendChild(buttonContainer);
        objektDiv.appendChild(buttonContainer);
        buttonContainer.appendChild(submitButton);
        submitButton.appendChild(submitIcon);
        buttonContainer.appendChild(deleteButton);
        deleteButton.appendChild(deleteIcon);
    }
}
function makeMyInputFunction() {
    let inputText = document.querySelector(".todo-input");
    let inputButton = document.querySelector(".submit-input-button");

    inputButton.style.cursor = "pointer";

    inputButton.onclick = () => {
        let userData = inputText.value;
        let getLocalStorage = localStorage.getItem("New Todo");
        if (getLocalStorage == null) {
            listArr = [];
        } else {
            listArr = JSON.parse(getLocalStorage);
        }
        listArr.push(userData);
        localStorage.setItem("New Todo", JSON.stringify(listArr));
        showTasks();
    };
    function showTasks() {
        let getLocalStorage = localStorage.getItem("New Todo");
        if (getLocalStorage == null) {
            listArr = [];
        } else {
            listArr = JSON.parse(getLocalStorage);
        }
        let newPTag = "";
        listArr.forEach((element) => {
            newPTag = `<p>${element}</p>`;
        });

        let objektDiv = document.createElement("div");
        let todoContainer = document.querySelector(".todo-container");
        let buttonContainer = document.createElement("div");
        let deleteButton = document.createElement("button");
        let deleteIcon = document.createElement("i");

        deleteButton.addEventListener("click", () => {
            deleteTask(listArr, todoContainer, objektDiv);
        });

        objektDiv.className = "output-box";
        objektDiv.innerHTML = newPTag;
        buttonContainer.className = "button-box";
        deleteButton.type = "button";
        deleteButton.className = "delete-output-button";
        deleteIcon.className = "fas fa-trash-alt";

        todoContainer.appendChild(objektDiv);
        todoContainer.appendChild(buttonContainer);
        objektDiv.appendChild(buttonContainer);
        buttonContainer.appendChild(deleteButton);
        deleteButton.appendChild(deleteIcon);

        inputText.value = "";
    }
    function deleteTask(index, container, objekt) {
        let getLocalStorage = localStorage.getItem("New Todo");
        listArr = JSON.parse(getLocalStorage);
        listArr.splice(index, 1);
        localStorage.setItem("New Todo", JSON.stringify(listArr));
        container.removeChild(objekt);
    }
}
