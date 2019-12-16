import Codex from '../routes/Codex/Codex';

export const pagesJSON = [
  /*{
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/privacy-guarantees',
    md: process.env.REACT_APP_MD_SRC + 'codex/privacy-guarantees.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/validating-opencpes',
    md: process.env.REACT_APP_MD_SRC + 'codex/validating-opencpes.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/about-opencpes',
    md: process.env.REACT_APP_MD_SRC + 'codex/about.md',
    render: Codex,
    title: 'About OpenCPEs',
    desc: '',
    tech: false,
    codex: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/faq',
    md: process.env.REACT_APP_MD_SRC + 'codex/faq.md',
    render: Codex,
    title: 'OpenCPEs and centsay FAQ',
    desc:
      'OpenCPEs is a special Blockchain project we are spinning out from Cloud Security Alliance, one of several Blockchain offerings we will be delivering to the cybersecurity industry....',
    tech: false,
    codex: true
  },
  /*{
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/getting-started',
    md: process.env.REACT_APP_MD_SRC + 'codex/getting-started.md',
    render: Codex,
    title: 'Getting Started',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/cpe-providers',
    md: process.env.REACT_APP_MD_SRC + 'codex/cpe-providers.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/certification-providers',
    md: process.env.REACT_APP_MD_SRC + 'codex/certification-providers.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/glossary',
    md: process.env.REACT_APP_MD_SRC + 'codex/glossary.md',
    render: Codex,
    title: 'OpenCPEs Glossary',
    desc:
      'Better understand the terms and language surrounding OpenCPEs by reviewing the OpenCPEs Glossary.',
    tech: true,
    codex: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/source-code',
    md: process.env.REACT_APP_MD_SRC + 'codex/source-code.md',
    render: Codex,
    title: 'Open Source Code and Open Data',
    desc:
      'All the software needed to use OpenCPE is currently available and is licensed under the GPLv3. Binary release builds of the software are also available.',
    tech: true,
    codex: true
  },
  /* {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/technical-details',
    md: process.env.REACT_APP_MD_SRC + 'codex/technical-details.md',
    render: Codex,
    title: '',
    desc: '',

    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/wallet',
    md: process.env.REACT_APP_MD_SRC + 'codex/centsay-wallet.md',
    render: Codex,
    title: 'OpenCPEs centsayWallet Details',
    desc:
      'The OpenCPEs centsayWallet is a mobile client currently available for Apple iOS in beta and in development for Google Android. If you want to be informed when it becomes available, please sign up to our ¢entsay announcement list.',
    tech: true,
    codex: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/client-privacy',
    md: process.env.REACT_APP_MD_SRC + 'codex/client-privacy.md',
    render: Codex,
    title: 'How we Protect Client Privacy',
    desc:
      'Protecting client data is critical. We do not directly store client data. Instead, we only store a hashed value of the client-provided - data after combining, it was a large (2^1024) random nonce. After this hashed value is created, we immediately destroy the client data that was submitted to us. We also have a secure client, the OpenCPEs centsayWallet, in technical beta that takes additional steps to protect client data.',
    tech: true,
    codex: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/protect-our-blockchain',
    md: process.env.REACT_APP_MD_SRC + 'codex/protect-our-blockchain.md',
    render: Codex,
    title: 'How we Protect Our BlockChain',
    desc:
      'OpenCPEs creates a large random value (a “nonce”). Periodically, this nonce is public, and it is added as a prefix to all client submitted data before a hash of this is taken and then entered into the blockchain.',
    tech: true,
    codex: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/faq-blockchain-technology',
    md: process.env.REACT_APP_MD_SRC + 'codex/blockchain-tech.md',
    render: Codex,
    title: 'FAQ - Blockchain Technology',
    desc:
      'We looked at a number of technology options for data storage and distribution, including (but not limited to) SQL databases (including graph databases), NoSQL (key value stores, document stores, object stores, etc.), file storage and distributed caching, to name a few.',
    tech: true,
    codex: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/faq-privacy-safety',
    md: process.env.REACT_APP_MD_SRC + 'codex/privacy-safety.md',
    render: Codex,
    title: 'FAQ - Privacy & Safety',
    desc:
      'We have three main strategies we use to protect your privacy and your data: we don’t store your data, we do not transfer your data to third parties, and a planned future capability is to provide confirmation of records when they are submitted.',
    tech: true,
    codex: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/faq-centsay',
    md: process.env.REACT_APP_MD_SRC + 'codex/centsay.md',
    render: Codex,
    title: 'FAQ - centsay',
    desc:
      'Centsay is the unit of measurement of the Continuing Professional Education (CPE) credits that will be stored in an individual’s OpenCPEs centsayWallet.',
    tech: true,
    codex: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 1000 + 1),
    type: 'codex',
    slug: '/codex/contact',
    md: process.env.REACT_APP_MD_SRC + 'codex/contact.md',
    render: Codex,
    title: 'Contact OpenCPEs',
    desc: '',
    tech: false,
    codex: true
  }
];
