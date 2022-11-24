import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { addDecorator } from "@storybook/react";
import '../tailwind.css';

// Initialize MSW
initialize();
export const decorators = [mswDecorator];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

addDecorator((stories) => (
  <QueryClientProvider client={queryClient}>
    {stories()}
  </QueryClientProvider>
));

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    darkMode: {
        classTarget: 'body',
        stylePreview: true,
        // 自定义黑暗模式
        // dark: { ...themes.dark, appBg: 'black' },
        // light: { ...themes.normal, appBg: 'red' }
    }
}
