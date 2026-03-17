import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Arham Code Blog',
    description: 'Flutter Development, Clean Architecture, and Software Engineering',
    site: 'https://arhamcode.github.io',
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/en/blog/${post.id}/`,
      categories: post.data.tags
    })),
    customData: `<language>en-us</language>`
  });
}