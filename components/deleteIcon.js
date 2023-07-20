//! Funcion para crear el icono de basura junto con el color 
const deleteIcon = ()=>{
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt','trashIcon','icon');
    i.addEventListener('click', deleteTask);
    return i;
  }
  
  //! Esta funcion elimina la tarjet (task) que se creo anteriormente
  const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
  };

  export default deleteIcon;