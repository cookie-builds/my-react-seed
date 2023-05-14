import React from 'react';
import Helmet from 'react-helmet';

export type Seo = {
  title?: string,
  description?: string,
  keywords?: string,
};

/* TODO: Change standardSeo information */
const standardSeo: Seo = {
  title: 'Standard Title',
  description: 'Standard Description',
  keywords: 'Standard Keywords',
};

const Page = ({ title, seo, children }: { title?: string, seo?: Seo, children?: React.ReactNode }) => {
  return (
    <div>
      <Helmet>
        <title>{title ? `${title} | ${standardSeo.title}` : standardSeo.title}</title>
        <meta name='title' content={seo?.title ? `${title} | ${standardSeo.title}` : standardSeo.title} />
        <meta name='description' content={seo?.description ? seo.description : standardSeo.description} />
        <meta name='keywords' content={seo?.keywords ? seo.keywords : standardSeo.keywords} />
      </Helmet>
      {children}
    </div>
  );
};

export default Page;