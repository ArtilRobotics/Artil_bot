const fs = require("fs")
const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientID,guild } = require("./config.json")
const commands = []
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/${fisle}`)
    commands.push(slash.data.toJSON())
}

const rest = new REST({ version: "9"}).setToken("OTkxNDM4Mzk0NjAzMzQzOTc1.GcJUy7.04WXsVdoaolpkNmQrDCQqGmU7DQ7MutXZzqYDY"    )

createSlah()
async function createSlah(){
    try{
        await rest.put(
            Routes.applicationCommands(clientID,guild),{
                body:commands 
            }
        )
        console.log("Slash Commands agregados.")
    }catch(e){
        console.error(e)
    }
}