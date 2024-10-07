import { Telegraf } from "telegraf";
import dotenv,{config} from "dotenv";
dotenv.config()
import  axios from 'axios';
const bot = new Telegraf(process.env.TELEGRAM_KEY);
const arrowfunction = `
    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
   in arrow function we dont use function keyword like 
   showing some example in upper 
   and how can we call simple 
   write 
   function name ()
   like  add ()
   multiply()
   subtract()
   divide()
    in point of view arrow function is  more efficient than noraml function 
        `
bot.start((ctx) => ctx.reply("Welcome! this bot is made for javascript practice"));
bot.command("owner",(ctx)=> ctx.reply("This bot is made by sujeet kushwaha"));
bot.command("arrowfunction",(ctx)=>ctx.reply(arrowfunction))

bot.help((ctx) => ctx.reply("This is a simple bot that responds to /start and /help"));
bot.on('sticker',(ctx)=>ctx.reply('😀'))
bot.hears('hii', (ctx) =>ctx.reply(` Hi! there `));
bot.command('learnreact',async (ctx)=>{
        let responce = await axios.get('https://raw.githubusercontent.com/sujeettx/learn-react/refs/heads/master/react-tut/src/Components/ApiPost.js') ;
        // console.log(responce.data);
    ctx.reply(responce.data)
})
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))