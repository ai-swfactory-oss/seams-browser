export type BrowserEngine = 'chromium'

export interface BrowserDescription {
  readonly engine: BrowserEngine
}

export interface SeamsBrowser {
  readonly describe: () => BrowserDescription
}

export const createSeamsBrowser = (): SeamsBrowser => ({
  describe: () => ({ engine: 'chromium' }),
})
