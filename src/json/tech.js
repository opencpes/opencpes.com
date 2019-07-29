export const techJSON = [
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    creator: 'Cloud Security Alliance',
    logo: false,
    slug: 'pla-code-of-practice-template-annex-1',
    type: 'whitepaper',
    title: 'PLA Code of Practice Template Annex 1',
    desc:
      'CSA PLA Code of Conduct for GDPR Compliance provides a consistent and comprehensive framework for complying with the EU’s GDPR. The CSA PLA Code of Conduct for GDPR Compliance is designed to be an appendix to a Cloud Services Agreement to describe the level of privacy protection that a Cloud Service Provider will provide.',
    artifact:
      process.env.REACT_APP_ARTIFACT_SRC +
      '2019_06_04_CoC_GDPR_Annex_1_Compliance_Assessment_Template_V3.2.xlsx',
    md:
      process.env.REACT_APP_MD_SRC + 'PLA-Code-of-Practice-Template-Annex-1.md'
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    creator: 'Cloud Security Alliance',
    logo: false,
    slug: 'pla-code-of-conduct-coc-statement-of-adherence-self-assessment',
    type: 'whitepaper',
    title: 'PLA Code of Conduct (CoC): Statement of Adherence Self-Assessment',
    desc:
      'CSA PLA Code of Conduct for GDPR Compliance provides a consistent and comprehensive framework for complying with the EU’s GDPR. The CSA PLA Code of Conduct for GDPR Compliance is designed to be an appendix to a Cloud Services Agreement to describe the level of privacy protection that a Cloud Service Provider will provide.',
    artifact:
      process.env.REACT_APP_ARTIFACT_SRC +
      'PLA-CoC_Statement-of-Adherence__Self-Assessment.pdf',
    md:
      process.env.REACT_APP_MD_SRC +
      'PLA-Code-of-Conduct-CoC-Statement-of-Adherence-Self-Assessment.md'
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    creator: 'Cloud Security Alliance',
    logo: false,
    slug:
      'pla-code-of-conduct-coc-statement-of-adherence-3rd-party-certification',
    type: 'whitepaper',
    title:
      'Code of Conduct (CoC): Statement of Adherence 3rd Party Certification',
    desc:
      'CSA PLA Code of Conduct for GDPR Compliance provides a consistent and comprehensive framework for complying with the EU’s GDPR. The CSA PLA Code of Conduct for GDPR Compliance is designed to be an appendix to a Cloud Services Agreement to describe the level of privacy protection that a Cloud Service Provider will provide.',
    artifact:
      process.env.REACT_APP_ARTIFACT_SRC +
      'CoC_GDPR_Annex_2b_Statement_of_Adherance_PLA_CoC_Certification_Template.pdf',
    md:
      process.env.REACT_APP_MD_SRC +
      'Code-of-Conduct-CoC-Statement-of-Adherence-3rd-Party-Certification.md'
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    creator: 'McAfee',
    logo: false,
    slug: 'beyond-the-general-data-protection-regulation-gdpr',
    type: 'Survey Report',
    title: 'Beyond the General Data Protection Regulation (GDPR)',
    desc:
      'Data residency insights from around the world. This study reveals the top data protection concerns and strategies of more than 800 senior business professionals from eight countries and a range of industries. Beyond the European Union’s General Data Protection Regulation (GDPR) and other regulatory developments, enterprises think data privacy can create competitive advantage. What drives their decisions and investments in data management? Do they place their faith in cloud providers? Are they prepared to meet regulatory mandates and exceed customer expectations?',
    artifact:
      process.env.REACT_APP_ARTIFACT_SRC +
      'Beyond-the-General-Data-Protection-Regulation_-_McAfee.pdf',
    md:
      process.env.REACT_APP_MD_SRC +
      'Beyond-the-General-Data-Protection-Regulation-GDPR.md'
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    creator: 'Cloud Security Alliance',
    logo: false,
    slug: 'eu-general-data-protection-regulation-impact',
    type: 'Article',
    title: 'EU General Data Protection Regulation: Impact',
    desc:
      'This article	focuses	primarily	on	the	obligations	faced	by	companies	whose	principal	business	establishment	is located	outside	the	European	Union	(EU) and	the	European	Economic	Area	(EEA).',
    artifact:
      process.env.REACT_APP_ARTIFACT_SRC +
      'EU_GDPR_Impact_for_Businesses-Established_Outside_the_EU_and_EEA.pdf',
    md:
      process.env.REACT_APP_MD_SRC +
      'EU-General-Data-Protection-Regulation-Impact.md'
  }
];
