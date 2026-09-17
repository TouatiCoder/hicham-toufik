# Hicham Toufik

منصة عربية تحريرية وأرشيف معرفي لـ **هشام توفيق**.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Prisma ORM + PostgreSQL
- PM2 + Nginx للإنتاج

## بدون Docker

المشروع لا يحتاج Docker. على Hostinger VPS:

1. ثبّت Node.js LTS وPostgreSQL وPM2 وNginx.
2. أنشئ قاعدة بيانات PostgreSQL.
3. انسخ `.env.production.example` إلى `.env` وضع بيانات قاعدة البيانات وAdmin.
4. ثبّت الحزم: `npm ci`
5. ولّد Prisma: `npx prisma generate`
6. طبّق migrations: `npx prisma migrate deploy`
7. ابنِ التطبيق: `npm run build`
8. شغّل عبر PM2: `pm2 start ecosystem.config.cjs`
9. اربط Nginx بالمنفذ 3000 ثم فعّل SSL عبر Certbot.

## Development

`npm install`
`npx prisma generate`
`npx prisma db push`
`npm run dev`

لا ترفع `.env` إلى GitHub.