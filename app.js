const { Telegraf } = require("telegraf");

const bot = new Telegraf("5402819513:AAHeAf6fC58PWIFpRmE-BxP6S5AOrzXLz4I");


const translator=require('translate-google');

bot.start((ctx)=>{
    ctx.reply("hello,send me a text you want to convert or use '/help' comand");
});
bot.help((ctx)=>{
    ctx.reply();
})


let f='en';
let s='hi';

bot.on('text',async(ctx)=>{
    const text=(ctx.update.message.text);
    const translation=await translator(text,{from:f,to:s});
    ctx.reply(translation);
});

bot.launch();

  
