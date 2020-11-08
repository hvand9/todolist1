const todosToggle = () => {
    let x = document.querySelector(".phone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const quizToggle = () => {
    let y = document.querySelector(".quiz");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  };

class TodoList {
    constructor() {
        this.todos = new Map();
        this.todoContainer = document.querySelector(".todo-body");
        this.todoList = document.querySelector(".todo-list");
        this.todoInput = document.querySelector(".todoInput");
        this.removeButton = document.querySelector(".removeText");
        this.bindEvents();
    }

    
/*the todo list is bein registret*/
    bindEvents () {
        this.todoInput.onkeyup = (e) => {
            if (e.keyCode ===13) {
                this.addTodo(e.target.value);
                this.todoInput.value = "";
            }
        }
   /*checked button is being defined to do something*/
        this.todoList.onmouseup = (e) => {
            if (e.target.checked !== undefined) {
                let id = e.target.getAttribute("data-key");
                this.markTodo(id, e.target.checked);
            }
        }
        this.removeButton.onclick = this.clean.bind(this); /*removes the button when you click it*/
    }
    markTodo(id, isChecked) {
        let obj = this.todos.get(id);
        obj.checked = !isChecked;
        this.todos.set(id, obj);
        this.render();
    }

    /*insert data in the text spot*/
    addTodo(text = "Blank Task") {
        let id = Date.now() + "";
        this.todos.set(id, {
            id: id,
            text: text,
            checked: false
        });
        this.render();
    }
    clean() {
        this.todos.forEach((todo, key) => { /*cleans out the todo lit*/
            if(todo.checked) {
                this.todos.delete(key)
            }
        });
        this.render();
    }
    template(item, id) {
        return (`<li class="todo-item ${(item.checked ? "checked" : "")}" data-key="${id}"><input type="checkbox" data-key="${id}" ${(item.checked ? "checked" : "")}/> ${ item.text }</li>`);
    }
    render() {
        let todoElements = [];
        this.todos.forEach((item, key) => {
            todoElements.push(this.template(item, key))
        });

        this.todoList.innerHTML = todoElements.join(" ")
    }

}

if (document.readyState === "complete" || document.addEventListener) {
    const List = new TodoList();
}

function quizFunction(){

    let quiz = [
        {
              prompt: "Do you know what a smarphone is?\n(a) No\n\ (b) Yes\n(c) Maybe",
              answer: "b"
        },
        {
              prompt: "What was the worlds first Android-smartphone?\n(a) HTC Dream\n\ (b) Iphone 3GS\n(c) Sony Ericsson c902",
              answer: "a"
        },
        {
              prompt: "What is the software ran by most phone developers?\n(a) IOS\n\ (b) Android\n(c) Windows ",
              answer: "b"
        },
        {   
              prompt: "How many Iphones has there been released?\n(a) 19\n\ (b) 25\n(c) 30  ",
              answer: "a"
    
        }
    ];
    let results = 0;
    
    for(let i = 0; i < quiz.length; i++){
        let game = window.prompt(quiz[i].prompt);
        if(game == quiz[i].answer){
             results++;
             alert("Correct answer");
        } else {
             alert("Wrong answer");   
        }
    }
    alert("you got " + results + "/" + quiz.length);
    
    
    
    }