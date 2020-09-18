const { composer, middleware, filter } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const env = require("../../core/env");
const counter = require("../../database/counter");

composer.hears(/\/cm (.*)/gi, async (ctx) => {
  const confessionText = filter.clean(ctx.match[1]);
  await ctx.telegram.sendMessage(
    env.CONFESSION,
    `#message => ${await counter()}` + `\n` + `<i>${confessionText}</i>`,
    {
      parse_mode: "HTML",
    }
  );
  await ctx.replyWithHTML(
    `<b>Thank you for your message. Stay stunned for new updates!</b>`
  );
});

composer.hears(/\/cm/, async (ctx) => {
  await ctx.replyWithHTML(
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
    {
      parse_mode: "HTML",
    }
  );
});

middleware(composer);
consoles.module(__filename);
