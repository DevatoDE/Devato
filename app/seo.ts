import { initSeo } from "remix-seo";
export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
	// Pass any SEO defaults for your site here.
	// If individual routes do not provide their own meta and link tags,
	// the tags generated by the defaults will be used.
	title: "Devato | Shopify Development Agentur",
	titleTemplate: "%s | Devato | Shopify Development DACH",
	description: "Devato baut und etwickelt einzigartige Shopify eCommerce Stores. Dabei liegt der Fokus auf technischen Apps, privaten Apps, API Integration und allem rund um Shopify. Wir sind Ihre deutsche Shopify Development Agentur.",
});