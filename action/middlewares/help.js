const { composer, middleware } = require("../../core/bot");

const gifs = require("../../database/db").gifs;
const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const database = require("../../database/db");

composer.help(async (ctx) => {
  if (
    database.users["eternal"].includes(ctx.from.id) ||
    database.users["temporary"].includes(ctx.from.username)
  ) {
    await ctx.replyWithAnimation(
      { url: gifs.help },
      {
        parse_mode: "HTML",
        caption: message.help(true),
        reply_markup: keyboard.help,
      }
    );
  } else {
    await ctx.replyWithAnimation(
      { url: gifs.help },
      {
        parse_mode: "HTML",
        caption: message.help(false),
        reply_markup: keyboard.help,
      }
    );
  }
});

middleware(composer);
consoles.module(__filename);
