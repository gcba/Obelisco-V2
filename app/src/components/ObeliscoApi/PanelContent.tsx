'use client'
import React, { useEffect, useState } from 'react'



interface TabButton {
  title: string;
}

// interface PanelContent {
//   children: React.ReactNode;
// }

interface ItemPanelContent {
  id: string | number;
  button: TabButton;
  panelContent: React.ReactNode
}

interface PanelContentProps {
  data: ItemPanelContent[];
}

export default function PanelContent({ data }: PanelContentProps) {



  // Evitar que React detecte un "mismatch" entre lo que el SSR (server-side rendering) generó y lo que el cliente tiene tras hidratar.

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // evita el render en SSR
  return (
    <>
      <nav className="tabs-box" aria-label="Navegación por pestañas">
        <ul className="nav nav-pills tabs nav-box" id="icon-myTab" role="tablist">

          {
            data.map((i, index) => (
              <li className="nav-item" role="presentation" key={i.id}>
                <button
                  className={`nav-link  ${index === 0 ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#panel-bg-content-${i.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`panel-bg-content-${i.id}`}
                  aria-selected={index === 0 ? 'true' : 'false'}
                  id={`tab-bg-${i.id}`}
                >
                  <div className="nav-icon">
                    <span>{i.button.title}</span>
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">description</span>
                  </div>
                </button>
              </li>
            ))
          }

        </ul>
      </nav>

      <div className="tab-content" id="icon-myTabContent" style={{ outline: 'rgb(230, 235, 240) solid 0.125rem', outlineOffset: '-0.125rem', borderRadius: '0px 0.75rem 0.75rem', padding: '1rem' }}>
        {/* TAB CONTENT */}
        {
          data.map((i, index) => (

            <div
              key={i.id}
              className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
              id={`panel-bg-content-${i.id}`}
              role="tabpanel"
              aria-labelledby={`tab-bg-${i.id}`}
            >
              {i.panelContent}
            </div>

          ))
        }
        {/* TAB CONTENT */}
      </div>
    </>

  )
}
