import React from "react";
import { WidgetConfigPartialProps,WidgetSkeleton } from "@gluex/widget";
import dynamic from "next/dynamic";
import { injected } from "wagmi/connectors";
import { useAccount, useConnect } from "wagmi";

const GlueXWidget = dynamic(
  () => import("@gluex/widget").then((mod) => mod.GlueXWidget),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);

export const Widget = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const config: WidgetConfigPartialProps["config"] = React.useMemo(() => {
    return {
      integrator: "YOUR_INTEGRATOR_ID",
      apiKey: "YOUR_API_KEY",
      wallet: {
        onConnect: () => {
          if (!isConnected) {
            connect({ connector: injected() });
          }
        },
        usePartialWalletManagement: true,
      }

      // ... rest of the widget configuration
      // Example:
      // appearance: 'dark',
      // theme: {
      //   container: {
      //     boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
      //     borderRadius: '16px',
      //   },
      // },
    };
  }, [address, isConnected, connect]);

  return <GlueXWidget config={config} />;
};