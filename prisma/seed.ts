import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Tạo missions
  const user = await prisma.user.create({
    data: {
      name: 'Nguyen Van A',
      email: 'vana@example.com',
      emailVerified: new Date(),
      image: 'https://i.pravatar.cc/150?img=3',
    },
  });

  // Tạo account liên kết với missions
  await prisma.account.create({
    data: {
      userId: user.id,
      type: 'oauth',
      provider: 'google',
      providerAccountId: 'google-123456',
      access_token: 'access_token_example',
      refresh_token: 'refresh_token_example',
      expires_at: Math.floor(Date.now() / 1000) + 3600,
      token_type: 'Bearer',
      scope: 'email profile',
      id_token: 'id_token_example',
      session_state: 'session_state_example',
    },
  });

  // Tạo session cho missions
  await prisma.session.create({
    data: {
      userId: user.id,
      sessionToken: 'session_token_example',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 ngày
    },
  });

  // Tạo verification token
  await prisma.verificationToken.create({
    data: {
      identifier: 'verify@example.com',
      token: 'verification_token_example',
      expires: new Date(Date.now() + 15 * 60 * 1000), // 15 phút
    },
  });

  console.log('✅ Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('❌ Error while seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
