const argv = require('./config/yargs').argv;
var colors = require('colors');
const porHacer = require('./ToDo/todo');

let comando = argv._[0];

switch( comando )
{
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        
        for(let tarea of listado)
        {
            console.log('====== Por hacer ======'.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('======================='.green);
        }

    break;
    
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
    break;
    case 'borrar':
        porHacer.borrar(argv.descripcion);
    break;
    default:
        console.log('Comando no valido'.red);
    break;
}