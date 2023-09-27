class ChannelChat {
  constructor() {
    this.users = [];
    this.messages = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  deleteUser(user) {
    const isExist = this.users.indexOf(user);

    if (isExist === -1) {
      return console.log("User does not exist");
    }
    this.users.splice(isExist, 1);
    console.log("User was successfully Deleted");
  }

  sendMessage(message, remitent) {
    const isExist = this.users.indexOf(remitent);

    if (isExist === -1) {
      return console.log("User does not exist");
    }

    this.messages.push({
      message,
      remitent,
    });

    this.notifyUsers(message, remitent);
  }

  notifyUsers(message, remitent) {
    this.users.forEach((user) => {
      if (user !== remitent) {
        user.receiveMessage(message, remitent);
      }
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  receiveMessage(message, remitent) {
    console.log(`${this.name} received a message from ${remitent.name}: ${message}`);
  }

  sendMessage(message, channel) {
    channel.sendMessage(message, this);
  }
}
//Creating channel instance
const channelChat = new ChannelChat();

//Creating users instances
const user1 = new User("Daniel");
const user2 = new User("Camilo");
const user3 = new User("Pedro");

//Adding users to channel
channelChat.addUser(user1);
channelChat.addUser(user2);
channelChat.addUser(user3);

user1.sendMessage("Hello", channelChat);
