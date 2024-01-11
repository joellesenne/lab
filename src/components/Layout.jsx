import { LayoutStyled } from './styles/Layout.Styled';

import { site } from '../portfolio';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return <LayoutStyled>
    <Header titleUrl={site.titleUrl} heading={site.heading} baseUrl={site.baseUrl} />
    {children}
    <Footer siteName={site.siteName} siteUrl={site.siteUrl} />
  </LayoutStyled>
}
