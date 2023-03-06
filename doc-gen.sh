#!/bin/bash

npx typedoc --plugin typedoc-plugin-markdown --out docs src/index.ts && \
git add . && \
git commit -m update && \
git push