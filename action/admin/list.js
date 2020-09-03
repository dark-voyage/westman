const { composer, middleware } = require("../../core/bot");

const gifs = require("../../database/db").gifs;
const consoles = require("../../layouts/consoles");
const security = require("../security");
const database = require("../../database/db");

composer.command(`list`, async (ctx) => {
  await security(ctx, async () => {
    const list = database.users["temporary"].toString();

    if (list === "") {
      await ctx.replyWithAnimation(
        { url: gifs.list },
        {
          parse_mode: "HTML",
          caption: `<b>Temporary admin list is empty!</b>`,
        }
      );
    } else {
      await ctx.replyWithAnimation(
        { url: gifs.list },
        {
          parse_mode: "HTML",
          caption: `<b>Temporary admins:</b>\n<code>${list}</code>`,
        }
      );
    }
  });
});

middleware(composer);
consoles.module(__filename);
