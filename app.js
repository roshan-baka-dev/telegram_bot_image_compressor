// const { Telegraf } = require("telegraf");
import token from "./token.json" assert {type:'json'};

import { Telegraf } from "telegraf";
const bot = new Telegraf(token.key);

import promise from "promise";
import fs from "fs";

import axios from "axios";

// const imagemin = require('imagemin');

// const imageminJpegTran=require('imagemin-jpegtran');

// const imageminPngQuant=require('imagemin-pngquant');

import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

bot.on('photo',(ctx)=>{
    const files=ctx.update.message.photo;
    console.log(files);
    const fileId=files[0].file_id;
    ctx.telegram.getFileLink(fileId).then(url => {
    axios.get(url.href,{responseType:'stream'}).then((response)=>{
        return new promise((resolve,reject)=>{
            response.data.pipe(fs.createWriteStream(`images/download/1.jpg`));

                // const files = await imagemin(["images/*.{jpg,png}"], {
                //     destination: "build/images",
                //     plugins: [
                //       imageminJpegtran(),
                //       imageminPngquant({
                //         quality: [0.6, 0.8],
                //       }),
                //     ],
                //   });

        });
    });
    });
    ctx.replyWithPhoto({source:"images/download/1.jpg"},{caption:"compressed photo"});
});
//console.log(files);

bot.launch();