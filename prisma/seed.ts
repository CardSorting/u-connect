import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding personas...');

  const personas = [
    {
      name: 'Dr. Maya Chen',
      personaType: 'operator',
      title: 'Former Medtech Executive',
      background: 'Former medtech commercialization executive with experience taking diagnostics products through FDA pathways, building early go-to-market teams, and advising university spinouts.',
      goals: 'Interested in advisory or fractional COO roles with biotech or life sciences startups.',
      skills: 'Regulatory strategy, commercialization, FDA pathways, go-to-market, partnerships, executive leadership',
      industries: 'Biotech, diagnostics, medtech, life sciences',
      stagePreference: 'Idea to pre-seed',
      availability: 'Advisory or fractional',
      riskTolerance: 'Medium',
      missionInterests: 'Healthcare access, university research translation, diagnostics',
      avatarUrl: '/avatars/maya.png',
    },
    {
      name: 'Ethan Ramirez',
      personaType: 'student',
      title: 'AI Student Intern',
      background: 'University student studying computer science with experience in Python, machine learning projects, data pipelines, and hackathon prototypes.',
      goals: 'Looking for internship or part-time technical work with AI startups or research spinouts.',
      skills: 'Python, ML prototyping, data analysis, frontend basics, model evaluation',
      industries: 'AI, software, research tools',
      stagePreference: 'Any early-stage startup',
      availability: 'Part-time internship',
      riskTolerance: 'High',
      missionInterests: 'AI tools, education, research acceleration',
      avatarUrl: '/avatars/ethan.png',
    },
    {
      name: 'Sarah Whitaker',
      personaType: 'operator',
      title: 'Operations Leader',
      background: 'Operations leader with experience scaling manufacturing and logistics teams from 10 to 80 employees. Has worked with hardware, advanced manufacturing, and energy companies.',
      goals: 'Looking for fractional COO or operations advisor work with deep-tech startups preparing to scale.',
      skills: 'Operations, hiring systems, vendor management, manufacturing process, finance operations, scaling',
      industries: 'Advanced manufacturing, energy, hardware',
      stagePreference: 'Seed to Series A',
      availability: 'Fractional',
      riskTolerance: 'Medium',
      missionInterests: 'Manufacturing resilience, energy transition, Utah job creation',
      avatarUrl: '/avatars/sarah.png',
    },
    {
      name: 'Dr. Aaron Patel',
      personaType: 'founder',
      title: 'University Researcher',
      background: 'University researcher developing advanced materials technology with potential applications in aerospace and defense. Has technical validation but limited business experience.',
      goals: 'Needs commercialization help, operator guidance, and possibly a fractional business lead.',
      skills: 'Advanced materials, research leadership, grant writing, technical validation',
      industries: 'Advanced materials, aerospace, defense',
      stagePreference: 'Research spinout / idea stage',
      availability: 'Founder',
      riskTolerance: 'Medium-low',
      missionInterests: 'Defense innovation, materials science, university tech transfer',
      avatarUrl: '/avatars/aaron.png',
    },
    {
      name: 'Jessica Morgan',
      personaType: 'advisor',
      title: 'B2B SaaS Sales Leader',
      background: 'Former B2B SaaS sales leader with experience building first sales motions, customer discovery, and enterprise pilot programs.',
      goals: 'Interested in mentoring or advising Utah startups that need customer discovery and early sales help.',
      skills: 'Sales strategy, enterprise GTM, customer discovery, pipeline development, pricing, positioning',
      industries: 'Software, AI, fintech, cyber',
      stagePreference: 'Pre-seed to seed',
      availability: 'Advisor / mentor',
      riskTolerance: 'Medium-high',
      missionInterests: 'Helping technical founders learn sales',
      avatarUrl: '/avatars/jessica.png',
    },
    {
      name: 'Marcus Lee',
      personaType: 'operator',
      title: 'Cybersecurity Product Leader',
      background: 'Former cybersecurity product leader with experience in federal customers, compliance-heavy sales, and technical product strategy.',
      goals: 'Looking for advisory, board, or fractional product leadership opportunities with cybersecurity or defense startups.',
      skills: 'Cybersecurity, product strategy, federal GTM, compliance, enterprise sales',
      industries: 'Cybersecurity, defense, software',
      stagePreference: 'Seed to growth',
      availability: 'Advisory or fractional',
      riskTolerance: 'Medium',
      missionInterests: 'National security, cyber resilience, enterprise security',
      avatarUrl: '/avatars/marcus.png',
    },
    // Startup Opportunities
    {
      name: 'CardioSignal Bio',
      personaType: 'startup',
      title: 'UofU Biotech Spinout',
      background: 'University of Utah biotech spinout developing diagnostic tools for early cardiovascular risk detection.',
      goals: 'Needs commercialization advisor, regulatory strategy, fractional operator',
      skills: 'Biotech, diagnostics, regulatory',
      industries: 'Biotech / diagnostics',
      stagePreference: 'Pre-seed',
      availability: 'Open',
      riskTolerance: 'N/A',
      missionInterests: 'University of Utah',
      avatarUrl: null,
    },
    {
      name: 'LabPilot AI',
      personaType: 'startup',
      title: 'BYU AI Research Tool',
      background: 'BYU research spinout building AI workflow tools for academic labs and research teams.',
      goals: 'Needs ML intern, technical prototype support, early user research',
      skills: 'AI, machine learning, research software',
      industries: 'AI / research software',
      stagePreference: 'Idea to pre-seed',
      availability: 'Open',
      riskTolerance: 'N/A',
      missionInterests: 'BYU',
      avatarUrl: null,
    },
    {
      name: 'ForgeGrid Systems',
      personaType: 'startup',
      title: 'USU Advanced Manufacturing Startup',
      background: 'Utah State University-linked advanced manufacturing startup building hardware-enabled workflow systems for regional manufacturers.',
      goals: 'Needs fractional COO, operations leader, manufacturing advisor',
      skills: 'Advanced manufacturing, operations, hardware',
      industries: 'Advanced manufacturing',
      stagePreference: 'Seed',
      availability: 'Open',
      riskTolerance: 'N/A',
      missionInterests: 'Utah State University',
      avatarUrl: null,
    },
  ];

  for (const p of personas) {
    await prisma.persona.upsert({
      where: { id: p.name.toLowerCase().replace(/\s+/g, '-') }, // Simplified ID for seeding
      update: {
        avatarUrl: p.avatarUrl,
      },
      create: {
        id: p.name.toLowerCase().replace(/\s+/g, '-'),
        ...p,
      },
    });
  }

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
