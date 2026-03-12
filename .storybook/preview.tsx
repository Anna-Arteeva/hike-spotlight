import type { Preview } from "@storybook/react";
import { ThemeProvider } from "next-themes";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <div className="min-h-screen w-full bg-background text-foreground p-6">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
