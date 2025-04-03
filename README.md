# 🌤️ MCP Weather Server (Cursor + Node.js + WSL)

This project is a simple **Model Context Protocol (MCP)** server that provides real-time weather data using the **OpenWeatherMap API**, built with **Node.js** and designed to run inside **WSL** (Windows Subsystem for Linux).

## 📦 Features

- Exposes an MCP tool: `getWhetherByCityName`
- Fetches weather data for any city using OpenWeatherMap
- Compatible with [Cursor](https://cursor.sh) AI client
- WSL support with clean `.env` configuration

---

## 🛠️ Prerequisites

- [Cursor](https://cursor.sh) installed
- WSL enabled with Ubuntu or other Linux distro
- Node.js and npm installed in WSL
- OpenWeatherMap API key

---

## 🔧 Installation

```bash
# In WSL terminal
git clone https://github.com/your-username/mcp-weather-server
cd mcp-weather-server
npm install
```

## 🔐 Environment Setup

Create a `.env` file in the root of the project:

```
WHETHER_API_KEY=your_openweather_api_key_here
```

> 🌱 The server will read this key using `dotenv`.

---

## 🧠 MCP Configuration (in Cursor)

In your Cursor's `mcp.json` (or settings UI), use the following:

```json
{
  "mcpServers": {
    "demo": {
      "command": "wsl",
      "args": ["node", "/home/kaif/code/learnings/mcp-poc/index.js"]
    }
  }
}
```

> ✅ Note: `env` key won't work properly when using `wsl`. Use a `.env` file instead.

---

## 🚀 Running the Server

In Cursor, create a new MCP Client using the `demo` server. Then run queries like:

```
getWhetherByCityName({ name: "London" })
```

The server will respond with current weather data for that city.

---

## 📂 File Structure

```
mcp-poc/
├── index.js           # MCP server entrypoint
├── .env               # Your API key
├── package.json
└── README.md
```

---

## 📜 License

MIT

---

## ✨ Credits

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol)
- [Cursor](https://cursor.sh)

```

---

Let me know if you'd like badges, GIF demos, or example responses added!
```
