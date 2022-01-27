import { SidebarConfig } from "@vuepress/theme-default"

export const sidebar: SidebarConfig = {
    "/branding/": [
        {
            text: "Branding",
            children: [
                "/branding/README.md",
                "/branding/CoverPage.md",
                "/branding/ClientLogo.md",
                "/branding/UiColors.md",
            ]
        },
    ],
    "/general/": [
        {
            text: "General information",
            children: [
                "/general/README.md"
            ]
        }
    ]
};
