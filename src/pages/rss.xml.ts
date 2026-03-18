import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Arham Code Blog',
    description: 'Flutter Development, Clean Architecture, and Software Engineering',
    site: 'https://arhamcode.github.io',
    items: sortedPosts.map(post => {
      const [lang, ...slugParts] = post.id.split('/');
      const slug = slugParts.join('/');
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/${lang}/blog/${slug}/`,
        categories: post.data.tags
      };
    }),
    customData: `<language>en-us</language>`
  });
}