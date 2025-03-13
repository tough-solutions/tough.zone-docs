import {SidebarArrayOptions} from "@vuepress/theme-default";

export const brandingSidebar: SidebarArrayOptions = [
  "/branding/README.md",
  {
    text: "Layout / Mailing",
    children: [
      "/branding/BorderRadius.md",
      "/branding/CustomEmails.md",
      "/branding/CustomEmailAddress.md",
    ]
  },
  {
    text: "Colors / Typography",
    children: [
      "/branding/UiColors.md",
      "/branding/Typography.md"
    ]
  },
  {
    text: "Images / Icons",
    children: [
      "/branding/CoverPage.md",
      "/branding/ClientLogo.md",
      "/branding/Icons.md",
      "/branding/StageTiles.md",
      "/branding/CustomReactions.md"
    ]
  },
]
