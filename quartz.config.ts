import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Liam Aycock",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "liamaycock.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "IBM Plex Sans",
        header: "IBM Plex Sans",
        body:   "IBM Plex Sans",
        code:   "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eceff4",       // Snow Storm (Background)
          lightgray: "#e5e9f0",   // Snow Storm (Borders/Search bar)
          gray: "#4c566a",        // Polar Night (Subtitles/Dates)
          darkgray: "#2e3440",    // Polar Night (Main Body Text)
          dark: "#3b4252",        // Polar Night (Headers)
          secondary: "#5e81ac",   // Frost (Links/Folder Icons)
          tertiary: "#88c0d0",    // Frost (Hover states)
          highlight: "rgba(136, 192, 208, 0.15)", // Frost (Text Highlight)
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#2e3440",       // nord0: polar night (background)
          lightgray: "#3b4252",   // nord1: polar night (borders/search)
          gray: "#434c5e",        // nord2: polar night (graph links)
          darkgray: "#d8dee9",    // nord4: snow storm (body text)
          dark: "#eceff4",        // nord6: snow storm (headings)
          secondary: "#81a1c1",   // nord9: frost (links/titles)
          tertiary: "#88c0d0",    // nord8: frost (hover states)
          highlight: "rgba(136, 192, 208, 0.15)", // nord8: frost (translucent)
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
