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
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/about-opencpes',
    md: process.env.REACT_APP_MD_SRC + 'codex/about.md',
    render: Codex,
    title: 'About OpenCPEs',
    desc: '',
    tech: false
  },
  /*{
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/getting-started',
    md: process.env.REACT_APP_MD_SRC + 'codex/getting-started.md',
    render: Codex,
    title: 'Getting Started',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/cpe-providers',
    md: process.env.REACT_APP_MD_SRC + 'codex/cpe-providers.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/certification-providers',
    md: process.env.REACT_APP_MD_SRC + 'codex/certification-providers.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/faq',
    md: process.env.REACT_APP_MD_SRC + 'codex/faq.md',
    render: Codex,
    title: 'FAQ',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/glossary',
    md: process.env.REACT_APP_MD_SRC + 'codex/glossary.md',
    render: Codex,
    title: 'OpenCPEs Glossary',
    desc:
      'Better understand the terms and language surrounding OpenCPEs by reviewing the OpenCPEs Glossary.',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/source-code',
    md: process.env.REACT_APP_MD_SRC + 'codex/source-code.md',
    render: Codex,
    title: 'OpenCPEs is Open Source Code and Open Data',
    desc:
      'All the software needed to use OpenCPE is currently available, and is licensed under the GPLv3. Binary release builds of the software are also available...',
    tech: true
  },
  /* {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/technical-details',
    md: process.env.REACT_APP_MD_SRC + 'codex/technical-details.md',
    render: Codex,
    title: '',
    desc: '',

    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/wallet',
    md: process.env.REACT_APP_MD_SRC + 'codex/centsi-wallet.md',
    render: Codex,
    title: 'OpenCPEs Wallet Details',
    desc:
      'The OpenCPEs Wallet is a mobile client, currently available for Apple iOS in beta and in development for Google Android. If you want to be informed when it becomes available please signup to our ¢entsi announcement list',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/client-privacy',
    md: process.env.REACT_APP_MD_SRC + 'codex/client-privacy.md',
    render: Codex,
    title: 'How we Protect Client Privacy',
    desc:
      'In order to protect the client data from simple brute force attacks against the hash value the client provides, we have the client system create a random value (a secret “nonce”) that is 1024 bits in length, and then take a 512 bit hash of the original data plus the secret nonce... ',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/protect-our-blockchain',
    md: process.env.REACT_APP_MD_SRC + 'codex/protect-our-blockchain.md',
    render: Codex,
    title: 'How we Protect Our BlockChain',
    desc:
      'in theory, all client data sent to OpenCPEs is hashed with a large secret nonce and is effectively random data, random data is safe to write to a blockchain and make public, right?... ',
    tech: true
  }
];
