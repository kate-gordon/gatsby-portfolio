module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Kate Gordon", // Navigation and Site Title
  titleAlt: "Kate's Projects", // Title for JSONLD
  description: "A portfolio site for a Brooklyn based developer.",
  headline: "Front End Dev in Brooklyn", // Headline for schema.org JSONLD
  url: "https://www.k8gordon.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "/logos/katelogo.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/katelogo.png", // Used for manifest favicon generation
  shortName: "Prismic", // shortname for manifest. MUST be shorter than 12 characters
  author: "Kate Gordon", // Author for schemaORGJSONLD
  themeColor: "#3D63AE",
  backgroundColor: "#EBEDF2",

  twitter: "@starter_prismicio", // Twitter Username
  facebook: "gatsby-prismic", // Facebook Site Name
  googleAnalyticsID: "UA-47519312-7",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
};
