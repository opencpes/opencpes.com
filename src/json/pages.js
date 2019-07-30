import DefaultPage from '../routes/DefaultPage';

export const pagesJSON = [
  {
    slug: '/privacy-guarantees',
    md: process.env.REACT_APP_MD_SRC + 'pages/privacy-guarantees.md',
    render: DefaultPage
  },
  {
    slug: '/validating-opencpes',
    md: process.env.REACT_APP_MD_SRC + 'pages/validating-opencpes.md',
    render: DefaultPage
  },
  {
    slug: '/getting-started',
    md: process.env.REACT_APP_MD_SRC + 'pages/getting-started.md',
    render: DefaultPage
  },
  {
    slug: '/cpe-providers',
    md: process.env.REACT_APP_MD_SRC + 'pages/cpe-providers.md',
    render: DefaultPage
  },
  {
    slug: '/certification-providers',
    md: process.env.REACT_APP_MD_SRC + 'pages/certification-providers.md',
    render: DefaultPage
  },
  {
    slug: '/faq',
    md: process.env.REACT_APP_MD_SRC + 'pages/faq.md',
    render: DefaultPage
  },
  {
    slug: '/codex/source-code',
    md: process.env.REACT_APP_MD_SRC + 'codex/source-code.md',
    render: DefaultPage
  },
  {
    slug: '/codex/technical-details',
    md: process.env.REACT_APP_MD_SRC + 'codex/technical-details.md',
    render: DefaultPage
  },
  {
    slug: '/codex/centsi-wallet-details',
    md: process.env.REACT_APP_MD_SRC + 'codex/centsi-wallet.md',
    render: DefaultPage
  },
  {
    slug: '/codex/client-privacy',
    md: process.env.REACT_APP_MD_SRC + 'codex/client-privacy.md',
    render: DefaultPage
  }
];
