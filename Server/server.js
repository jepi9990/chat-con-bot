const net = require ('net');
//crear un nuevo servidor
const server = net.createServer();

//encender servidor para recibir el mensaje
server.on('connection', (Socket)=> {
    Socket.on('data',(data)=>{
        //primer mensaje
        console.log('mensaje recibido desde el cliente: ' + data )
        if(data == 'hola'){
            let dia = new Date();
            let output = String (dia.getHours()).padStart(2,'0') + ':' + String(dia.getMinutes()).padStart(2,'0') + ':' + dia.getSeconds();
            Socket.write('Hola buenos dias\n' + output);
        }

        //segundo mensaje
        if(data == 'como estamos hoy'){
            Socket.write('muy bien, gracias por preguntar :D\n')
        }

        //tercer mensaje
      
        if(data == 'trabajo'){
            Socket.write('estoy por terminarlos por fin 7w7\n')
        }

        //cuarto mensaje
        
        if(data == 'pasaste'){
            Socket.write('de todas las materias creo que si\n')
        }

        //quinto mensaje
        if(data == 'clima'){
            Socket.write('soleado\n')
        }

            //cierra el canal de comunicacion
        if(data == 'adios'){
            Socket.write('bye')
            Socket.on('close',()=>{
                console.log('comunicación finalizada' )
            })
        }
    })

    //cierra el canal de comunicacion
   
    Socket.on('error',(err)=>{
        console.log(err.message)
    })
})
//el servidor esta escuchando
server.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto ', server.address().port)
})