# Tarologa Calil MCP Server

This Model Context Protocol (MCP) server provides programmatic access to the Tarologa Calil website content and services.

## Features

### Resources

The server exposes the following resources:

- **About Content** (`tarot://content/about`): Information about Taróloga Calil including bio, video, images, and contacts
- **Services** (`tarot://content/services`): List of tarot and holistic therapy services offered

### Tools

The server provides the following tools:

- **update_about_content**: Update about page content (title, description, video URL, or contacts)
- **add_image**: Add new images to the about section gallery
- **get_content_summary**: Get a summary of all content in the project

## Setup

### 1. Build the MCP Server

```bash
npm run mcp:build
```

### 2. Test with MCP Inspector

```bash
npm run mcp:inspect
```

### 3. Configure in Claude Desktop

Add the following configuration to your Claude Desktop config file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "tarologa-calil": {
      "command": "node",
      "args": [
        "/Users/leticialima/Documents/Carol/tarologa-calil-services/build/server.js"
      ]
    }
  }
}
```

### 4. Restart Claude Desktop

After adding the configuration, restart Claude Desktop to connect to the MCP server.

## Development

Run the MCP server in development mode:

```bash
npm run mcp:dev
```

## Usage Examples

Once connected to Claude Desktop, you can:

1. **Read Content**:
   - "Show me the about content"
   - "What services are offered?"

2. **Update Content**:
   - "Update the about page title to 'Welcome to Taróloga Calil'"
   - "Change the Instagram URL to..."

3. **Manage Images**:
   - "Add a new image at /assets/new-photo.jpg"

4. **Get Summary**:
   - "Give me a summary of all content"

## Project Structure

```
tarologa-calil-services/
├── mcp/
│   └── server.ts          # MCP server implementation
├── content/
│   └── about.ts           # Content managed by MCP
├── build/                 # Compiled MCP server (generated)
└── tsconfig.mcp.json      # TypeScript config for MCP
```

## API Reference

### Resources

#### tarot://content/about

Returns the complete about content including:

- title
- description
- videoUrl
- images array
- contacts (whatsapp, instagram, youtube)

#### tarot://content/services

Returns a list of available services with name and description.

### Tools

#### update_about_content

**Parameters**:

- `field`: One of "title", "description", "videoUrl", "whatsapp", "instagram", "youtube"
- `value`: The new value for the field

#### add_image

**Parameters**:

- `imagePath`: Path to the image file (e.g., "/assets/image.jpg")

#### get_content_summary

**Parameters**: None

Returns a summary of all content in the project.
