class Lista {
    constructor(name, visible, letter, completed) {
        this.listName = name;
        this.listVisible = visible;
        this.listLetter = letter;
        this.listCompleted = completed;
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
    // let myList = new Lista(
    //     "Fiska",
    //     "Laga mat",
    //     "Tvätta",
    //     "Borsta tänderna",
    //     "Gå promenad"
    // );

    let firstObjekt = new Lista("Fiska", "true", "f", "false");
    let secondObjekt = new Lista("Laga mat", "true", "l", "false");
    let thirdObjekt = new Lista("Tvätta", "true", "t", "false");
    let fourthObjekt = new Lista("Borsta tänderna", "true", "b", "false");
    let fifthObjekt = new Lista("Gå promenad", "true", "f", "false");

    let myArray = [
        firstObjekt,
        secondObjekt,
        thirdObjekt,
        fourthObjekt,
        fifthObjekt,
    ];

    function remove(position) {
        console.log(position);
        document
            .querySelectorAll(`.output-box:nth-of-type(${position + 1})`)
            .forEach((x) => x.remove());
        myArray.splice(position, 1);
    }
    function submit(position) {}

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
            submit(i);
        });

        deleteButton.addEventListener("click", () => {
            remove(i);
        });

        deleteButton.style.cursor = "pointer";
        objektDiv.className = "output-box";
        objektP.innerHTML = myArray[i];
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
