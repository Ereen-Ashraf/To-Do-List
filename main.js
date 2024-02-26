let input = document.querySelector(".input");
let btn = document.querySelector(".add");
let task = document.querySelector(".tasks");

btn.onclick = (ele)=>{
        ele.preventDefault();
        create_Elements();
};

function create_Elements(){
    if(input.value === ''){
        window.alert("Must write something!");
    }
    else{
        var div_container = document.createElement("div");
        var span_create = document.createElement("span");
        var btn_create = document.createElement("button");

        div_container.className = "container_div";
        span_create.className = "create_span";
        btn_create.className = "create_btn";

        span_create.textContent = input.value;
        btn_create.textContent = "delete";

        div_container.appendChild(span_create);
        div_container.appendChild(btn_create);
        task.appendChild(div_container);      
    }
        input.value = '';
        saveData();
        Del();
    };

function Del(){
    var buttons = task.querySelectorAll(".create_btn");
    buttons.forEach((e)=>{
        e.addEventListener('click', ()=>{
            e.parentElement.remove();
            saveData();
    });
});
}               

function saveData(){
    localStorage.setItem("value", task.innerHTML);
}

function showTask(){
    task.innerHTML = localStorage.getItem("value");
}

showTask();
Del();
