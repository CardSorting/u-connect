import { prisma } from '@/src/infrastructure/db/prisma';

export async function auditLog({
  actorId,
  action,
  resourceType,
  resourceId,
  metadata,
}: {
  actorId: string;
  action: string;
  resourceType: string;
  resourceId?: string;
  metadata?: any;
}) {
  try {
    await prisma.auditLog.create({
      data: {
        actorId,
        action,
        resourceType,
        resourceId,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });
  } catch (error) {
    console.error('Failed to write audit log:', error);
  }
}
