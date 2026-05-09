import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().default('file:../data/launchhive.db'),
  SESSION_SECRET: z.string().default('local-dev-secret-keep-it-secret-keep-it-safe'),
  HERMES_API_BASE_URL: z.string().url().default('http://127.0.0.1:8642/v1'),
  HERMES_API_KEY: z.string().default('local-dev-key'),
  HERMES_MODEL: z.string().default('hermes-agent'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const env = envSchema.parse(process.env);

export function validateEnv() {
  try {
    envSchema.parse(process.env);
    console.info('✅ Environment variables validated');
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Invalid environment variables:', error.format());
      process.exit(1);
    }
  }
}
