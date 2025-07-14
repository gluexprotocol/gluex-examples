import React from "react";
import { type WidgetConfigPartialProps } from "@gluex/widget";
import { GlueXWidget } from "@gluex/widget";

export const Widget = () => {
  const config: WidgetConfigPartialProps["config"] = React.useMemo(() => {
    return {
      integrator: "YOUR_INTEGRATOR_ID",
      apiKey: "YOUR_API_KEY",

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
  }, []);

  return <GlueXWidget config={config} />;
};