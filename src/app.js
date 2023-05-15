require('dotenv').config()
const { App } = require('@slack/bolt')

// Set up tokens from .env
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  slackAppToken: process.env.SLACK_APP_TOKEN,

  // Local Config
  socketMode: process.env.SOCKET_MODE || true,
  port: process.env.PORT || 3000
})

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`)
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000)

  console.log('⚡️ Bolt app is running!')
})()
