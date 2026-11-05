export interface AuditCategory {
  readonly id: string
  readonly score: number
}

export interface AuditReport {
  readonly url: string
  readonly categories: readonly AuditCategory[]
}

export interface SeamsLighthouse {
  readonly report: (url: string) => AuditReport
}

export const createSeamsLighthouse = (): SeamsLighthouse => ({
  report: url => ({ url, categories: [] }),
})
