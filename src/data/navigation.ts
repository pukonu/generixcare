import { NavItems } from 'src/interfaces';

const about: NavItems[] = [
  { title: 'About Us', slug: '/about' },
  { title: 'Our Values', slug: '/about/our-values' }
];

const services: NavItems[] = [
  { title: 'Adult Care', slug: '/services/care-support-for-adults' },
  { title: 'Child Care', slug: '/services/care-support-for-children' },
  { title: 'Areas We Cover', slug: '/services/areas-we-cover' }
];

const howWeWork: NavItems[] = [
  { title: 'Assessments', slug: '/how-we-work/assessments' },
  { title: 'Care planning', slug: '/how-we-work/care-planning' },
  { title: 'Placing your carer', slug: '/how-we-work/placing-your-carer' },
  { title: 'Funding your care', slug: '/how-we-work/funding-your-care' }
];

const qualityAssurance: NavItems[] = [
  { title: 'Regulation and Recruitment', slug: '/quality-assurance/regulations-and-recruitment' },
  { title: 'Workforce Development', slug: '/quality-assurance/workforce-development' },
  { title: 'Monitoring Feedback', slug: '/quality-assurance/monitoring-and-feedback' },
  { title: 'Partnership', slug: '/quality-assurance/partnership' }
];

export const navigation: NavItems[] = [
  { title: 'Home', slug: '/', showInFooter: true },
  { title: 'About', slug: '/about', showInFooter: true, children: about },
  { title: 'Services', slug: '/services', showInFooter: true, children: services },
  { title: 'How We Work', slug: null, children: howWeWork },
  { title: 'Quality Assurance', slug: null, children: qualityAssurance },
  { title: 'Contacts Us', slug: '/contact', showInFooter: true }
];
