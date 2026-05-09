import { deleteSession } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function POST() {
  await deleteSession();
  return NextResponse.json({ success: true });
}
