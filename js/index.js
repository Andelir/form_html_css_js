const form = document.getElementById("contact");
form.onsubmit = submit;

function submit(event){
    const formData = new FormData(form);
    if(formData.get('name') == ''){
        alert("Debes ingresar un nombre");
        return;
    }
    if(formData.get('email') == ''){
        alert("Debes ingresar un correo electrónico");
        return;
    }
    if(formData.get('asunto') == ''){
        alert("Debes ingresar un asunto");
        return;
    }
    if(formData.get('message') == ''){
        alert("Debes ingresar un mensaje");
        return;
    }

    for (const [key, value] of formData.entries()) {
        console.log(`${key} = ${value}`);
    }

    event.preventDefault();
}

