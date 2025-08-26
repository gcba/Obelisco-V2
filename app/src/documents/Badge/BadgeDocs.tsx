import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { BADGE_COLORS, BADGE_TYPES } from './code-views';

const BadgeDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Primarias - Estáticas',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={BADGE_COLORS}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <span className="badge badge-p-default badge-sm">Etiqueta</span>
                <span className="badge badge-p-default">Etiqueta</span>
                <span className="badge badge-p-default badge-lg">Etiqueta</span>
              </div>
              {/* Inicio - Estáticas sm */}
              <div className="grid gap-5 mt-4">
                <span className="badge badge-p-default badge-sm">Etiqueta</span>
                <span className="badge badge-p-sky badge-sm">Etiqueta</span>
                <span className="badge badge-p-green badge-sm">Etiqueta</span>
                <span className="badge badge-p-red badge-sm">Etiqueta</span>
                <span className="badge badge-p-orange badge-sm">Etiqueta</span>
                <span className="badge badge-p-purple badge-sm">Etiqueta</span>
              </div>
              {/* Fin - Estáticas sm */}
              <div className="grid gap-5 mt-4">
                <span className="badge badge-p-default">Etiqueta</span>
                <span className="badge badge-p-sky">Etiqueta</span>
                <span className="badge badge-p-green">Etiqueta</span>
                <span className="badge badge-p-red">Etiqueta</span>
                <span className="badge badge-p-orange">Etiqueta</span>
                <span className="badge badge-p-purple">Etiqueta</span>
              </div>
              <div className="grid gap-5 mt-4">
                <span className="badge badge-p-default badge-lg">Etiqueta</span>
                <span className="badge badge-p-sky badge-lg">Etiqueta</span>
                <span className="badge badge-p-green badge-lg">Etiqueta</span>
                <span className="badge badge-p-red badge-lg">Etiqueta</span>
                <span className="badge badge-p-orange badge-lg">Etiqueta</span>
                <span className="badge badge-p-purple badge-lg">Etiqueta</span>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Primarias - Estáticas - con ícono',
      content: (
        <CodeBox codeHTML={BADGE_COLORS}>
          <div className="row justify-content-center">
            <div className="col-auto">
              {/* Inicio - Estáticas sm */}
              <div className="grid gap-5">
                <span className="badge badge-primary badge-p-default badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-sky badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-green badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-red badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-orange badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-purple badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
              </div>
              {/* Fin - Estáticas sm */}
              <div className="grid gap-5 mt-4">
                <span className="badge badge-p-default">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-sky">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-green">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-red">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-orange">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-purple">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
              </div>
              <div className="grid gap-5 mt-4">
                <span className="badge badge-p-default badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-sky badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-green badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-red badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-orange badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-p-purple badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Primarias - Clickeables',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-default badge-sm">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-p-link-default">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-p-link-default badge-lg">Etiqueta</LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-default">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-p-link-default">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-p-link-default">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-sky">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-p-link-sky">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-p-link-sky">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-green">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-p-link-green">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-p-link-green">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-red">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-p-link-red">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-p-link-red">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-orange">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-p-link-orange">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-p-link-orange">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-purple">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-p-link-purple">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-p-link-purple">Etiqueta</LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Primarias - Clickeables con ícono',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-default badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-p-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-p-link-default badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-p-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-p-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-sky">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-p-link-sky">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-p-link-sky">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-green">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-p-link-green">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-p-link-green">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-red">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-p-link-red">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-p-link-red">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-orange">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-p-link-orange">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-p-link-orange">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-p-link-purple">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-p-link-purple">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-p-link-purple">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Secundarias - Estáticas',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={BADGE_COLORS}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default badge-sm">Etiqueta</span>
                <span className="badge badge-s-default">Etiqueta</span>
                <span className="badge badge-s-default badge-lg">Etiqueta</span>
              </div>
              {/* Inicio - Estáticas sm */}
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default badge-sm">Etiqueta</span>
                <span className="badge badge-s-sky badge-sm">Etiqueta</span>
                <span className="badge badge-s-green badge-sm">Etiqueta</span>
                <span className="badge badge-s-red badge-sm">Etiqueta</span>
                <span className="badge badge-s-orange badge-sm">Etiqueta</span>
                <span className="badge badge-s-purple badge-sm">Etiqueta</span>
              </div>
              {/* Fin - Estáticas sm */}
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default">Etiqueta</span>
                <span className="badge badge-s-sky">Etiqueta</span>
                <span className="badge badge-s-green">Etiqueta</span>
                <span className="badge badge-s-red">Etiqueta</span>
                <span className="badge badge-s-orange">Etiqueta</span>
                <span className="badge badge-s-purple">Etiqueta</span>
              </div>
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default badge-lg">Etiqueta</span>
                <span className="badge badge-s-sky badge-lg">Etiqueta</span>
                <span className="badge badge-s-green badge-lg">Etiqueta</span>
                <span className="badge badge-s-red badge-lg">Etiqueta</span>
                <span className="badge badge-s-orange badge-lg">Etiqueta</span>
                <span className="badge badge-s-purple badge-lg">Etiqueta</span>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Secundarias - Estáticas - con ícono',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={BADGE_COLORS}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-default">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-default badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
              </div>
              {/* Inicio - Estáticas sm */}
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-sky badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-green badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-red badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-orange badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-purple badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
              </div>
              {/* Fin - Estáticas sm */}
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-sky">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-green">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-red">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-orange">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-purple">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
              </div>
              <div className="grid gap-5 mt-4">
                <span className="badge badge-s-default badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-sky badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-green badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-red badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-orange badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
                <span className="badge badge-s-purple badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  Etiqueta
                </span>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Secundarias - Clickeables',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-default badge-sm">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-s-link-default">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-s-link-default badge-lg">Etiqueta</LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-default">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-s-link-default">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-s-link-default">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-sky">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-s-link-sky">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-s-link-sky">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-green">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-s-link-green">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-s-link-green">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-red">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-s-link-red">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-s-link-red">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-orange">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-s-link-orange">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-s-link-orange">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-purple">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-s-link-purple">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-s-link-purple">Etiqueta</LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Secundarias - Clickeables con ícono',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-default badge-sm">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-s-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-s-link-default badge-lg">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-s-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-s-link-default">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-sky">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-s-link-sky">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-s-link-sky">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-green">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-s-link-green">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-s-link-green">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-red">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-s-link-red">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-s-link-red">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-orange">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-s-link-orange">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-s-link-orange">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>

              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-s-link-purple">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge hover badge-s-link-purple">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge focus badge-s-link-purple">
                  <i className="bx bx-grid-alt"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Seleccionables',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-select badge-sm  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-sm hover  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-sm active  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-sm focus  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-sm disabled  ">Etiqueta</LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-select  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select hover  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select active  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select focus  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select disabled  ">Etiqueta</LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-select badge-lg  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-lg hover  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-lg active  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-lg focus  ">Etiqueta</LinkClient>
                <LinkClient className="badge badge-select badge-lg disabled  ">Etiqueta</LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Eliminables',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-remove badge-sm  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove badge-sm hover  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove badge-sm focus  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove badge-sm disabled  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-remove  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove hover  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove focus  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove disabled  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>
              <div className="grid gap-5 mt-4">
                <LinkClient className="badge badge-remove badge-lg  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove badge-lg hover  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove badge-lg focus  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
                <LinkClient className="badge badge-remove badge-lg disabled  ">
                  <i className="bx bx-x"></i>
                  <span>Etiqueta</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Etiquetas"
        description={[
          'Las etiquetas se utilizan para identificar y categorizar la información dentro de una página proporcionando más detalles a los usuarios sobre el contenido que necesitan.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/etiquetas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default BadgeDocs;
