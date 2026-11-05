import type { AuditCategory, SeamsLighthouse } from '../index'

export const createFakeSeamsLighthouse = (categories: readonly AuditCategory[] = []): SeamsLighthouse => ({
  report: url => ({ url, categories }),
})
