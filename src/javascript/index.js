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
    let firstList = new Lista(
        "Fiska",
        "Laga mat",
        "Tvätta",
        "Borsta tänderna",
        "Gå promenad"
    );
    let makeListButton = document.createElement("button");
    makeListButton.className = "create-list-button";
    makeListButton.innerHTML = "Create List";
    let myForm = document.querySelector("form");
    //EventListener
    makeListButton.addEventListener("click", makeMyListFunction);
    //Appendchild
    myForm.appendChild(makeListButton);
};
//Functions
function makeMyListFunction() {}
