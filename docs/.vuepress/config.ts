import {defineUserConfig} from "vuepress"
import {navbar, sidebar} from "./configs"
import * as path from "path";
import viteBundler from "@vuepress/bundler-vite";
import {defaultTheme} from "@vuepress/theme-default";
import {searchPlugin} from "@vuepress/plugin-search";
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import {shikiPlugin} from "@vuepress/plugin-shiki";

export default defineUserConfig({
    // site config
    lang: "en-US",
    title: "tough.zone Documentation",
    description: "The official documentation for tough.zone",
    head: [
        ["link", {rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32"}],
        ["link", {rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16"}],
        ["link", {rel: "icon", href: "/favicon.ico"}],
        ["link", {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}],
        ["link", {rel: "mask-icon", href: "/mask-icon.svg", color: "#9D174D"}],
    ],
    plugins: [
        searchPlugin(),
        shikiPlugin({
            theme: "dark-plus",
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],

    // theme and its config
    theme: defaultTheme({
        contributors: false,
        logo: "/images/logo.svg",
        repo: "tough-solutions/tough.zone-docs",
        docsBranch: "master",
        docsDir: "docs",
        editLinkText: "Edit this page on GitHub",
        navbar,
        sidebar,
    }),

    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
})
