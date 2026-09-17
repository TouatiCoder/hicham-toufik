#!/usr/bin/env bash
set -e
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 startOrReload ecosystem.config.cjs
pm2 save