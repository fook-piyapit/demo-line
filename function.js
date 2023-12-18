import * as line from "@line/bot-sdk";

export const sendMessage = (channelAccessToken, replyToken, message) => {
  const client = new line.messagingApi.MessagingApiClient({
    channelAccessToken: channelAccessToken,
  });

  return client.replyMessage({
    replyToken: replyToken,
    messages: message
  });
};
