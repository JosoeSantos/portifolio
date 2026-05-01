import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import "../app/globals.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "paper", title: "Paper (light)", icon: "sun" },
          { value: "ink", title: "Ink (dark)", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "paper",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? "paper";
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.style.backgroundColor =
          theme === "ink" ? "#191512" : "#fdfcfa";
        document.body.style.webkitFontSmoothing = "antialiased";
        return () => {
          document.documentElement.removeAttribute("data-theme");
          document.documentElement.style.backgroundColor = "";
          document.body.style.webkitFontSmoothing = "";
        };
      }, [theme]);
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
