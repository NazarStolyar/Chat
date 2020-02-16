const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const m = (name, text, id) => ({name, text, id})

io.on('connection', socket => {

  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      return cb('Дані не коректні')
    }

    socket.join(data.room);

    cb({userID: socket.id});
    socket.emit('newMessage', m('admin',`Привіт ${data.name}. Ви зайшли в ${data.room} кімнату`,  ));
    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Користувач ${data.name} зайшов`))

  })

  socket.on('create_message', data => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + 'Server'
      })
    }, 500)
  });

})

module.exports = {
  app, server
}
