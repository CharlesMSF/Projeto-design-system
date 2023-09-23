import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import '../src/styles/global.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({
  onUnhandledRequest: 'bypass'
});

export const decorators = [mswDecorator];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;