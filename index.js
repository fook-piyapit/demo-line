import express from "express";
import { handleMessageEvent } from "./messageReplied.js";

export const config = {
  channelSecret: "648d75946a8a29e10f2b15771ad0a7d3", // set channel secret here
  channelAccessToken:
    "YLl+WUcwdbBSM9SHpk+zFxIwO2axY9vo/dRzj1wdcIyBInqmI2roxzepT1/dTwm1WF52hGipUzJ4Uvg5Tzm/bdlwH52e8GESor7fZRXgcOWCs2Vc3vobF9agPeGnQmqrtDVomlda0uycTIRmGkQLKwdB04t89/1O/w1cDnyilFU=", // set access token here
};

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

// all webhook event go here
app.post("/webhook", (req, res) => {
  console.log("=========== Event Body ==============>");
  console.log(req.body);

  // handle message event
  if (req.body.events[0].type === "message") {
    return handleMessageEvent(req.body.events[0]);
  }

  return res.sendStatus(200);
});

// run
app.listen(3000, () => console.log("Running App at http://localhost:3000"));
