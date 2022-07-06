import React from 'react';
import './styles.css';

function DataResults({data}) {
  return (
    <div>
      {data.map((obj) => (
        <div>
          <p><strong>Member:</strong> {obj.member} </p>
          <p><strong>Type:</strong> {obj.influencerType} </p>
          <p><strong>Category:</strong> {obj.indicationCategory} </p>
          <p><strong>Affiliation:</strong> {obj.affiliation}</p>
          <p><strong>Title:</strong> {obj.affiliationPosition}</p>
          <p><strong>State:</strong> {obj.primaryState}</p>
          <p><strong>Priority:</strong> <span className={obj.priority}> {obj.priority}</span></p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default DataResults;
