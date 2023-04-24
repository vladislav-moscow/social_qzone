const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

/**
 *
 * @param {string} userId id пользователя который сейчас в сети
 * @param {string} socketId id socket данного пользователя
 */
const addUser = (userId, socketId) => {
  //проверяем, удовлетворяет ли какой-либо элемент массива условию
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

/**
 * берем массив пользователей фильтруем так что пользователь  и у него id socket не равен которому мы получаем в функцию,
 * что кто проходит проверку остается в массиве
 * @param {string} socketId id socket пользователя который вышел из приложенеия
 */
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

/**
 *  поиск пользователя из массива users у которого id  соотвествует тому который принимаем
 * @param {string} userId id пользователя которого нужно найти 
 * @returns пользователя которого нашли
 */
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  // подключение к socket
  console.log("first connect");
  // при подлючении к сокету нужно получить id пользователя и id socketa
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users); // отправляем на фронт запрос на получения пользователей online и массив отфильтрованых пользователей
  });

  //получение и отправка сообщений
/**
 * 
 * @param receiverId id пользователя получателя
 * @param senderId id пользователя отправитель
 * @param text текс сообщения
 */
socket.on("sendMessage", ({ senderId, receiverId, text }) => {
  const user = getUser(receiverId);  // находим id пользователя получателя
    // отправляем сообщение пользователю получателю по id socket и отправляем сообщение 
    // в которое входит id отправителя и сам текс сообщения
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //отключение от socket
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
