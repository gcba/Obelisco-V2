import Link from "next/link";

import { componentNames } from "./[componentName]/generateStaticParams";

export default function ComponentsPage() {
  return (
    <>
      <div className="access-items-3">
        {componentNames.map((name, index) => (
          <div className="col" key={index}>
            <Link href={`components/${name}`} className="list-group-item item-sm">
              <span className="material-symbols-rounded">
                code_blocks
              </span>
              <div className="access-content">
                <span className="access-title">{name}</span>
                <p className="access-text">Componente</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}