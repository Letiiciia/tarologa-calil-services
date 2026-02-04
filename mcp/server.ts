#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dynamically import the about content
const contentPath = path.join(__dirname, "..", "content", "about.js");
const { aboutContent } = await import(contentPath);

// Server configuration
const SERVER_NAME = "tarologa-calil-mcp";
const SERVER_VERSION = "1.0.0";

// Create MCP server instance
const server = new Server(
  {
    name: SERVER_NAME,
    version: SERVER_VERSION,
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  },
);

// Resource handlers - Expose content for reading
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "tarot://content/about",
        name: "About Content",
        description:
          "Information about Taróloga Calil (bio, video, images, contacts)",
        mimeType: "application/json",
      },
      {
        uri: "tarot://content/services",
        name: "Services",
        description: "List of tarot and holistic therapy services offered",
        mimeType: "application/json",
      },
    ],
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;

  if (uri === "tarot://content/about") {
    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify(aboutContent, null, 2),
        },
      ],
    };
  }

  if (uri === "tarot://content/services") {
    // Placeholder for services - can be expanded
    const services = {
      services: [
        {
          name: "Leitura de Tarot",
          description: "Consulta personalizada de tarot",
        },
        {
          name: "Terapia Holística",
          description:
            "Sessões de terapia holística incluindo meditação guiada, respiração consciente e auriculoterapia",
        },
        {
          name: "Coaching de Relacionamentos",
          description:
            "Coaching para relacionamentos e sexualidade usando o método eneagrama",
        },
        {
          name: "Reiki",
          description:
            "Canalização de energia Reiki para equilíbrio energético",
        },
      ],
    };

    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify(services, null, 2),
        },
      ],
    };
  }

  throw new Error(`Resource not found: ${uri}`);
});

// Tool handlers - Expose actions
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "update_about_content",
        description:
          "Update the about content (title, description, video URL, or contacts)",
        inputSchema: {
          type: "object",
          properties: {
            field: {
              type: "string",
              enum: [
                "title",
                "description",
                "videoUrl",
                "whatsapp",
                "instagram",
                "youtube",
              ],
              description: "The field to update",
            },
            value: {
              type: "string",
              description: "The new value for the field",
            },
          },
          required: ["field", "value"],
        },
      },
      {
        name: "add_image",
        description: "Add a new image to the about section gallery",
        inputSchema: {
          type: "object",
          properties: {
            imagePath: {
              type: "string",
              description: "Path to the image file (e.g., /assets/image.jpg)",
            },
          },
          required: ["imagePath"],
        },
      },
      {
        name: "get_content_summary",
        description: "Get a summary of all content in the project",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "update_about_content") {
      const { field, value } = args as { field: string; value: string };

      const contentPath = path.join(process.cwd(), "content", "about.ts");
      let content = await fs.readFile(contentPath, "utf-8");

      // Update the specific field
      if (field === "title") {
        content = content.replace(/title:\s*"[^"]*"/, `title: "${value}"`);
      } else if (field === "description") {
        content = content.replace(
          /description:\s*`[^`]*`/,
          `description: \`${value}\``,
        );
      } else if (field === "videoUrl") {
        content = content.replace(
          /videoUrl:\s*"[^"]*"/,
          `videoUrl: "${value}"`,
        );
      } else if (["whatsapp", "instagram", "youtube"].includes(field)) {
        const regex = new RegExp(`${field}:\\s*"[^"]*"`);
        content = content.replace(regex, `${field}: "${value}"`);
      }

      await fs.writeFile(contentPath, content, "utf-8");

      return {
        content: [
          {
            type: "text",
            text: `Successfully updated ${field} to: ${value}`,
          },
        ],
      };
    }

    if (name === "add_image") {
      const { imagePath } = args as { imagePath: string };

      const contentPath = path.join(process.cwd(), "content", "about.ts");
      let content = await fs.readFile(contentPath, "utf-8");

      // Add the image to the images array
      content = content.replace(/images:\s*\[([\s\S]*?)\]/, (match, images) => {
        const cleanImages = images.trim();
        const newImage = `"${imagePath}"`;
        if (cleanImages) {
          return `images: [${cleanImages},\n    ${newImage}\n  ]`;
        } else {
          return `images: [\n    ${newImage}\n  ]`;
        }
      });

      await fs.writeFile(contentPath, content, "utf-8");

      return {
        content: [
          {
            type: "text",
            text: `Successfully added image: ${imagePath}`,
          },
        ],
      };
    }

    if (name === "get_content_summary") {
      const summary = {
        about: {
          title: aboutContent.title,
          hasDescription: !!aboutContent.description,
          descriptionLength: aboutContent.description?.length || 0,
          videoUrl: aboutContent.videoUrl,
          imagesCount: aboutContent.images.length,
          contacts: Object.keys(aboutContent.contacts),
        },
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(summary, null, 2),
          },
        ],
      };
    }

    throw new Error(`Unknown tool: ${name}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: "text",
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Tarologa Calil MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
