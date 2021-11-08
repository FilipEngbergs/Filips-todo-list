class Lista {
    constructor(name, letter) {
        this.listName = name;
        this.listLetter = letter;
    }
}

window.onload = function () {
    //Selections
    let makeListButton = document.createElement("button");
    makeListButton.type = "button";
    makeListButton.style.cursor = "pointer";
    makeListButton.className = "create-list-button";
    makeListButton.innerHTML = "Create List";
    let myForm = document.querySelector("form");
    //EventListener
    makeListButton.addEventListener("click", makeMyListFunction);
    //Appendchild
    myForm.appendChild(makeListButton);
};
//Functions
function makeMyListFunction() {
    let firstObject = new Lista("Fiska", "f");
    let secondObject = new Lista("Laga mat", "l");
    let thirdObject = new Lista("Tvätta", "t");
    let fourthObject = new Lista("Borsta tänderna", "b");
    let fifthObject = new Lista("Gå promenad", "f");

    let myArray = [
        firstObject,
        secondObject,
        thirdObject,
        fourthObject,
        fifthObject,
    ];

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

        returnIcon.style.cursor = "pointer";
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
        objekt.removeChild(buttoncontainer);
        myArray.splice(position.length, 1);

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
