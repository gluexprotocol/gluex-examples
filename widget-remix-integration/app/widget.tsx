"use client";

import React, { useEffect, useState } from "react";
import type { WidgetConfigPartialProps } from "@gluex/widget";

// Client-side only component to load the widget
const ClientSideWidget = ({ config }: { config: WidgetConfigPartialProps["config"] }) => {
  const [Widget, setWidget] = useState<React.ComponentType<{ config: any }> | null>(null);
  
  useEffect(() => {
    // Dynamically import the widget on the client side
    import("@gluex/widget").then(module => {
      setWidget(() => module.GlueXWidget);
    });
  }, []);

  if (!Widget) {
    return <div>Loading...</div>;
  }

  return <Widget config={config} />;
};


export const Widget = () => {
  const config: WidgetConfigPartialProps["config"] = {
    integrator: "YOUR_INTEGRATOR_ID",
    apiKey: "YOUR_API_KEY",

    // ... rest of the widget configuration
    // appearance: 'dark',
    // theme: {
    //   container: {
    //     boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
    //     borderRadius: '16px',
    //   },
    // },
  };

  return <ClientSideWidget config={config} />;
};
