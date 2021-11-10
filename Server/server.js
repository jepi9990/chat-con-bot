const net = require ('net');
//crear un nuevo servidor
const readline = require('readline-sync');
const server = net.createServer();

//encender servidor para recibir el mensaje
server.on('connection', (Socket)=> {
    Socket.on('data',(data)=>{

        console.log('Mensaje recibido desde el cliente:' + data)
    sendLine()
        function sendLine(){
            var line = readline.question('\n ingresa un mensaje \n')
            if(line==0){
                Socket.end()
            }else{
                Socket.write(line)
            }
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

