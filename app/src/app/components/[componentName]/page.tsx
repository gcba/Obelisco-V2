import AlertDocs from "@/documents/Alert/AlertDocs";
import BadgeDocs from "@/documents/Badge/BadgeDocs";
import BannerDocs from "@/documents/Banner/BannerDocs";
import BlockDocs from "@/documents/Block/BlockDocs";
import BreadcrumbDocs from '@/documents/Breadcrumb/BreadcrumbDocs';
import ButtonDocs from "@/documents/Button/ButtonDocs";
import CalendarDocs from "@/documents/Calendar/CalendarDocs";
import CardDocs from "@/documents/Card/CardDocs";
import CollapseDocs from "@/documents/Collapse/CollapseDocs";
import ColorsDocs from "@/documents/Colors/ColorsDocs";
import DropdownNavDocs from "@/documents/DropdownNav/DropdownNavDocs";
import DropdownSelDocs from '@/documents/DropdownSel/DropdownSelDocs';
import FormTextDocs from '@/documents/Form-text/FormText';
import FormSelectionDocs from '@/documents/FormSelection/FormSelectionDocs';
import GalleryDocs from "@/documents/Gallery/GalleryDocs";
import GridDocs from "@/documents/Grid/GridDocs";
import HighlightedDocs from "@/documents/Highlighted/HighlightedDocs";
import LinkDocs from "@/documents/Link/LinkDocs";
import MapDocs from "@/documents/Map/MapDocs";
import ModalDocs from "@/documents/Modal/ModalDocs";
import NavHorizontalDocs from "@/documents/NavHorizontal/NavHorizontalDocs";
import NavVerticalDocs from "@/documents/NavVertical/NavVerticalDocs";
import PaginationDocs from '@/documents/Pagination/PaginationDocs';
import ProgressBarDocs from '@/documents/ProgressBar/ProgressBarDocs';
import SpinnerDocs from "@/documents/Spinner/SpinnerDocs";
import StatusMessageDocs from "@/documents/StatusMessage/StatusMessageDocs";
import SwitchDocs from "@/documents/Switch/SwitchDocs";
import TableDocs from "@/documents/Table/TableDocs";
import TabsDocs from "@/documents/Tabs/TabsDocs";
import TooltipDocs from "@/documents/Tooltip/TooltipDocs";
import TypographyDocs from "@/documents/Typography/TypographyDocs";
import { notFound } from "next/navigation";

// davis: se mapean las url con componentes
const componentMap: { [key: string]: React.ReactNode } = {
  alert: <AlertDocs />,
  badge: <BadgeDocs />,
  banner: <BannerDocs />,
  block: <BlockDocs />,
  button: <ButtonDocs />,
  cards: <CardDocs />,
  collapse: <CollapseDocs />,
  colors: <ColorsDocs />,
  link: <LinkDocs />,
  modal: <ModalDocs />,
  "nav-horizontal": <NavHorizontalDocs />,
  "nav-vertical": <NavVerticalDocs />,
  "status-message": <StatusMessageDocs />,
  switch: <SwitchDocs />,
  tabs: <TabsDocs />,
  tooltip: <TooltipDocs />,
  typography: <TypographyDocs />,
  'dropdown-nav': <DropdownNavDocs />,
  'dropdown-sel': <DropdownSelDocs />,
  grid: <GridDocs />,
  spinner: <SpinnerDocs />,
  breadcrumb: <BreadcrumbDocs />,
  'form-text': <FormTextDocs />,
  'form-selection': <FormSelectionDocs />,
  'map': <MapDocs />,
  'gallery': <GalleryDocs />,
  'pagination': <PaginationDocs />,
  'calendar': <CalendarDocs />,
  'progress-bar': <ProgressBarDocs />,
  highlighted: <HighlightedDocs />,
  table: <TableDocs />,
};

export default function ComponentPage({ params }: { params: { componentName: string } }) {
  const { componentName } = params;

  const component = componentMap[componentName];

  if (!component) {
    notFound(); // davis: reemplazar estio por componente notfound
  }

  return (
    <div>
      {/* <h1>{componentName} Component</h1> */}
      {component}
    </div>
  );
}

/*  
  davis: esta page hace uso de componentMap, el cual asigna a cada ruta generada y pre renderizada de "generateStaticParams.ts" un componentDocuments, 
  de manera que cada ruta tendra su documentacion de componente asignada correctamente.
*/
