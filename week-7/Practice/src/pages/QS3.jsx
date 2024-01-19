import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// Custom React-like implementation
const CustomReact = {
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children,
      },
    };
  },
};

// Function to generate HTML code from React element
function generateHTML(reactElement) {
  const { type, props } = reactElement;
  const children = props.children || [];
  const attributes = Object.keys(props)
    .filter(key => key !== 'children')
    .map(key => `${key}="${props[key]}"`)
    .join(' ');

  const childrenHTML = Array.isArray(children)
    ? children.map(child =>
        typeof child === 'object' ? generateHTML(child) : child
      )
    : [];

  return `<${type} ${attributes}>${childrenHTML.join('')}</${type}>`;
}

// Function to custom render the React-like element
function customRender(reactElement, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (target) {
    target.innerHTML = generateHTML(reactElement);
  } else {
    console.error(`Target element with selector '${targetSelector}' not found.`);
  }
}

export default function QS3() {
  const anchorElement = CustomReact.createElement('a', { href: 'https://google.com' }, 'Click me');

  customRender(anchorElement, '#root');

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <hr />
      <h2>QS3</h2>
      {/* Note: Don't use ReactDOM.createPortal here since it's for the official React library */}
    </div>
  );
}