import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const QS4 = () => {
  const [wordCount, setWordCount] = useState('');
  const [generatedParagraph, setGeneratedParagraph] = useState('No paragraph available');

  const generateParagraph = () => {
    if (isNaN(wordCount) || wordCount <= 0) {
      alert('Please enter a valid number greater than 0.');
      return;
    }

    const words = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing",
        "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore",
        "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam",
        "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut",
        "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure",
        "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum",
        "dolore", "eu", "fugiat", "nulla", "pariatur", "Excepteur", "sint",
        "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui",
        "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
    ];

    let paragraph = '';
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + ' ';
    }

    setGeneratedParagraph(paragraph.trim());
  };

  return (
    <>
      <Link to="/">Go to Home</Link>
      <hr />
    <div style={{ textAlign: 'center', padding: '20px', background: '#f0f8ff' }}>
      <input
        type="number"
        id="wordCountInput"
        min="1"
        placeholder="Enter the number of words"
        value={wordCount}
        onChange={(e) => setWordCount(parseInt(e.target.value, 10))}
        style={{ padding: '10px', marginRight: '10px', fontSize: '16px' }}
      />
      <button
        onClick={generateParagraph}
        style={{
          padding: '12px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Generate Paragraph
      </button>

      <p
        style={{
          marginTop: '20px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
          color: 'black',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        {generatedParagraph}
      </p>
    </div>
  </>
  );
};

export default QS4;
