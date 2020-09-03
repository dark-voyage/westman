const { Markup } = require("telegraf");

exports.start = Markup.inlineKeyboard([
  [Markup.callbackButton("Show detailed information", "help")],
]);

exports.help = Markup.inlineKeyboard([
  [Markup.urlButton("Westman's Channel", "https://t.me/westmans")],
]);

exports.invalid = Markup.inlineKeyboard([
  Markup.callbackButton(`Show available commands`, `help`),
]);

exports.photo = Markup.inlineKeyboard([
  [Markup.urlButton(`Upload your own photo!`, `https://t.me/westmans_bot`)],
]);

exports.video = Markup.inlineKeyboard([
  [Markup.urlButton(`Upload your own video!`, `https://t.me/westmans_bot`)],
]);

exports.audio = Markup.inlineKeyboard([
  [
    Markup.urlButton(
      `Upload your own music & audio!`,
      `https://t.me/westmans_bot`
    ),
  ],
]);

exports.error_admin = Markup.inlineKeyboard([
  Markup.urlButton(`Contact with admin`, `https://t.me/genemator`),
]);

exports.links = async (links) => {
  const keyboard = [];
  for (let link of links) {
    keyboard.push([
      Markup.urlButton(link["name"], `https://t.me/` + link["url"]),
    ]);
  }
  return Markup.inlineKeyboard(keyboard);
};
