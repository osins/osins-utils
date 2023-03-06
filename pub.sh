#!/bin/bash

npx typedoc src/index.ts
npx typedoc --plugin typedoc-plugin-markdown --out docs src/index.ts

npm run z
npm run build
npm run pub

git add .
git commit -m update
git push
