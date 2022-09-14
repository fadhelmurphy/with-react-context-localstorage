import React from 'react';

function SectionItem({ title, data }) {
  return (
    <p>
      <span className="title capitalize">{`${title}: `}</span>
      <span>{data}</span>
    </p>
  );
}

export default SectionItem;