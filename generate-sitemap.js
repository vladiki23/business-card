// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

(async () => {
    const sitemap = new SitemapStream({ hostname: 'https://www.drone-pilot.co.uk' });

    const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));
    sitemap.pipe(writeStream);

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

    pages.forEach((url) => {
        sitemap.write({ url });
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log('✅ Sitemap создан: public/sitemap.xml');
})();

