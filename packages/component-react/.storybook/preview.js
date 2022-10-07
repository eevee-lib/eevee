import '../tailwind.css';

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
