# Gluex Widget Reown Integration Example

This is an example repository demonstrating a working integration of the Gluex Widget in a Next.js application using Reown AppKit for wallet connection. You can use this as a reference implementation or starter template. For detailed integration guides and documentation, please visit [Gluex Documentation](https://docs.gluex.xyz).

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gluexprotocol/gluex-examples.git
```

2. Navigate to the example directory:
```bash
cd gluex-examples/widget-reown-integration
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Get your credentials:
   1. Visit [Reown Cloud](https://cloud.reown.com) and create a new project
   2. Copy your Project ID
   3. Rename `.env.example` to `.env` and set your Project ID:
      ```env
      NEXT_PUBLIC_PROJECT_ID=your_project_id
      ```
   4. Get your Gluex credentials from [Gluex Portal](https://portal.gluex.xyz/login)
   5. Update the widget configuration in the appropriate component with your Gluex credentials:
      ```typescript
      const config: WidgetConfigPartialProps["config"] = {
        integrator: "YOUR_INTEGRATOR_ID",
        apiKey: "YOUR_API_KEY",
        // Additional configuration options...
      };
      ```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the widget in action.

Check out [GlueX's Widget Studio](https://studio.gluex.xyz/playground) to customize the widget.

## Learn More

- [Gluex Documentation](https://docs.gluex.xyz)
- [Gluex DApp](https://dapp.gluex.xyz)
- [Gluex Website](https://gluex.xyz)
- [Reown Documentation](https://docs.reown.com) - learn about Reown AppKit integration

## Support

Visit [GlueX Protocol](https://bento.me/gluex-protocol) for all our social links and support channels.
