import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Cómo usar el editor',
    content: (
      <div className="ps-1">
        <ul className="list-steps list-steps-numbers mb-5">
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Obtené el HTML necesario</h3>
            <p>
              Copiá el HTML que necesites ver en el editor. Podés obtenerlo directamente desde las pestañas de
              componentes del editor.
            </p>
          </li>
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Usá el editor en línea</h3>
          </li>
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Editá y verificá en tiempo real</h3>
            <p>
              Vas a poder visualizar los componentes en el panel derecho y todos los cambios que realices en el código
              impactarán en tiempo real.
            </p>
          </li>
        </ul>
        <a
          className="btn btn-primary btn-lg"
          href="https://gcba.github.io/obelisco-editor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir el editor
          <span className="material-symbols-rounded o-icon" aria-label="hidden">
            open_in_new
          </span>
        </a>
      </div>
    ),
  },
];

const EditorModule: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Editor de código"
        description={[
          'Utilizá nuestro editor para explorar e interactuar con los componentes de Obelisco en tiempo real. Vas a poder probar funcionalidades y copiar el código para su uso en tus proyectos. ',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="editor" noScrollButton={true} />
    </>
  );
};

export default EditorModule;
