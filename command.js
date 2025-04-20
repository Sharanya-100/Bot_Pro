import { REST, Routes } from "discord.js";
require("dotenv").config();

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const token = process.env.DISCORD_TOKEN;

const rest = new REST({ version: "10" }).setToken(token);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1362800213432991824"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
