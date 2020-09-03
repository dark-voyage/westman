const { composer, middleware } = require("../../core/bot");

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const env = require("../../core/env");

composer.hears(/\/cm (.*)/gi, async (ctx) => {
  const confessionText = ctx.match[1];
  const user = ctx.from.first_name;
  await ctx.telegram.sendMessage(
    env.CONFESSION,
    `#message` +
      `\n` +
      `<b>New message from:</b>` +
      `\n` +
      `<code>${bcrypt.hashSync(ctx.from.first_name, salt)}</code>:` +
      `\n` +
      `\n` +
      `<i>${confessionText}</i>`,
    {
      parse_mode: "HTML",
    }
  );
  await ctx.replyWithHTML(
    `<b>Thank you for your message. Stay stunned for new updates!</b>`
  );
});

composer.hears(/\/cm/, async (ctx) => {
  await ctx.replyWithAnimation(
    { url: `https://media.giphy.com/media/l3fQulUUVwxr4Rvt6/source.gif` },
    {
      parse_mode: "HTML",
      caption:
        `<b>You requested cm command where you can send message to the confession</b>` +
        `\n` +
        `\n` +
        `<i>In order to send a message to the channel, please use our templates shown below:</i>` +
        `\n` +
        `<code>/cm &lt;your very long text here&gt;</code>` +
        `\n` +
        `\n` +
        `<i>Example:</i>` +
        `\n` +
        `<code>/cm Nobody can see my privacy. I'm private & fast!</code>`,
    }
  );
});

middleware(composer);
consoles.module(__filename);
