const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const env = require("../../core/env");
const gifs = require("../../database/db").gifs;

composer.hears(/\/cm (.*)/gi, async (ctx) => {
  const confessionText = ctx.match[1];
  await ctx.telegram.sendMessage(
    env.CONFESSION,
    `#message \<number\>` + `\n` + `<i>${confessionText}</i>`,
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
    { url: gifs.cm },
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
