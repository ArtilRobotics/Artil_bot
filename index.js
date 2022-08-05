const { X509Certificate } = require("crypto");
const Discord = require("discord.js"); //Definimos discord
const {
  Client,
  Intents,
  MessageEmbed,
  Collection,
  Guild,
} = require("discord.js");
const intents = new Discord.Intents(14023);
const client = new Discord.Client({ intents });
const fs = require("fs"); //Definimos fs
let { readdirSync } = require("fs"); //Definimos readdirSync que también lo necesitamos

console.log("Bot Encendido!");

////////////////////////HANDLER//////////////////////////
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file=> file.endsWith(".js"))

for(const file of slashcommandsFiles){
  const slash = require(`./slashcmd/${file}`)
  console.log(`Slash Commands - ${file} cargado.`)
  client.slashcommands.set(slash.data.name, slash)
}

client.on("interactionCreate",async(interaction) =>{
  if(!interaction.isCommand()) return;

  const slashcmds = client.slashcommands.get(interaction.commandName)

  if(!slashcmds) return;

  try{
    await slashcmds.run(client,interaction)
  }catch(e){
    console.error(e)
  }
})

//Eventos
for (const file of readdirSync("./eventos/")) {
  //Los eventos de carga para el bot
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./eventos/${file}`);
    client.on(fileName, fileContents.bind(null, client));
  }
}

client.on("messageCreate", (message) => {
  let prefix = "ar.";

  if (message.channel.type === "dm") if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find(
    (c) => c.name === command || (c.alias && c.alias.includes(command))
  );
  if (cmd) {
    cmd.execute(client, message, args);
  }
});

//// Evento Mensaje de Bienvenida

client.on("guildMemberAdd", async (member) => {
  if (member.guild.id === "712087216331161642") { 
    const Canvas = require("canvas")
    const canvas = Canvas.createCanvas(1255, 738)
    const ctx = canvas.getContext("2d")
    const background = await Canvas.loadImage("https://i.imgur.com/eSpRdFC.jpg")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#ffffff"
    ctx.font = "100px Arial"

    ctx.fillText("Bienvenido", 460, 260)
    ctx.fillText(`${member.user.username}`, 460, 340)

    ctx.beginPath()
    ctx.arc(247, 438, 175, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    const avatar = await Canvas.loadImage(member.user.avatarURL({ dynamic: true, size: 1024, format: "png" }))
    ctx.drawImage(avatar, 72, 263, 350, 350)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"Bienvenida.png")


    let usercolor = (await client.users.fetch(member.id, { force: true }))
    .hexAccentColor;
  if (usercolor == null) usercolor = "DARK_GREEN";  

    const embed = new Discord.MessageEmbed()
    .setTitle("Bienvenido a nuestro Canal")
    .setDescription(
      `Bienvenido/a <@${member.user.id}>, al canal de discord **Artil Robotics**, estás invitado/a a compartir y participar lo que quieras, aprende a usar los canales en <#712087217274880091>.\nTambién preséntate en #Cuéntanos de ti así te conoce todo el equipo.😁`
    )
    .setThumbnail(
      member.user.avatarURL({ dynamic: true, size: 4096, format: "png" })
    )
    .setImage("https://i.imgur.com/3vvHa5w.gif")
    .setColor("#3c41de")
    .addFields(
      {
        name: "Fecha de Ingreso",
        value: `${member.joinedAt.toUTCString()}`,
        inline: true,
      },
      {
        name: "Número de Usuario",
        value: `${member.guild.memberCount}`,
        inline: true,
      }
    );


    client.channels.cache.get("991744521174011965").send({ files:[attachment] });
    client.channels.cache.get("712087217274880091").send({embeds: [embed]});
  }

  
});

client.login("OTkxNDM4Mzk0NjAzMzQzOTc1.GcJUy7.04WXsVdoaolpkNmQrDCQqGmU7DQ7MutXZzqYDY");
