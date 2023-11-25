const Message = require("../model/Message");

const getAllMessages = async (req, res, next) => {
  let messages;
  try {
    messages = await Message.find();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  if (!messages || messages.length === 0) {
    return res.status(404).json({ message: "No messages found" });
  }

  // Fisher-Yates shuffle
  for (let i = messages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [messages[i], messages[j]] = [messages[j], messages[i]];
  }

  return res.status(200).json({ messages });
};

const addMessage = async (req, res, next) => {
  const {
    name,
    country,
    phrase,
    what,
    why,
    when,
    how,
    archivedAt,
    imgSrc,
    email,
    deepInterview,
  } = req.body;
  let message;
  try {
    message = new Message({
      name,
      country,
      phrase,
      what,
      why,
      when,
      how,
      archivedAt,
      imgSrc,
      email,
      deepInterview,
    });
    await message.save();
  } catch (err) {
    console.log(err);
  }

  if (!message) {
    return res.status(500).json({ message: "Unable to Add Message" });
  }
  return res.status(201).json({ message: "Add Success" });
};

const getMessageById = async (req, res, next) => {
  const id = req.params.id;
  let message;
  try {
    message = await Message.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!message) {
    return res.status(404).json({ message: "No Message Found" });
  }

  //앞뒤 메시지를 확인하기 위한 코드 추가
  let prevMessage;
  let nextMessage;

  try {
    prevMessage = await Message.findOne({ _id: { $lt: message._id } }).sort({
      _id: -1,
    });
    nextMessage = await Message.findOne({ _id: { $gt: message._id } }).sort({
      _id: 1,
    });
  } catch (err) {
    console.log(err);
  }

  const response = {
    prevMessage: prevMessage || null,
    message: message,
    nextMessage: nextMessage || null,
  };

  return res.status(200).json({ response });
};

// const updateMessage = async (req, res, next) => {
//   const id = req.params.id;
//   const { name, content } = req.body;
//   let message;
//   try {
//     message = await Message.findByIdAndUpdate(id, {
//       name,
//       content,
//     });
//     message = await message.save();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!message) {
//     return res.status(404).json({ message: "Unable To Update By this ID" });
//   }
//   return res.status(200).json({ message: "Update Success" });
// };

// const deleteMessage = async (req, res, next) => {
//   const id = req.params.id;
//   let message;
//   try {
//     message = await Message.findByIdAndRemove(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (!message) {
//     return res.status(404).json({ message: "Unable To Delete By this ID" });
//   }
//   return res.status(200).json({ message: "Delete Success" });
// };

exports.getAllMessages = getAllMessages;
exports.addMessage = addMessage;
exports.getMessageById = getMessageById;
// exports.updateMessage = updateMessage;
// exports.deleteMessage = deleteMessage;
