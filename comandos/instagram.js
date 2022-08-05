const Discord=require('discord.js');
const{MessageActionRow,MessageSelectMenu,MessageEmbed,MessageButton}=require('discord.js')
module.exports={
 name:"instagram",// Nombre del comando
  alias:["fotos"],// Alias del comando(Por si quieres activar el comando de2maneras)
  execute(client,message,args){ 
 
        const embed = new Discord.MessageEmbed()
        .setColor('#e625d5')
        .setDescription('Echale un vistazo a nuestros proyectos en fotos y videos')
        .setAuthor({ name: '@artilrobotics', iconURL: 'https://i.imgur.com/M6yBwxS.png', url: 'https://www.instagram.com/artilrobotics/' })
        .setThumbnail('https://i.imgur.com/uhjcuxL.png')
        .setImage('https://i.imgur.com/DPUajyO.gif')
        message.channel.send({embeds:[embed]})
    }

}

