# Google Analytics MCP Server Setup

This guide explains how to set up the Google Analytics MCP (Model Context Protocol) server for this website. The MCP server allows AI assistants like Claude to query and analyze Google Analytics data in real-time.

## What is Google Analytics MCP?

The Google Analytics MCP server acts as a bridge between AI applications and your Google Analytics 4 (GA4) data. It enables:
- Natural language queries to your analytics data
- Real-time traffic analysis
- Conversion tracking insights
- User behavior analysis
- Automated reporting

## Prerequisites

Before you begin, ensure you have:

1. **Google Analytics 4 Property** with data
2. **Google Cloud Project** with Analytics Data API enabled
3. **Service Account** with appropriate permissions
4. **Claude Desktop** or another MCP-compatible client (optional, for AI queries)
5. **Node.js** 18.x or 20.x installed

## Step 1: Google Cloud Setup

### 1.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your Project ID

### 1.2 Enable Google Analytics Data API

1. In the Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Google Analytics Data API"
3. Click **Enable**

### 1.3 Create a Service Account

1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Enter a name (e.g., "ga-mcp-server")
4. Grant the role: **Viewer** (or more specific roles if needed)
5. Click **Done**

### 1.4 Generate Service Account Key

1. Click on your newly created service account
2. Go to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Save the downloaded file securely (e.g., `ga-service-account.json`)

⚠️ **Security Note**: Never commit this JSON file to version control!

### 1.5 Grant Service Account Access to GA4

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your GA4 property
3. Go to **Admin** > **Property Access Management**
4. Click **Add users**
5. Enter your service account email (found in the JSON file or Cloud Console)
6. Assign the **Viewer** role
7. Click **Add**

## Step 2: Install the MCP Server

The `mcp-server-google-analytics` package has already been installed in this repository as a dev dependency:

```bash
npm install --save-dev mcp-server-google-analytics
```

## Step 3: Configuration

### 3.1 For Claude Desktop

To use the MCP server with Claude Desktop, you need to configure it in Claude's settings:

**Location of Claude Desktop config file:**
- **Windows**: `%APPDATA%\\Claude\\claude_desktop_config.json`
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

**Configuration format:**

```json
{
  "mcpServers": {
    "google-analytics": {
      "command": "npx",
      "args": [
        "mcp-server-google-analytics"
      ],
      "env": {
        "GOOGLE_CLIENT_EMAIL": "your-service-account@project.iam.gserviceaccount.com",
        "GOOGLE_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\nYOUR_PRIVATE_KEY_HERE\\n-----END PRIVATE KEY-----\\n",
        "GOOGLE_ANALYTICS_PROPERTY_ID": "123456789"
      }
    }
  }
}
```

**Where to find these values:**

1. **GOOGLE_CLIENT_EMAIL**: Found in your service account JSON file as `client_email`
2. **GOOGLE_PRIVATE_KEY**: Found in your service account JSON file as `private_key`
   - ⚠️ Important: Keep the `\\n` escape sequences for newlines
3. **GOOGLE_ANALYTICS_PROPERTY_ID**: Found in Google Analytics Admin > Property Settings

### 3.2 Alternative: Using Environment Variables

You can also set these as system environment variables:

**On Windows:**
```cmd
set GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
set GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----...
set GOOGLE_ANALYTICS_PROPERTY_ID=123456789
```

**On macOS/Linux:**
```bash
export GOOGLE_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
export GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
export GOOGLE_ANALYTICS_PROPERTY_ID="123456789"
```

### 3.3 For This Project

A sample configuration file is provided at the root: `claude_desktop_config.json`

Copy the values from your service account JSON into this file for reference, but **DO NOT commit sensitive credentials to Git!**

## Step 4: Enable Google Analytics in the Website

### 4.1 Add Google Analytics ID to Environment

Add your GA4 Measurement ID to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4.2 Add Google Analytics Script

The website needs the Google Analytics tracking script. Add this to `src/app/layout.tsx`:

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
)}
```

## Step 5: Test the Setup

### 5.1 Test with Claude Desktop

1. Restart Claude Desktop completely (quit and reopen)
2. Start a new conversation
3. Try queries like:
   - "Show me traffic for the last 7 days"
   - "What are my top pages by views?"
   - "How many users visited yesterday?"
   - "What's my bounce rate this month?"

### 5.2 Test Manually

Run the MCP server directly:

```bash
npx mcp-server-google-analytics
```

This will start the server in development mode, allowing you to test the connection.

## Example Queries for Claude

Once configured, you can ask Claude:

- **Traffic Analysis**: "How many pageviews did I get this week?"
- **User Behavior**: "What's my average session duration?"
- **Conversions**: "How many contact form submissions this month?"
- **Content Performance**: "Which blog posts are most popular?"
- **Real-time Data**: "How many active users are on the site right now?"
- **Comparisons**: "Compare this month's traffic to last month"

## Troubleshooting

### "Server not found" or "Connection error"

- Verify the service account JSON file is correct
- Check that the Analytics Data API is enabled
- Ensure the service account has access to your GA4 property

### "Permission denied" errors

- Grant the service account "Viewer" role in GA4
- Verify the property ID is correct
- Check that your GA4 property has data

### Claude doesn't show the MCP tool

- Verify JSON syntax in `claude_desktop_config.json` (no trailing commas)
- Restart Claude Desktop completely
- Check the config file location is correct for your OS

### Private key format issues

- Ensure the private key has proper `\\n` escape sequences for newlines
- Don't add extra quotes or modify the key structure
- Copy the entire key from `-----BEGIN` to `-----END`

## Security Best Practices

1. **Never commit credentials**: Add `*-service-account.json` and `claude_desktop_config.json` to `.gitignore`
2. **Use least privilege**: Grant only "Viewer" role unless more is needed
3. **Rotate keys regularly**: Create new service account keys periodically
4. **Monitor access**: Review service account usage in Google Cloud Console
5. **Restrict property access**: Only grant access to specific GA4 properties needed

## Additional Resources

- [Official Google Analytics MCP GitHub](https://github.com/googleanalytics/google-analytics-mcp)
- [Google Analytics Data API Documentation](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [Model Context Protocol Specification](https://spec.modelcontextprotocol.io/)
- [Claude Desktop MCP Setup Guide](https://claude.com/docs/connectors/building/mcp-apps/getting-started)

## Support

For issues specific to:
- **MCP Server**: Check the [mcp-server-google-analytics npm package](https://www.npmjs.com/package/mcp-server-google-analytics)
- **Google Analytics**: Visit [GA4 Help Center](https://support.google.com/analytics)
- **Claude Integration**: Contact Anthropic support

---

**Need help?** Open an issue in this repository or consult the documentation linked above.
