// ! Esta seccion crea el icono de check en color azul
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');  //forma rapida
    //forma lenta
    // i.classList.add("far");
    // i.classList.add("");
    // i.classList.add("fa-check-square");
    i.addEventListener('click', completeTask);
    return i;
  };
  
  //! Ahora esta funcion es la que se va ejecutar cuando le dan click al boton de tarea completada
  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
  };

export default checkComplete; //hace refencia a el nombre talcual de el archivo mas no de las funciones
