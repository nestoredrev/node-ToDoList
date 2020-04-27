const fs = require('fs');


let listaToDo = [];

const cargarDB = () => {

    try{
        listaToDo = require('../db/data.json');
    }catch(err){
        listaToDo = [];
    }
}

const guardarDB = () => {

    let data = JSON.stringify(listaToDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar ',err);
        else console.log('Dato guardado correctamente');
    });

}

const crear = (descripcion) => {

    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };

    listaToDo.push( porHacer );
    guardarDB();
    return porHacer;
}

const getListado = (completado) => {
    cargarDB();
    if(completado != 'all')
    {
        let nuevaLista = listaToDo.filter(tarea => {
            return tarea.completado === completado;
        })
        listaToDo = nuevaLista;
        return listaToDo;
    }
    else
    {
        return listaToDo;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listaToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0)
    {
        listaToDo[index].completado = completado;
        guardarDB();
        console.log('Tarea actualizada'.green);
    }
    else
    {
        console.log('Tarea no encontrada');
    }

} 

const borrar = (descripcion) => {
    cargarDB();
    let index = listaToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0)
    {
        listaToDo.splice(index, 1);
        guardarDB();
        console.log('Tarea borrada'.red);
    }
    else
    {
        console.log('Tarea no encontrada'.red);
    }

} 

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}