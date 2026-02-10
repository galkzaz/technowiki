import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function QuestionAdmonition(props) {
  return (
    <div style={{color: 'red', padding: 10}}>
      {props.children}
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'question': QuestionAdmonition,
};

export default AdmonitionTypes;
