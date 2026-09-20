export type WipeId = 'bloom' | 'scanline' | 'riso' | 'agenda' | 'crt' | 'shatter'

export const wipes: WipeId[] = ['bloom', 'scanline', 'riso', 'agenda', 'crt', 'shatter']

export const wipeNames: Record<WipeId, string> = {
  bloom: 'Radial bloom',
  scanline: 'Scanline slab',
  riso: 'Risograph press',
  agenda: 'Agenda cards',
  crt: 'CRT collapse',
  shatter: 'Prism shatter',
}
