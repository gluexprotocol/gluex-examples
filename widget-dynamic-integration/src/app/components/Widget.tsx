"use client";

import React from "react";
import { type WidgetConfigPartialProps } from "@gluex/widget";
import { GlueXWidget, WidgetSkeleton } from "@gluex/widget";
import { ClientSideRender } from "./ClientSideRender";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export const Widget = () => {
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const isConnected = !!primaryWallet;

  const config: WidgetConfigPartialProps["config"] = React.useMemo(() => {
    return {
      integrator: "YOUR_INTEGRATOR_ID",
      apiKey: "YOUR_API_KEY",
      wallet: {
        onConnect: () => {
          if (!isConnected) {
            setShowAuthFlow(true);
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
  }, [primaryWallet, isConnected, setShowAuthFlow]);

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <ClientSideRender fallback={<WidgetSkeleton config={config} />}>
        <GlueXWidget config={config} />
      </ClientSideRender>
    </div>
  );
};