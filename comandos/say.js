const Discord=require("discord.js");
const{MessageActionRow,MessageSelectMenu,MessageEmbed,MessageButton}=require('discord.js')
module.exports={
    name:"say",
    alias:[],
   execute(client,message,args){
     const mensaje =args.join(" ")
     if(!mensaje)return message.channel.send("Debes escribir algo!")
                   
     setTimeout(function(){
        message.delete()
        message.channel.send(`${mensaje}`)
     },1)

    }
}
        