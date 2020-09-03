exports.start =
  `<b>Welcome to Westman's: Assistant!</b>` +
  `\n` +
  `\n` +
  `This bot helps you to manage with Westman's Confession.` +
  `\n` +
  `With the help of this bot you can do:` +
  `\n` +
  `\n` +
  `<code>* Send and reply to messages on our confession</code>` +
  `\n` +
  `<code>* Leave a feedback to admins</code>` +
  `\n` +
  `<code>* Send contents to our confession channel</code>` +
  `\n` +
  `\n` +
  `<i>In order to see full detailed usage information of the bot, press the button below.</i>`;

exports.help = (isAdmin) => {
  const base =
    `<b>List of available commands:</b>` +
    `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` +
    `\n` +
    `/stats - <code>check stats of user</code>` +
    `\n` +
    `/links - <code>show bsba url links</code>` +
    `\n` +
    `/feedback - <code>leave a feedback to admins</code>` +
    `\n` +
    `\n` +
    `<b>Confession commands:</b>` +
    `\n` +
    `/cm - <code>send message</code>` +
    `\n` +
    `/reply - <code>reply to a message in confession</code>` +
    `\n` +
    `\n` +
    `<i>In order to send video, photo or audio message to our confession, ` +
    `just send the content and leave your comment as caption to your content.</i>` +
    `\n` +
    `\n`;
  const admin =
    `<b>Admin commands:</b>` +
    `\n` +
    `/add - <code>add temporary admin</code>` +
    `\n` +
    `/send - <code>send message to users</code>` +
    `\n` +
    `/reset - <code>reset temporary admin list</code>` +
    `\n` +
    `/list - <code>list temporary admins</code>` +
    `\n` +
    `\n` +
    `<i>Be careful! Restricted for non-admin users.` +
    ` Heavily checked and database tested zone</i>`;
  if (isAdmin) {
    return base + admin;
  } else {
    return base;
  }
};

exports.invalid = `<b>This command or message is invalid. Please see our command list for more information!</b>`;

exports.error_admin = `<b>You don't have enough power to do that!</b>`;

exports.invalid_query = `<b>Ehm!</b>`;

exports.photo = (data) =>
  `<b>#photo</b>` + `\n` + `<i>${data.message.caption || ` `}</i>`;

exports.video = (data) =>
  `<b>#video</b>` + `\n` + `<i>${data.message.caption || ` `}</i>`;

exports.audio = (data) =>
  `<b>#audio</b>` + `\n` + `<i>${data.message.caption || ` `}</i>`;

exports.links = `<b>Here are groups & bots of team BSBA:</b>`;
