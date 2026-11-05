import { describe, expect, it } from 'vitest'

import { createSeamsLighthouse } from '../src/index'
import { createFakeSeamsLighthouse } from '../src/testing/index'

describe('createSeamsLighthouse', () => {
  it('reports no categories for the url while the seam is a skeleton', () => {
    expect(createSeamsLighthouse().report('https://example.com')).toEqual({
      url: 'https://example.com',
      categories: [],
    })
  })
})

describe('createFakeSeamsLighthouse', () => {
  it('reports no categories by default', () => {
    expect(createFakeSeamsLighthouse().report('https://example.com')).toEqual({
      url: 'https://example.com',
      categories: [],
    })
  })

  it('reports the categories it was given for the url', () => {
    const categories = [{ id: 'performance', score: 0.9 }]
    expect(createFakeSeamsLighthouse(categories).report('https://example.com')).toEqual({
      url: 'https://example.com',
      categories,
    })
  })
})
