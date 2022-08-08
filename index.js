const { isMessageComponentGuildInteraction } = require('discord-api-types/utils/v9');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 32767, partials: ['USER', 'MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER'] });

client.login("OTk5NjAzMjE1MzQ1NjQ3Njg3.GyMMcQ.9zb3huYtNFbXegJPc4-k6qiG7MHUEzQM0G9YCo")

client.on('ready', async() => {
    console.log(`Bot online.\nNome bot: ${client.user.tag}`);
});

client.on("messageCreate", async(message) => {
    if(message.content == "Ciao"){
        message.author.send("Hey, ciao");
    }
    if(message.content == "youtube"){
        message.channel.send("Questo è il canale: https://www.youtube.com/")
    }
    if(message.content == "Come stai?"){
        message.channel.send("Bene! Te?" + message.author.toString())
    }
    if(message.content == "Sei brutto"){
        // message.channel.send("Come <@399298518063382544")
        message.channel.send({content: "Come <@399298518063382544>"})
    }
    if(message.content == "Mandami un file"){
        message.channel.send("File: ", {files: ["https://th.bing.com/th/id/OIP.p68dPkfiQmhKOyuGtU5aLwHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7"]})
    }
})

var messaggi= ["Ciao!", "Hey!", "Hola, come va?"]

client.on("message", (message) => {
    if(message.content == "Hey"){
        var random= Math.floor(Math.random()*isMessageComponentGuildInteraction.lenght)
        message.channes.send(message.author.toString()+ messaggi[random])
    }
})

function oraAttuale(){
    var hour= new Date().getMinutes()
    var minutes= new Date().getMinutes()
    var canale= client.channels.cache.get("1000023180267761666")
    if(hour == 22 && minute == 30){
        canale.send("Ciao Francesco, sono le 22.30!")   
    }
}

setInterval(oraAttuale, 1000*60)

