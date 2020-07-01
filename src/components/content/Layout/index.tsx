import React, { FunctionComponent, useState } from 'react';
import { Helmet } from 'react-helmet';

import favicon from 'src/images/favicon.png';
import Header from 'src/components/navigation/Header';
import MobileMenu from 'src/components/navigation/MobileMenu';
import DesktopMenu from 'src/components/navigation/DesktopMenu';
import Breadcrumbs from 'src/components/navigation/Breadcrumbs';
import Footer from 'src/components/navigation/Footer';

import { LayoutProps } from 'src/interfaces';
import PageTitle from '../PageTitle';

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  pageTitle,
  seoTitle = '',
  breadcrumbsData
}) => {
  const [isMenuOpen, OpenMenu] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="GenerixCare is an independent home care service provider for the elderly operating across Cambridgeshire, Bedfordshire and Hertfordshire"
        />
        <meta name="author" content="" />
        <meta
          name="keywords"
          content="Homecare agencies, Generixcare, Homecare, Elderly care, Senior care, home health
    aid, Live-in-Care, Personal Care, Respite care, Social Care, Geriatric, Disabled, Dementia, Alzheimer,
    Companionship, Disability, Respite care, CQC, Housekeeping, Generix"
        />
        <meta name="robots" content="index, follow, archive" />
        <meta name="googlebot" content="index, follow, archive" />
        <meta name="slurp" content="index, follow, archive" />
        <meta name="msnbot" content="index, follow, archive" />

        <title>{seoTitle} | Generix Care Website</title>

        <link rel="shortcut icon" href={favicon} type="image/x-icon" />

        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header OpenMenu={() => OpenMenu(true)} />
      <MobileMenu OpenMenu={() => OpenMenu(false)} isMenuOpen={isMenuOpen} />
      <DesktopMenu />
      {pageTitle && <PageTitle title={pageTitle} />}
      {breadcrumbsData?.length ? <Breadcrumbs data={breadcrumbsData} /> : null}
      <div className="container light-container pt-5 pb-10">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
