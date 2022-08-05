const Discord=require('discord.js');
const{MessageActionRow,MessageSelectMenu,MessageEmbed,MessageButton}=require('discord.js')
module.exports={
 name:"facebook",// Nombre del comando
  alias:["red"],// Alias del comando(Por si quieres activar el comando de2maneras)
  execute(client,message,args){ 
 
        const embed = new Discord.MessageEmbed()
        .setColor('#3c41de')
        .setDescription('Echale un vistazo a nuestros proyectos en fotos y videos')
        .setAuthor({ name: 'ArtilRobots', iconURL: 'https://i.imgur.com/QQ89Rt3.jpeg', url: 'https://www.facebook.com/ArtilRobots/' })
        .setThumbnail('https://i.imgur.com/uhjcuxL.png')
        .setImage('https://i.imgur.com/N6gS7Ky.gif')
        message.channel.send({embeds:[embed]})
    }

}

