const round = document.querySelector(".round");
var inputValue = document.querySelector(".input");
const container = document.querySelector(".container");

class content{
    constructor(contentName){
        this.createDiv(contentName);
    }

    createDiv(contentName){
        let input = document.createElement("input");
        input.value = contentName;
        input.disabled = true;
        input.classList.add("write");
        input.type = "text";

        let contentBox = document.createElement("div");
        contentBox.classList.add("content");

        let edit = document.createElement("button");
        edit.innerHTML = EDIT;
        edit.classList.add("edit");

        let remove = document.createElement("button");
        remove.innerHTML = Remove;
        remove.classList.add("remove");

        container.appendChild(contentBox);

        contentBox.appendChild(input);
        contentBox.appendChild(edit);
        contentBox.appendChild(remove);

    }
}

new content("Sport");
    