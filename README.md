# seams-browser

Seams for browser automation (Playwright Chromium) and Lighthouse: typed SDKs that put a seam between your code and the browser, each with a fake under `./testing`.

This repository holds only the guarded skeleton so far: `createSeamsBrowser` returns a seam that describes its engine, `createSeamsLighthouse` returns a seam whose report lists no categories, and each package's `./testing` holds a fake of its seam.

## Packages

- `@ai-swfactory-oss/seams-browser`: the browser automation seam (Playwright Chromium).
- `@ai-swfactory-oss/seams-lighthouse`: the Lighthouse audit seam.

## Licence

MIT
