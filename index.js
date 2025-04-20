import { Client, Events, GatewayIntentBits, Message } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  // console.log(message.content);
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create ")[1];
    return message.reply({
      content: "Genarate link: " + url,
    });
  }
  message.reply({
    content: "Hello ! From Bot_Pro",
  });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply({
    content: "Pong!!",
  });
});
client.login(process.env.DISCORD_TOKEN);
