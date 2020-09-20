const { composer, middleware } = require("../../core/bot");

const { filter } = require("../../core/bot");
const counter = require("../../database/counter");

const consoles = require("../../layouts/consoles");
const keyboard = require("../../layouts/keyboards");
const env = require("../../core/env");

composer.on("audio", async (ctx) => {
  const content = ctx.message.audio.file_id;
  await ctx.replyWithHTML(`<b>Your photo has been received and processing</b>`);
  await ctx.telegram.sendChatAction(ctx.chat.id, "upload_audio");

  await ctx.telegram.sendAudio(env.CONFESSION, content, {
    caption:
      `<b>#audio => ${await counter()}</b>` +
      `\n` +
      `<i>${ctx.message.caption || ` `}</i>`,
    parse_mode: "HTML",
    reply_markup: keyboard.audio,
  });
});

middleware(composer);
consoles.module(__filename);
