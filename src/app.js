const { App } = require('@slack/bolt');
const config = require('dotenv').config()


// Set up tokens from .env
const app = new App({
  token: config.
  parsed.SLACK_BOT_TOKEN,
  signingSecret: config.parsed.SLACK_SIGNING_SECRET,
  slackAppToken: config.parsed.SLACK_APP_TOKEN,

  // Local Config
  socketMode: config.parsed.SOCKET_MODE || true,
  port: config.parsed.PORT || 3000   
});

app.use(receiver.app);
app.use(express.json());

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();