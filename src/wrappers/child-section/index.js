import Example from 'components/example';
import React from 'react';

export default function ChildSection({
  idElement = 'default',
  title = 'Example title section',
  data = [],
}) {
  return (
    <div className={`child-section-${idElement}`}>
      <div className="head">
        <h2>{title}</h2>
      </div>
      <div className="content">
        <Example />
      </div>
    </div>
  );
}
