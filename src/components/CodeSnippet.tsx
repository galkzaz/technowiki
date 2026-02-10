import React from 'react';
import CodeBlock from '@theme/CodeBlock';

// Assign '400px' as the default value for maxHeight
export default function CodeSnippet({
  code,
  language,
  title,
  maxHeight = '400px'
}) {
  return (
    <div style={{ maxHeight: maxHeight, overflow: 'auto', marginBottom: '1rem' }}>
      <CodeBlock language={language} title={title} showLineNumbers>
        {code}
      </CodeBlock>
    </div>
  );
}
