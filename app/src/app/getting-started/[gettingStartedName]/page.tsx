import ImportsModule from '@/documents/getting-started-module/ImportsModule';
import InstallationModule from '@/documents/getting-started-module/InstallationModule';
import { notFound } from 'next/navigation';

const componentMap: { [key: string]: React.ReactNode } = {
  imports: <ImportsModule />,
  installation: <InstallationModule />,
};

export async function generateStaticParams() {
  const gettingStartedNames = ['imports', 'installation'];

  return gettingStartedNames.map((name) => ({
    gettingStartedName: name,
  }));
}

export default function GettingStartedNamePage({ params }: { params: { gettingStartedName: string } }) {
  const { gettingStartedName } = params;

  const component = componentMap[gettingStartedName];

  if (!component) {
    return notFound(); 
  }

  return <div>{component}</div>;
}
