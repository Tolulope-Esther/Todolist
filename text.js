var submitbtn = document.getElementById("submit");
var write = document.getElementById("write");
var ul = document.getElementsByTagName("ul")[0];
var item = document.getElementsByTagName("li");


function writeLength(){
    return write.value.length;
}

function itemLength(){
    return item.value.length
}

function createListElement(){
    var li = document.createElement("li");
li.appendChild(document.createTextNode(write.value));
ul.appendChild(li); //means to append the li to the ul tag
write.value = "";


 function annul () {
    li.classList.toggle("done");
 }
 
 li.addEventListener("click", annul);



// Remove Effect

var dBtn = document.createElement("removeBtn");
dBtn.appendChild(document.createTextNode("Remove"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deletelistitem);

function deletelistitem(){
    li.classList.add("delete");
}

//Edit Effect


/*var eBtn = document.createElement("editBtn");
eBtn.appendChild(document.createTextNode("EDIT"));
li.appendChild(eBtn);
eBtn.addEventListener("click", editlistitem);

function editlistitem(){
    document.getElementById("extend");
} */
}
function addListAfterClick(){
    if (writeLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (writeLength() > 0 && event.which === 13) {
        createListElement();
    }
}

submitbtn.addEventListener("click", addListAfterClick);

write.addEventListener("keypress", addListAfterKeypress);