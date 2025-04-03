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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f696fc6ed8a09dcc7d64b8b4c73f6ad4`
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
