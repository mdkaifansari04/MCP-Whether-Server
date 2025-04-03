import { config } from "dotenv";
config();
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import axios from "axios";

const demoServer = new McpServer({
  name: "demo-server",
  version: "1.0.0",
});

async function getWhetherDataByCityName(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WHETHER_API_KEY}`
    );

    if (!response) return { whether: null, error: "city not found" };
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

demoServer.tool(
  "getWhetherByCityName",
  { name: z.string() },
  async ({ name }) => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(await getWhetherDataByCityName(name)),
      },
    ],
  })
);

async function init() {
  const transport = new StdioServerTransport();
  await demoServer.connect(transport);
}

init();
