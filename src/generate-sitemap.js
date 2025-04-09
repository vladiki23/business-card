// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.drone-pilot.co.uk/' });

const pages = [
    '/',
    '/about',
    '/drone-services',
    '/drone-services/drone-filming',
    '/drone-services/commercial-drone-services',
    '/drone-services/drone-survey',
    '/drone-services/real-estate-drone-photography',
    '/editing',
    '/faq',
    '/contact'
];

const writeStream = createWriteStream('./public/sitemap.xml');

pages.forEach((url) => sitemap.write({ url }));

sitemap.end();
streamToPromise(sitemap).then(() => {
    console.log('✅ Sitemap generated!');
});
