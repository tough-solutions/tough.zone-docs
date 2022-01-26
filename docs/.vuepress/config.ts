import {defineUserConfig} from "vuepress"
import type {DefaultThemeOptions} from "vuepress"
import {navbar, sidebar} from "./configs"
import * as path from "path";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: "en-US",
    title: "tough.zone",
    description: "The official documentation for tough.zone",
    head: [
        ["link", {rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32"}],
        ["link", {rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16"}],
        ["link", {rel: "icon", href: "/favicon.ico"}],
        ["link", {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}],
        ["link", {rel: "mask-icon", href: "/mask-icon.svg", color: "#9D174D"}],
    ],
    plugins: [
        "@vuepress/plugin-search",
        // only enable shiki plugin in production mode
        [
            "@vuepress/plugin-shiki",
            isProd
                ? {
                    theme: "dark-plus",
                }
                : false,
        ],
        [
            '@vuepress/plugin-register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
    ],

    // theme and its config
    theme: "@vuepress/theme-default",
    themeConfig: {
        logo: "/images/logo.svg",
        repo: "tough-solutions/tough.zone-docs",
        docsBranch: "master",
        docsDir: "docs",
        smoothScroll: true,
        themePlugins: {
            prismjs: !isProd
        },
        editLinkText: "Edit this page on GitHub",
        navbar,
        sidebar,
    },
})
