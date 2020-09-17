const { composer, middleware, filter } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const env = require("../../core/env");
const gifs = require("../../database/db").gifs;
const counter = require("../../database/counter");

composer.on("text", async (ctx) => {
    const confessionText = ctx.match[1] // filter.clean(ctx.match[1]);
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

composer.command("text", async (ctx) => {
    await ctx.replyWithAnimation(
        { url: gifs.cm },
        {
            parse_mode: "HTML",
            caption:
                `<b>You requested text command where it will guide you about sending message to confession</b>` +
                `\n` +
                `\n` +
                `<i>In order to send a message to the channel, please, just text your message!</i>` +
                `\n` +
                `\n` +
                `<i>Example:</i>` +
                `\n` +
                `<code>Hello World!</code>`,
        }
    );
});

middleware(composer);
consoles.module(__filename);
