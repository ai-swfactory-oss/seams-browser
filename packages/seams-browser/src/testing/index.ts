import type { BrowserDescription, SeamsBrowser } from '../index'

export const createFakeSeamsBrowser = (description: BrowserDescription = { engine: 'chromium' }): SeamsBrowser => ({
  describe: () => description,
})
