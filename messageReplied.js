import { sendMessage } from "./function.js";
import { config } from "./index.js";

export const handleMessageEvent = (event) => {
  console.log("This is message event");

  // message router
  switch (event.message.text) {
    case "test":
      const repliedMessage = [{
        type: "text",
        text: "Ok this is Testing.",
      }]

      sendMessage(config.channelAccessToken, event.replyToken, repliedMessage);
      break;
    case "hello":
      // say hi here
      break;
  }
};
