const mongoose = require('mongoose');
const Message = require('./model');

function addMessage(message) {
  const newMessage = new Message(message);
  newMessage.save();
}

async function getMessages(filterMessages) {
let filter = {}
if (filterMessages !== null) {
  filter = { user: filterMessages }
}
  const messages = await Message.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Message.findOne({
    _id: id
  });

  foundMessage.message =  message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function delMessage(id) {
  return Message.deleteOne({_id: id})
}


module.exports = {
  add : addMessage,
  list: getMessages,
  updateText,
  remove: delMessage
}