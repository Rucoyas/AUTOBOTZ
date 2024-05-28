module.exports = {
  name: 'mention',
  description: 'Responds when "alex," "alex ponce," or "alex jhon" is mentioned',
  nashPrefix: false,
  execute(api, event, args) {
    const message = event.body.toLowerCase();
    if (message.includes('alex') || message.includes('alex ponce') || message.includes('alex jhon')) {
      api.sendMessage("Don't call my master, dude", event.threadID, event.messageID);
    }
  },
};
