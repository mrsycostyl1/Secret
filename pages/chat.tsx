const deleteMessage = async (msgId: string) => {
  await deleteDoc(doc(db, "chats", chatId, "messages", msgId));
};
