class Lista {
    constructor(Todo1, Todo2, Todo3, Todo4, Todo5) {
        this.todo1 = Todo1;
        this.todo2 = Todo2;
        this.todo3 = Todo3;
        this.todo4 = Todo4;
        this.todo5 = Todo5;
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
    let myList = new Lista(
        "Fiska",
        "Laga mat",
        "Tvätta",
        "Borsta tänderna",
        "Gå promenad"
    );

    let myArray = [
        myList.todo1,
        myList.todo2,
        myList.todo3,
        myList.todo4,
        myList.todo5,
    ];

    function remove(position) {
        myArray.splice(position, 1);
        console.log(position);
        document
            .querySelectorAll(`.output-box:nth-of-type(${position})`)
            .forEach((x) => x.remove());
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
    function submitListFunction() {
        console.log("submit");
    }
    function deleteListFunction() {
        console.log("delete");
    }
}
