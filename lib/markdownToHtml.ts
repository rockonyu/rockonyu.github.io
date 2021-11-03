import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    // parses markdown to mdast syntax trees.
    .use(remarkParse)
    // remark plugin to bridge or mutate to rehype.
    .use(remarkRehype)
    // rehype plugin to highlight the syntax of code with lowlight
    .use(rehypeHighlight)
    // rehype plugin to serialize HTML, compiler for unified.
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
