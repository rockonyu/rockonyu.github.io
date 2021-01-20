import markdownStyles from './markdown-styles.module.css';
import { useEffect } from 'react';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
