import { SidebarOptions } from "@vuepress/theme-default"
import {brandingSidebar} from "../../branding/configs/sidebar";
import {generalSidebar} from "../../general/configs/sidebar";
import {technicalSidebar} from "../../technical/configs/sidebar";

export const sidebar: SidebarOptions = {
    "/branding/": brandingSidebar,
    "/general/": generalSidebar,
    "/technical/": technicalSidebar,
};
