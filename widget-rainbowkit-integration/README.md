# Gluex Widget RainbowKit Integration Example

This is an example repository demonstrating a working integration of the Gluex Widget with RainbowKit in a React application. You can use this as a reference implementation or starter template. For detailed integration guides and documentation, please visit [Gluex Documentation](https://docs.gluex.xyz).

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gluexprotocol/gluex-examples.git
```

2. Navigate to the example directory:
```bash
cd gluex-examples/widget-rainbowkit-integration
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Get your credentials:
   1. Visit [Gluex Portal](https://portal.gluex.xyz/login) and sign in or create an account
   2. Navigate to the API section to get your:
      - Integrator ID
      - API Key
   3. Visit [WalletConnect Cloud](https://cloud.walletconnect.com/sign-in) to get your:
      - Project ID
   4. Update the configurations:
      
      In `src/wagmi.ts`:
      ```typescript
      export const config = getDefaultConfig({
      projectId: 'YOUR_PROJECT_ID', // Get this from WalletConnect Cloud
      // Additional configuration options...
      });
      ```

      In `src/components/Widget.tsx`:
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
```

Open [http://localhost:3000](http://localhost:5173) with your browser to see the widget in action.

Check out [GlueX's Widget Studio](https://studio.gluex.xyz/playground) to customize the widget.

## Learn More

- [Gluex Documentation](https://docs.gluex.xyz)
- [Gluex DApp](https://dapp.gluex.xyz)
- [Gluex Website](https://gluex.xyz)

## Support

Visit [GlueX Protocol](https://bento.me/gluex-protocol) for all our social links and support channels.
