export type WipeId = 'bloom' | 'scanline' | 'riso' | 'agenda' | 'crt' | 'shatter' | 'stamp' | 'warp' | 'lull' | 'iron'

export const wipes: WipeId[] = ['bloom', 'scanline', 'riso', 'agenda', 'crt', 'shatter', 'stamp', 'warp', 'lull', 'iron']

export const wipeNames: Record<WipeId, string> = {
  bloom: 'Radial bloom',
  scanline: 'Scanline slab',
  riso: 'Risograph press',
  agenda: 'Agenda cards',
  crt: 'CRT collapse',
  shatter: 'Prism shatter',
  stamp: 'Rubber stamp',
  warp: 'Warp sweep',
  lull: 'Soft sheet drop',
  iron: 'Iron rack',
}
