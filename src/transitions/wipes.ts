export type WipeId = 'bloom' | 'scanline' | 'riso' | 'agenda' | 'crt' | 'shatter' | 'stamp' | 'warp'

export const wipes: WipeId[] = ['bloom', 'scanline', 'riso', 'agenda', 'crt', 'shatter', 'stamp', 'warp']

export const wipeNames: Record<WipeId, string> = {
  bloom: 'Radial bloom',
  scanline: 'Scanline slab',
  riso: 'Risograph press',
  agenda: 'Agenda cards',
  crt: 'CRT collapse',
  shatter: 'Prism shatter',
  stamp: 'Rubber stamp',
  warp: 'Warp sweep',
}
