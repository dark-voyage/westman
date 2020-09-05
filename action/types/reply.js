const { composer, middleware, filter } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const env = require("../../core/env");
const gifs = require("../../database/db").gifs;
const counter = require("../../database/counter");

composer.hears(
  /\/reply (?:https:\/\/t.me\/westmans\/)?(.*)(?:\s)?:(?:\s)?(.*)/g,
  async (ctx) => {
    const replyTo = parseInt(ctx.match[1]); // https://t.me/westmans/<X>
    const confessionText = filter.clean(ctx.match[2]);

    await ctx.telegram.sendMessage(
      env.CONFESSION,
      `#reply => ${await counter()}` + `\n` + `<i>${confessionText}</i>`,
      {
        parse_mode: "HTML",
        reply_to_message_id: replyTo,
      }
    );
    await ctx.replyWithHTML(
      `<b>Thank you for your message. Stay stunned for new updates!</b>`
    );
  }
);

composer.hears(/\/reply/, async (ctx) => {
  await ctx.replyWithAnimation(
    { url: gifs.cm },
    {
      parse_mode: "HTML",
      caption:
        `<b>You requested reply command where you can reply to a message from the confession</b>` +
        `\n` +
        `\n` +
        `<i>In order to reply to a message on channel, please use our templates shown below:</i>` +
        `\n` +
        `<b>1.</b> <i>Copy the link of the message you are going to reply to. It should be something like that: https://t.me/westmans/xxx</i>` +
        `\n` +
        `<b>2.</b> <code>/reply &lt;message link : message&gt;</code>` +
        `\n` +
        `\n` +
        `<i>Example:</i>` +
        `\n` +
        `<code>/reply https://t.me/westmans/14 : Hey you!</code>` +
        `\n` +
        `<code>/reply 14 : Hey you!</code>`,
    }
  );
});

middleware(composer);
consoles.module(__filename);
