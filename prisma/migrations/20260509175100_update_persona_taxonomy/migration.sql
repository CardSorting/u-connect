-- Normalize legacy persona categories into the LaunchHive persona taxonomy:
-- operator, mentor, subject-matter expert, venture, service provider.
UPDATE "Persona"
SET "personaType" = CASE lower(trim("personaType"))
  WHEN 'advisor' THEN 'mentor'
  WHEN 'executive' THEN 'operator'
  WHEN 'founder' THEN 'venture'
  WHEN 'sme' THEN 'subject-matter expert'
  WHEN 'startup' THEN 'venture'
  WHEN 'student' THEN 'service provider'
  WHEN 'subject matter expert' THEN 'subject-matter expert'
  WHEN 'uncategorized' THEN 'service provider'
  WHEN 'operator' THEN 'operator'
  WHEN 'mentor' THEN 'mentor'
  WHEN 'subject-matter expert' THEN 'subject-matter expert'
  WHEN 'venture' THEN 'venture'
  WHEN 'service provider' THEN 'service provider'
  ELSE "personaType"
END
WHERE lower(trim("personaType")) IN (
  'advisor',
  'executive',
  'founder',
  'sme',
  'startup',
  'student',
  'subject matter expert',
  'uncategorized',
  'operator',
  'mentor',
  'subject-matter expert',
  'venture',
  'service provider'
);