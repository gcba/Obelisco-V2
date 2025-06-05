
export const basePathAPI = 'http://localhost:3000/api';

export interface Link {
  id: string | number;
  name: string;
  url: string;
}

export interface SocialMedia {
  id: string | number;
  name: string;
  url: string;
  icon: string;
}

export interface Phone {
  id: string | number;
  name: string;
  number: string;
}

export interface Image {
  id: string | number;
  url: string;
}

export interface FooterData {
  links: Link[];
  socialMedia: SocialMedia[];
  phones: Phone[];
  images: Image[];
}


export const EXAMPLES_IMPLEMENTATION = {
  react: 'react',
  angular: 'angular',
}

