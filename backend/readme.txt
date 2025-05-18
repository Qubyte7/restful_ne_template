initialize ts config ::===> tsc -init
install ts-node types ::==> pnpm add typescript tsx ts-node @types/express @types/node --save-dev

prisma setting up
------------------
pnpm add prisma --save-dev
prisma client ::===> pnpm add @prisma/client
prisma ORM initialisation :: ===> pnpm prisma init --datasource-provider postgresql --output ../generated/prisma
prisma migration ::===>  pnpm prisma migrate dev --name init