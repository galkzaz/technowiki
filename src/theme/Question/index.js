import React, { useState } from 'react';
import styles from './styles.module.css';

export function QandA({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const childrenArray = React.Children.toArray(children);
  const question = childrenArray.find(c => c.props?.mdxType === 'Question' || c.type === Question);
  const answer = childrenArray.find(c => c.props?.mdxType === 'Answer' || c.type === Answer);

  return (
    <div className={styles.faqWrapper}>
      <div
        className={styles.faqHeader}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        {/* The Icon */}
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>

        {/* The Question Content */}
        <div className={styles.content}>
          {question}
        </div>
      </div>

      {isOpen && (
        <div className={styles.faqBody}>
          {answer}
        </div>
      )}
    </div>
  );
}

export const Question = ({ children }) => <>{children}</>;
export const Answer = ({ children }) => <>{children}</>;
