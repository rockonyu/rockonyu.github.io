import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    // parses markdown to mdast syntax trees.
    .use(remarkParse)
    // remark plugin to bridge or mutate to rehype.
    .use(remarkRehype)
    // rehype plugin to highlight the syntax of code with lowlight
    .use(rehypeHighlight)
    // 針對 h1 ~ h6 元素加入 id
    .use(rehypeSlug)
    // 針對 h1 ~ h6 元素加入錨點
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      content: {
        type: 'element',
        tagName: 'span',
        children: [{ type: 'text', value: '#' }],
      },
    })
    // rehype plugin to serialize HTML, compiler for unified.
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
