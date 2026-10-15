export interface Cue {
  start: number
  end: number
  text: string
}

function parseTimestamp(str?: string): number {
  if (!str) return -1
  const parts = str.replace(',', '.').trim().split(':')
  if (parts.length === 3) return parseFloat(parts[0]) * 3600 + parseFloat(parts[1]) * 60 + parseFloat(parts[2])
  if (parts.length === 2) return parseFloat(parts[0]) * 60 + parseFloat(parts[1])
  return -1
}

/** SRT + WebVTT parser. */
export function parseSubtitleText(content: string): Cue[] {
  if (!content) return []
  const cues: Cue[] = []
  const blocks = content.replace(/\r\n?/g, '\n').split(/\n\s*\n/)
  for (const block of blocks) {
    const lines = block.trim().split('\n')
    const at = lines.findIndex((l) => l.includes('-->'))
    if (at < 0) continue
    const [a, b] = lines[at].split('-->').map((s) => s.trim().split(' ')[0])
    const start = parseTimestamp(a)
    const end = parseTimestamp(b)
    if (start < 0 || end <= start) continue
    const text = lines
      .slice(at + 1)
      .join('\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\{\\[^}]*\}/g, '')
      .replace(/&nbsp;/g, ' ')
      .trim()
    if (text) cues.push({ start, end, text })
  }
  return cues
}

export function findActiveCue(cues: Cue[], time: number, offset = 0): string | null {
  const t = time + offset
  for (const c of cues) if (t >= c.start && t <= c.end) return c.text
  return null
}
