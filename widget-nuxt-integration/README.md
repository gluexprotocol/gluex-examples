# Gluex Widget Nuxt Integration Example

This is an example repository demonstrating a working integration of the Gluex Widget in a Nuxt application. You can use this as a reference implementation or starter template. For detailed integration guides and documentation, please visit [Gluex Documentation](https://docs.gluex.xyz).

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gluexprotocol/gluex-examples.git
```

2. Navigate to the example directory:
```bash
cd gluex-examples/widget-nuxt-integration
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Get your Gluex credentials:
   1. Visit [Gluex Portal](https://portal.gluex.xyz/login) and sign in or create an account
   2. Navigate to the API section to get your:
      - Integrator ID
      - API Key
   3. Update the widget configuration in `app/widget.vue`:
      ```typescript
      const config = {
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

## Support

Visit [GlueX Protocol](https://bento.me/gluex-protocol) for all our social links and support channels.
