'use client';
import React from 'react';

import criteriaItems from './criterios.json';

interface CustomDescription {
  customId: string;
  customDescripcion: string;
}

interface CriteriaProps {
  list: Array<string>; // uno pasa una lista de ids, porque siempre hay +1 criterio
  customItem?: CustomDescription[];
}
// list es un el array de objetos del json
// customItem = [{}, {}]
const CriteriosWCAG: React.FC<CriteriaProps> = ({ list, customItem }) => {
  const filteredCriteria = list.map((listId) => criteriaItems.find(({ id }) => listId === id)); // te devuelve un array con los ids encontrados

  return (
    <>
      {filteredCriteria.map((criteria) => {
        // Buscar si hay una versión custom para este criterio
        const customVersion = customItem?.find((c) => c.customId === criteria?.id);

        return (
          <React.Fragment key={criteria?.id}>
            {/* el enlace es opcional */}
            {criteria?.url && (
              <a className="external" href={criteria.url} target="_blank" rel="noopener noreferrer">
                {criteria?.title}
              </a>
            )}

            {/* si hay una descripcion custom, la renderiza, sino el que viene del .json */}
            {customVersion ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: customVersion.customDescripcion,
                }}
              />
            ) : (
              criteria?.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: criteria.description,
                  }}
                />
              )
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CriteriosWCAG;
