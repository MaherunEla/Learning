import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({ data: { name: "Sally" } });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
