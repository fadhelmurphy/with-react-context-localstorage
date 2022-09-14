import React from 'react';

function SectionItemList({ title, propName, data }) {
  return (
    <p>
      <span className="title">{`${title}: `}</span>
      {
        data.map((item, index, arr) => (
          <span className="capitalize" key={item[propName].name}>
            {`${item[propName].name}${(arr.length - 1) === index ? '' : ', '}`}
          </span>
        ))
      }
    </p>
  );
}

export default SectionItemList;