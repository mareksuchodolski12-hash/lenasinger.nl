# Google Analytics MCP Integration

This repository includes integration with the Google Analytics MCP (Model Context Protocol) server, allowing AI assistants to query and analyze website analytics data.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

The `mcp-server-google-analytics` package is already included as a dev dependency.

### 2. Set Up Google Cloud

Follow the detailed setup guide in [docs/GOOGLE_ANALYTICS_MCP_SETUP.md](./docs/GOOGLE_ANALYTICS_MCP_SETUP.md) to:
- Create a Google Cloud project
- Enable Analytics Data API
- Create a service account
- Grant access to your GA4 property

### 3. Configure Environment Variables

Add to your `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4. Configure Claude Desktop

Add to your Claude Desktop config file (`claude_desktop_config.json`):

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`  
**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "google-analytics": {
      "command": "npx",
      "args": ["mcp-server-google-analytics"],
      "env": {
        "GOOGLE_CLIENT_EMAIL": "your-service-account@project.iam.gserviceaccount.com",
        "GOOGLE_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n",
        "GOOGLE_ANALYTICS_PROPERTY_ID": "123456789"
      }
    }
  }
}
```

### 5. Use with Claude

Restart Claude Desktop and ask questions like:
- "Show me website traffic for the last 7 days"
- "What are the top 5 pages by pageviews?"
- "How many users visited yesterday?"
- "What's the bounce rate this month?"

## Features

- **Real-time Analytics**: Query current website metrics
- **Historical Data**: Analyze trends over time
- **Natural Language**: Ask questions in plain English
- **Automated Insights**: Get AI-powered analysis of your data
- **Conversion Tracking**: Monitor contact form submissions and CTAs

## Documentation

- [Complete Setup Guide](./docs/GOOGLE_ANALYTICS_MCP_SETUP.md) - Detailed installation and configuration
- [Sample Config](./claude_desktop_config.json) - Example configuration file (template only)
- [Troubleshooting](./docs/GOOGLE_ANALYTICS_MCP_SETUP.md#troubleshooting) - Common issues and solutions

## Security

⚠️ **Important**: Never commit credentials to Git!

The following files are already in `.gitignore`:
- `*-service-account.json` - Google Cloud service account keys
- `claude_desktop_config.json` - MCP configuration with credentials

## Architecture

```
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│  Claude Desktop │─────▶│  MCP Server      │─────▶│ Google          │
│  (AI Assistant) │      │  (npx command)   │      │ Analytics API   │
└─────────────────┘      └──────────────────┘      └─────────────────┘
                                 │
                                 │ reads
                                 ▼
                         ┌──────────────────┐
                         │ Service Account  │
                         │ Credentials      │
                         └──────────────────┘
```

## What's Included

This integration adds:
1. **npm package**: `mcp-server-google-analytics` (dev dependency)
2. **GA Component**: Client-side Google Analytics tracking
3. **Documentation**: Complete setup and usage guides
4. **Configuration**: Sample MCP config file (template)
5. **Security**: Proper `.gitignore` rules for credentials

## Benefits

- **Data-Driven Decisions**: Quickly understand what's working
- **Time Savings**: No need to navigate GA4 dashboard
- **AI-Powered Insights**: Let Claude analyze trends and patterns
- **Accessibility**: Query analytics in natural language
- **Integration**: Works seamlessly with existing tracking code

## Next Steps

1. Follow the [setup guide](./docs/GOOGLE_ANALYTICS_MCP_SETUP.md)
2. Configure your service account credentials
3. Test with Claude Desktop
4. Start querying your analytics data!

---

**Need Help?** See the [troubleshooting section](./docs/GOOGLE_ANALYTICS_MCP_SETUP.md#troubleshooting) or open an issue.
