const inputBox = document.getElementById('input');
const list = document.getElementById('list');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        inputBox.value = ''
        let del = document.createElement('span')
        del.setAttribute("class","fa-solid fa-x fa-xs")
        li.appendChild(del)
        
        del.addEventListener("click",() =>{
            console.log("clicked")
            li.remove()
        })
        list.addEventListener("click",(event) =>{
                event.target.setAttribute("class","checked")
                console.log("clicked")
        })
    }
}