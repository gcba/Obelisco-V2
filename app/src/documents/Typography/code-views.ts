export const EGcodeTypographyImport = `import { Body, Tag, Title, Quote, List, Transformation } from "@componentes/Typography";`;

export const EGCodeTitle = `<Title level="h1" content='Título h1 bold' weight="bold" />
<Title level="h1" content="Título h1 semibold" weight="semibold" />
<Title level="h1" content="Título h1 normal" weight="normal" />
`;

export const EGCodeTag = `<Tag size="lg" weight='normal' content='Esto es un texto de titulares' />
<Tag size="lg" weight='semibold' content='Esto es un texto de titulares' />
<Tag size="lg" weight='bold' content='Esto es un texto de titulares' />
<Tag size="lg" weight='normal' italic='italic' content='Esto es un texto de titulares' />
<Tag size="lg" weight='normal' underline='underline' content='Esto es un texto de titulares' />
`;

export const EGCodeBody = `<Body size="lg" weight='normal' content='Esto es un texto de cuerpos' />
<Body size="lg" weight='semibold' content='Esto es un texto de cuerpos' />
<Body size="lg" weight='bold' content='Esto es un texto de cuerpos' />
<Body size="lg" weight='normal' italic='italic' content='Esto es un texto de cuerpos' />
<Body size="lg" weight='normal' underline='underline' content='Esto es un texto de cuerpos' />
`;

export const EGCodeQuote = `<Quote content='Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.' /> 
`;

export const EGCodeQuoteAuthor = `<Quote content='Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.' author='Nombre del autor de la cita' />`

export const EGCodeList = `<List list="ol" content={["Texto de una lista ordenada", "Texto de una lista ordenada", "Texto de una lista ordenada"]}/>
<List list="ul" content={["Texto de una lista sin ordenar", "Texto de una lista sin ordenar", "Texto de una lista sin ordenar"]}/>`

export const EGCodeTransform = `<Transformation transform='strong' content='estándares' />
<Transformation transform='em' content='conjunto de herramientas' />
<Transformation transform='em' content='accesibles' />
<Transformation transform='mark' content='servicios' />
<Transformation transform='sup' content='es' />
<Transformation transform='sub' content='al' />
<Transformation transform='kbd' content='s' />
`