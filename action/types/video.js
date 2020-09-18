const { composer, middleware } = require("../../core/bot");

const { filter } = require("../../core/bot");
const counter = require("../../database/counter");

const consoles = require("../../layouts/consoles");
const keyboard = require("../../layouts/keyboards");
const env = require("../../core/env");

composer.on("video", async (ctx) => {
  const content = ctx.message.video.file_id;
  await ctx.replyWithHTML(`<b>Your video has been received and processing</b>`);
  await ctx.telegram.sendChatAction(ctx.chat.id, "upload_video");

  await ctx.telegram.sendVideo(env.CONFESSION, content, {
    parse_mode: "HTML",
    caption: `<b>#video => ${await counter()}</b>` +
        `\n` +
        `<i>${ctx.message.caption || ` `}</i>`,
    reply_markup: keyboard.video,
  });
});

middleware(composer);
consoles.module(__filename);
