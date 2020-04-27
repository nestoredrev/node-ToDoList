const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: 'all',
    description: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs').command('crear', 
                                      'Crear un elemento por hacer',
                                      {
                                        descripcion
                                      })
                            .command('listar', 
                                      'Listar las tareas',
                                      {
                                        completado
                                      })
                            .command('actualizar', 
                                     'Actualizar el estado compleado de una tarea',
                                     {
                                        descripcion,
                                        completado
                                     })
                            .command('borrar', 
                                     'Eliminar una tarea',
                                     {
                                        descripcion
                                     })
                            .help()
                            .argv;
module.exports = {
    argv
}                           