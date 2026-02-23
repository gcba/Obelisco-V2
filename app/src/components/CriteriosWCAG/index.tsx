'use client';
import React from 'react';

import criteriaItems from './criterios.json';

interface CriteriaProps {
  list: Array<string>; // uno pasa una lista de ids, porque siempre hay +1 criterio
}

const CriteriosWCAG: React.FC<CriteriaProps> = ({ list }) => {
  const filteredCriteria = list.map((listId) => criteriaItems.find(({ id }) => listId === id)); // te devuelveun array con los ids encontrados

  return filteredCriteria.map((criteria) => (
    <>
      {/* el enlace es opcional */}
      <a className="external" href={criteria?.url} target="_blank" rel="noopener noreferrer">
        {criteria?.title}
      </a>
      {/* la descripcion tmb es opcional, a veces no va y a veces va en un componente una descripcion, y en otro, otra o mas corta */}
      <p dangerouslySetInnerHTML={{ __html: criteria?.description || '' }}></p>{' '}
      {/* es para  renderizar los <i></i> y <strong></strong>, sino, no se ven */}
    </>
  ));
};

export default CriteriosWCAG;
