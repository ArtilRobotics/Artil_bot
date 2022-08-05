const Discord=require('discord.js');
const{MessageActionRow,MessageSelectMenu,MessageEmbed,MessageButton}=require('discord.js')
module.exports={
 name:"web",// Nombre del comando
  alias:["paginaweb"],// Alias del comando(Por si quieres activar el comando de2maneras)
  execute(client,message,args){ 
 
        const embed = new Discord.MessageEmbed()
        .setTitle("Nuestra Página Web")
        .addField("🤖 Artil Robotics 🤖","[Click Aqui](https://artilrobotics.com)")

        message.channel.send({embeds:[embed]})
    }

}

