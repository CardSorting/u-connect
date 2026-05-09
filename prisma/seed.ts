import { PrismaClient } from '../src/generated/client';
import { PERSONA_TYPE, type PersonaType } from '../src/domain/persona/taxonomy';

const prisma = new PrismaClient();

type SeedPersona = {
  id: string;
  name: string;
  personaType: PersonaType;
  title: string;
  organization: string | null;
  background: string;
  goals: string;
  skills: string;
  industries: string;
  stagePreference: string;
  availability: string;
  capacity: number;
  currentLoad: number;
  riskTolerance: string;
  missionInterests: string;
  avatarUrl: string | null;
  profileJson: string | null;
  isHighValue: boolean;
};

const personas: SeedPersona[] = [
  {
    id: 'michael-alvarez',
    name: 'Michael Alvarez',
    personaType: PERSONA_TYPE.OPERATOR,
    title: 'Former COO / Head of Commercial Operations — Digital Health',
    organization: null,
    background: '18+ years in healthcare operations and commercialization. Specialized in provider rollout, reimbursement strategy, and enterprise healthcare scaling. Experienced scaling growth-stage medtech organizations.',
    goals: 'Help healthcare and digital health ventures scale commercialization, provider rollout, reimbursement strategy, and enterprise operations.',
    skills: 'Healthcare operations, commercialization, provider rollout, reimbursement strategy, enterprise healthcare scaling, medtech growth operations',
    industries: 'Digital health, medtech, healthcare operations, diagnostics',
    stagePreference: 'Growth-stage medtech and digital health',
    availability: 'Fractional operator or commercial operations advisor',
    capacity: 5,
    currentLoad: 0,
    riskTolerance: 'Medium',
    missionInterests: 'Healthcare commercialization, provider adoption, reimbursement readiness, enterprise scaling',
    avatarUrl: null,
    profileJson: JSON.stringify({
      experience: [
        { role: 'Chief Operating Officer', organization: 'VitalPath Diagnostics', years: '2021 – 2026' },
        { role: 'VP of Commercial Operations', organization: 'ClearPulse Health', years: '2015 – 2021' },
      ],
    }),
    isHighValue: false,
  },
  {
    id: 'dr.-anita-raman',
    name: 'Dr. Anita Raman',
    personaType: PERSONA_TYPE.MENTOR,
    title: 'Former Medtech CEO & Executive Advisor',
    organization: null,
    background: '25+ years in diagnostics and digital health leadership. Advises executives transitioning into C-suite healthcare leadership roles. Extensive board and commercialization experience.',
    goals: 'Mentor healthcare founders and executives on leadership, board readiness, commercialization decisions, and C-suite operating judgment.',
    skills: 'Executive mentorship, medtech leadership, diagnostics, digital health, board advisory, commercialization strategy',
    industries: 'Diagnostics, digital health, medtech, healthcare leadership',
    stagePreference: 'Seed to growth-stage healthcare ventures',
    availability: 'Mentor',
    capacity: 5,
    currentLoad: 0,
    riskTolerance: 'Medium',
    missionInterests: 'Executive readiness, healthcare leadership, commercialization mentorship, board governance',
    avatarUrl: null,
    profileJson: JSON.stringify({
      experience: [
        { role: 'Chief Executive Officer', organization: 'NeuroAxis Medical', years: '2014 – 2023' },
        { role: 'Board Advisor & Executive Mentor', organization: 'Independent', years: '2023 – Present' },
      ],
    }),
    isHighValue: false,
  },
  {
    id: 'dr.-kevin-liu',
    name: 'Dr. Kevin Liu',
    personaType: PERSONA_TYPE.SUBJECT_MATTER_EXPERT,
    title: 'FDA Regulatory & Clinical AI Specialist',
    organization: null,
    background: 'Expert in AI/ML regulatory pathways and clinical validation. Focused on Software as a Medical Device (SaMD). Strong FDA and clinical evidence generation experience.',
    goals: 'Advise clinical AI and digital health teams on FDA strategy, SaMD pathways, clinical validation, and evidence generation.',
    skills: 'FDA regulatory strategy, AI/ML regulatory pathways, clinical validation, SaMD, clinical evidence generation, healthcare AI',
    industries: 'Clinical AI, digital health, SaMD, medtech, healthcare regulatory',
    stagePreference: 'Prototype to clinical validation',
    availability: 'Subject-matter expert advisory',
    capacity: 5,
    currentLoad: 0,
    riskTolerance: 'Medium',
    missionInterests: 'Safe clinical AI adoption, FDA readiness, evidence-based digital health, medical software validation',
    avatarUrl: null,
    profileJson: JSON.stringify({
      experience: [
        { role: 'Director of Regulatory AI Strategy', organization: 'BioLogic Systems', years: '2020 – Present' },
        { role: 'Clinical Research Scientist', organization: 'Mayo Clinic', years: '2013 – 2020' },
      ],
    }),
    isHighValue: false,
  },
  {
    id: 'rachel-kim',
    name: 'Rachel Kim',
    personaType: PERSONA_TYPE.VENTURE,
    title: 'Healthcare Venture Partner — Early Stage Medtech',
    organization: 'Northstar Health Ventures',
    background: 'Investor focused on digital health and AI diagnostics. Experienced in healthcare infrastructure and commercialization. Former corporate strategy executive.',
    goals: 'Evaluate and support early-stage medtech, digital health, and AI diagnostics ventures with capital strategy, commercialization insight, and healthcare infrastructure perspective.',
    skills: 'Venture investing, digital health, AI diagnostics, healthcare infrastructure, commercialization, corporate strategy',
    industries: 'Digital health, AI diagnostics, medtech, healthcare infrastructure, venture capital',
    stagePreference: 'Early-stage medtech',
    availability: 'Venture partner / investor perspective',
    capacity: 5,
    currentLoad: 0,
    riskTolerance: 'Medium-high',
    missionInterests: 'Digital health scale, AI diagnostics, healthcare infrastructure, early-stage medtech commercialization',
    avatarUrl: null,
    profileJson: JSON.stringify({
      experience: [
        { role: 'Venture Partner', organization: 'Northstar Health Ventures', years: '2021 – Present' },
        { role: 'VP Corporate Strategy', organization: 'Philips', years: '2014 – 2021' },
      ],
    }),
    isHighValue: true,
  },
  {
    id: 'daniel-brooks',
    name: 'Daniel Brooks',
    personaType: PERSONA_TYPE.SERVICE_PROVIDER,
    title: 'Healthcare Regulatory & Compliance Attorney',
    organization: null,
    background: 'Attorney focused on FDA compliance and HIPAA governance. Supports digital health and medtech startups. Experienced in enterprise healthcare agreements.',
    goals: 'Support digital health and medtech ventures with FDA compliance, HIPAA governance, enterprise healthcare agreements, and regulatory risk management.',
    skills: 'FDA compliance, HIPAA governance, healthcare regulatory law, enterprise healthcare agreements, medtech legal support, digital health compliance',
    industries: 'Digital health, medtech, healthcare compliance, FDA regulatory, healthcare law',
    stagePreference: 'Pre-seed to growth-stage healthcare ventures',
    availability: 'Legal and compliance services',
    capacity: 5,
    currentLoad: 0,
    riskTolerance: 'Low',
    missionInterests: 'Responsible digital health deployment, FDA compliance, HIPAA governance, enterprise healthcare contracting',
    avatarUrl: null,
    profileJson: JSON.stringify({
      experience: [
        { role: 'Partner — Digital Health Practice', organization: 'Harper & Lowe LLP', years: '2018 – Present' },
        { role: 'Associate Counsel', organization: 'U.S. Food and Drug Administration', years: '2012 – 2018' },
      ],
    }),
    isHighValue: false,
  },
];

const obsoleteSeedPersonaIds = [
  'dr.-maya-chen',
  'ethan-ramirez',
  'sarah-whitaker',
  'dr.-aaron-patel',
  'jessica-morgan',
  'marcus-lee',
  'cardiosignal-bio',
  'labpilot-ai',
  'forgegrid-systems',
];

async function main() {
  console.log('Seeding personas...');

  for (const persona of personas) {
    const { id, ...data } = persona;

    await prisma.persona.upsert({
      where: { id },
      update: data,
      create: persona,
    });
  }

  await prisma.persona.deleteMany({
    where: {
      id: { in: obsoleteSeedPersonaIds },
      conversations: { none: {} },
      matches: { none: {} },
    },
  });

  console.log('Seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
