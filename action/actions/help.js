const { composer, middleware } = require("../../core/bot");

const gifs = require("../../database/db").gifs;
const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const database = require("../../database/db");

composer.action(`help`, async (ctx) => {
  if (
    database.users["eternal"].includes(ctx.from.id) ||
    database.users["temporary"].includes(ctx.from.username)
  ) {
    await ctx.editMessageText(
        message.help(true),
      {
        parse_mode: "HTML",
        reply_markup: keyboard.help,
      }
    );
  } else {
    await ctx.editMessageMedia(
      {
        type: "animation",
        media: gifs.help,
        caption: message.help(false),
      },
      {
        parse_mode: "HTML",
        reply_markup: keyboard.help,
      }
    );
  }
});

middleware(composer);
consoles.module(__filename);
