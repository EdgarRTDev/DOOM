// (() =>{  //esto se crea para que el usuario desde la pagina web no pueda ver todas las funciones creadas
         // ! Immediately invoked function expression IIFE


// * Esto se pone para mandar a llamar los componets creados      
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {     //"""(evento) =>"""" a esto se le llama funcion anonima
    evento.preventDefault();   
    //evento es un objeto y por lo tanto cuenta con metodos
    //con esta linea de codigo ya no se refresca la pantalla cada que se da click en el boton
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //Cuando agregamos una tarea la barra se borra automaticamente
    //backticks
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);  
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  };

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);
//Listener  Es la palabra que detecta si una persona hace click en algun boton o cosa

// })();
