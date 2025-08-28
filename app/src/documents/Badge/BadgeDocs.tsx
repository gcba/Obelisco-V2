import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
const basePath = '/Obelisco-V2';

import { BADGE_ACCESSIBLITY, BADGE_ACCESSIBLITY_2, BADGE_COLORS, BADGE_TYPES } from './code-views';

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

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Cuando el contenido pertenezca a múltiples categorías o necesite diferenciarse. Sirven para clasificar
                información o destacarla en modo solo lectura.
              </li>
              <li>Para filtrar información y mostrar varias etiquetas.</li>
              <li>
                Cuando la etiqueta es interactiva y se utiliza para agrupar contenido relacionado, como categorías o
                filtros.
              </li>
            </ul>
          </div>

          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Como llamada a la acción para redirigir a la persona usuaria a una nueva página, en ese caso utiliza el
                componente <a href="https://gcba.github.io/Obelisco-V2/components/button">Botón</a>
              </li>
              <li>
                Evitá usar las etiquetas estáticas e interactivas en una misma página ya que puede generar errores no
                forzados.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Tipos de etiquetas',
      content: (
        <>
          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            {/* estatica */}
            <div className="col pe-3">
              <p className="text-xl">Estática</p>
              <p className="text-md">
                Se utilizan para proporcionar información o identificación de un elemento a través de una palabra clave
                estática.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-estatica.svg`}
                alt="Etiqueta estatica"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* estatica */}

            {/* Clickeable */}
            <div className="col pe-3">
              <p className="text-xl">Clickeable</p>
              <p className="text-md">
                Se utiliza para redirigir a la persona usuaria a otra página con contenido relacionado a la etiqueta.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-clickeable.svg`}
                alt="Etiqueta clickeable"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Clickeable */}

            {/* Seleccionable */}
            <div className="col pe-3">
              <p className="text-xl">Seleccionable</p>
              <p className="text-md">Se utiliza para filtrar información relacionada en una misma página. </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-seleccionable.svg`}
                alt="Etiqueta Seleccionable"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Seleccionable */}

            {/* Eliminable */}
            <div className="col pe-3">
              <p className="text-xl">Eliminable</p>
              <p className="text-md">
                Se utiliza en <a href="https://gcba.github.io/Obelisco-V2/components/form-search">campos de búsqueda</a>{' '}
                para filtrar y borrar la opción seleccionada.{' '}
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-eliminable.svg`}
                alt="Etiqueta Eliminable"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Eliminable */}
          </div>
        </>
      ),
    },
    {
      title: 'Tamaños',
      content: (
        <>
          <p className="text-md mb-4">
            Existen 3 tamaños de etiquetas: pequeñas <i>(small)</i>, medianas <i>(medium)</i> y grandes <i>(large)</i>.
            Según el contexto de uso en la interfaz corresponde el tamaño de la etiqueta.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-tamaños.svg`}
            alt="Tamaños de etiquetas"
            width="728"
            height="148"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Ancho máximo',
      content: (
        <>
          <p className="text-md mb-4">
            Todos los tipos de etiquetas tienen configurado un ancho máximo para asegurar el correcto comportamiento con
            textos que ocupan más de 3 palabras. Los textos que excedan los 240px de ancho pasan a formar una segunda
            línea de texto.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-ancho-maximo.svg`}
            alt="Ancho máximo de etiquetas y comportamiento"
            width="728"
            height="148"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Apariencia',
      content: (
        <>
          <p className="text-md">
            Las etiquetas adoptan estilos predefinidos según su función. Cada tipo aplica un set de variables de color
            específicas que garantizan consistencia visual y una comunicación clara del contenido.
          </p>

          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Valor
                  </th>
                  <th scope="col" className="tb-text">
                    Propósito
                  </th>
                  <th scope="col" className="tb-text">
                    Color asociado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="badge badge-p-default">Primario</span>
                  </td>
                  <td>Información sin énfasis.</td>
                  <td>Gris claro</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-sky">Información</span>
                  </td>
                  <td>Datos informativos o aclaratorios.</td>
                  <td>Azul</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-green">Éxito</span>
                  </td>
                  <td>Para casos aprobados, completos, exitosos, finalizados.</td>
                  <td>Verde</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-orange">Advertencia</span>
                  </td>
                  <td>Para casos que requieren atención, también para casos en pausa o rechazados.</td>
                  <td>Amarillo</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-red">Peligro</span>
                  </td>
                  <td>Para casos de error, no completados, eliminados.</td>
                  <td>Rojo</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-purple">Destacado</span>
                  </td>
                  <td>Promoción, novedad, énfasis visual.</td>
                  <td>Violeta / color destacado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Jerarquías',
      content: (
        <>
          <p className="text-md">
            Las etiquetas estáticas y clickeables tienen dos niveles de jerarquía según el énfasis necesario para
            resaltar el elemento.
          </p>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            {/* Primaria */}
            <div className="col pe-3">
              <p className="text-xl">Primaria</p>
              <p className="text-md">
                La jerarquía primaria se utiliza para destacar un elemento, propiedad o concepto del conjunto total de
                etiquetas.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-primaria.svg`}
                alt="Etiqueta Primaria"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Primaria */}

            {/* Secundaria */}
            <div className="col pe-3">
              <p className="text-xl">Secundaria</p>
              <p className="text-md">
                La jerarquía secundaria se usa con mayor frecuencia cuando hay tres o más etiquetas en línea para
                categorizar la información de un elemento.{' '}
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-secundaria.svg`}
                alt="Etiqueta Secundaria"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Secundaria */}

            {/* Unica */}
            <div className="col pe-3">
              <p className="text-xl">Unica</p>
              <p className="text-md">
                Tanto las etiquetas seleccionables como eliminables tienen una jerarquía visual única para no entorpecer
                la decisión del usuario por el color.{' '}
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-Unica.svg`}
                alt="Etiqueta Unica"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Unica */}
          </div>

          {/* ejemplos de uso */}
          <p className="text-xl">Ejemplos de uso</p>
        </>
      ),
    },
    {
      title: 'Uso de íconos',
      content: (
        <>
          <p className="text-md mb-4">
            Los íconos son opcionales y pueden utilizarse para reforzar el significado o mejorar la identificación
            visual de la información. Se recomienda usarlos únicamente cuando aporten valor semántico o mejoren la
            comprensión, evitando sobrecargar el componente.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-iconos.svg`}
            alt="Tamaños de etiquetas"
            width="728"
            height="148"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className="text-md mb-4">
            Se alinean siempre a la izquierda para mantener un orden de lectura natural. Suelen usarse al comienzo de un
            artículo para mostrar una categoría principal, o al final como &quot;Etiquetas relacionadas&quot;, ayudando
            a clasificar y contextualizar el contenido.
          </p>
          <div className="max-items-2">
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-disposicion_buen_uso.svg`}
                alt="Ejemplo de uso de cómo sí usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">
                  Las etiquetas se alinean a la izquierda para facilitar la lectura y la accesibilidad.
                </p>
              </div>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-disposicion_mal_uso.svg`}
                alt="Ejemplo de uso de cómo no usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">check</span>
                <p className="mb-0">Alinearlas a la derecha interrumpe la lectura y dificulta su identificación.</p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Contexto de uso',
      content: (
        <>
          <p className="text-xl mb-4">
            Para resaltar un estado, tipo o modalidad de contenido que no requiere acción del usuario.
          </p>
          <p className="text-md">
            Se pueden utilizar para mostrar información complementaria o clasificar contenido de manera visual, sin
            interacción. Por ejemplo, en una ficha de trámite puede indicar si es Presencial o En línea.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-xl mb-4">Para agrupar o categorizar contenido </p>
          <p className="text-md">
            Se pueden utilizar en listados, tarjetas o secciones donde el contenido puede organizarse por temas o
            categorías, permitiéndole al usuario filtrar, navegar o descubrir información relacionada de forma rápida.
            Suelen resumir el contenido de la página.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso-1.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-xl mb-4">Para búsquedas filtradas por temas específicos</p>
          <p className="text-md">
            Para filtrar información sobre temas relacionados a través de un campo de búsqueda. Permite eliminar las
            etiquetas seleccionadas para volver atrás con la filtración por esa categoría.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso-2.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-xl mb-4">Para filtrar contenido en una misma página</p>
          <p className="text-md">
            Las etiquetas de filtro activas se utilizan para indicar que un criterio de filtrado está aplicado. Al
            interactuar con la etiqueta, el filtro se activa o desactiva produciendo que la interfaz actualice de manera
            inmediata.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso-3.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <p className="text-xl mb-4">Texto en las etiquetas</p>
          <p className="text-md">
            Las etiquetas deben ser breves, claras y estar redactadas siguiendo pautas de escritura. Evitá que el texto
            se corte en varias líneas: lo ideal es que no superen los 20 caracteres.
          </p>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <Image
            src={`${basePath}/images/etiqueta/badge-anatomia.svg`}
            alt="Anatomia de la etiqueta"
            width="800"
            height="280"
            className="img-fluid"
          />

          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Elemento
                  </th>
                  <th scope="col" className="tb-text">
                    Carácter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Contenedor</td>
                  <td>Obligatorio, deben estar dentro de un contenedor que asegure su alineación y espaciado.</td>
                </tr>
                <tr>
                  <td>2. Texto etiqueta</td>
                  <td>Obligatorio, indica el nombre de la etiqueta.</td>
                </tr>
                <tr>
                  <td>3. Botón cancelar</td>
                  <td>Opcional, indica que la etiqueta puede ser eliminada.</td>
                </tr>
                <tr>
                  <td>4. Ícono</td>
                  <td>Opcional, puede utilizarse un ícono para reforzar la información.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Estados',
      content: <></>,
    },
    {
      subtitle: (
        <>
          Predeterminado <i>(default)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">Estado predeterminado de la etiqueta en una interfaz. </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-default.svg`}
            alt="Estado predeterminado del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Sobre <i>(hover)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Estado que adopta la etiqueta cuando un cursor pasa sobre él, cambiando su apariencia para indicar su
            interactividad a la persona usuaria. Este estado se encuentra habilitado en las etiquetas clickeable,
            seleccionable y eliminable.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-hover.svg`}
            alt="Estado sobre del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En foco <i>(focus)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo <i>(focus ring)</i> por fuera del componente en un color distintivo.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-focus.svg`}
            alt="Estado en foco del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Deshabilitado <i>(disabled)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Es un estado para informar que la etiqueta está deshabilitada y no permite la interacción. Este estado se
            encuentra habilitado en las etiquetas clickeable, seleccionable y eliminable.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-disabled.svg`}
            alt="Estado deshabilitado del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      firstTitle: true,
      content: (
        <>
          <p className="text-md" style={{ marginBottom: '32px' }}>
            El componente de etiquetas está construido para ser accesible mediante navegación por teclado y reconocible
            por lectores de pantalla, comunicando su estado (activado o desactivado) de forma clara.
          </p>
          <span className="badge badge-p-default">TAB</span>
          <p className="text-md mb-4">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-accesibilidad.svg`}
            alt="Navegacion alternativa de la etiqueta"
            width="738"
            height="400"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md">
            Para las etiquetas estáticas usá el elemento <code>{'<span>'}</code> y deshabilitá los estados hover,
            on-click y focus.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BADGE_ACCESSIBLITY}
          </SyntaxHighlighter>
          <p className="text-md">
            Para las etiquetas interactivas usá el elemento <code>{'<a>'}</code> para que la etiqueta funcione como un
            enlace que permita explorar contenido relacionado (por temática, categoría, etc.). Si la etiqueta redirige,
            el atributo href debe ser válido y apuntar al destino correcto.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BADGE_ACCESSIBLITY_2}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A)
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA)
          </a>
          <p>
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA)
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible. Cuando utiliza un teclado para navegar por los componentes, los enlaces tienen un
            subrayado visible y un recuadro outline que indica que los enlaces son interactivos.
          </p>
        </>
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
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />{' '}
    </>
  );
};

export default BadgeDocs;
