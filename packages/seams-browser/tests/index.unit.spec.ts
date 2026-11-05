import { describe, expect, it } from 'vitest'

import { createSeamsBrowser } from '../src/index'
import { createFakeSeamsBrowser } from '../src/testing/index'

describe('createSeamsBrowser', () => {
  it('describes a Chromium browser', () => {
    expect(createSeamsBrowser().describe()).toEqual({ engine: 'chromium' })
  })
})

describe('createFakeSeamsBrowser', () => {
  it('describes a Chromium browser by default', () => {
    expect(createFakeSeamsBrowser().describe()).toEqual({ engine: 'chromium' })
  })

  it('returns the description it was given', () => {
    const description = { engine: 'chromium' } as const
    expect(createFakeSeamsBrowser(description).describe()).toBe(description)
  })
})
