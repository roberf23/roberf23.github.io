let parameters = []

function removeElement(event, position){
  event.target.parentElement.remove()
  delete parameters[position]
}

const addJasonElement = json=>{
   parameters.push(json);
   return parameters.length-1    //para irlos agregando en la ultima posicion
}
(function load(){
  const form = document.getElementById("frmUsers");
  const divElements = document.getElementById("divElements");
  const btnAdd = document.getElementById("btnAdd");
  const btnSave = document.getElementById("btnSave");

  const templateElement = (data, position)=> {
    return (`
    <button class="delete" onclick="removeElement(event, ${position})"></button>
       <strong>User -</strong> ${data}
    
    `)
  }

  btnAdd.addEventListener("click", (event) => {
    if(form.name.value != "" && form.lastName.value !="" ){
     let index=  addJasonElement({
        name: form.name.value,
        lastName: form.lastName.value 
      })
      const div= document.createElement("div")
      div.classList.add('notification', 'is-success','py-2', 'my-2');
      //divElements.appendChild(div); me sale de ultimo el q voya gregnado, queiro q salga de primero

      divElements.insertBefore(div ,divElements.firstChild)
      div.innerHTML = templateElement (`${form.name.value} ${form.lastName.value} `, index)
      form.reset()
    }else {
      alert('tienes algun campo sin rellenar')
    }

  })

  btnSave.addEventListener('click', (event)=>{
    parameters = parameters.filter(el => el != null);
    const jsonDiv = document.getElementById('jsonDiv');
    jsonDiv.innerHTML= `Datos Agregados: ${JSON.stringify(parameters)}`;
    divElements.innerHTML='';
    parameters=[] 
  })
})()