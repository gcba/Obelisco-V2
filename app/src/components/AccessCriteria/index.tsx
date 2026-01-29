'use client';
import React from 'react';

import criteriaItems from './criteria.json';

interface CriteriaProps {
  list: Array<string>;
}

const AccessCriteria: React.FC<CriteriaProps> = ({ list }) => {
  const filteredCriteria = list.map((listId) => criteriaItems.find(({ id }) => listId === id));

  return filteredCriteria.map((criteria) => (
    <>
      <a className="external" href={criteria?.url} target="_blank" rel="noopener noreferrer">
        {criteria?.caption}
      </a>
      <p>{criteria?.description}</p>
    </>
  ));
};

export default AccessCriteria;
