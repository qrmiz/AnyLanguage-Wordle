import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'ą',
  'b',
  'c',
  'd',
  'e',
  'ę',
  'ė',
  'f',
  'g',
  'h',
  'i',
  'į',
  'y',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  'š',
  't',
  'u',
  'ų',
  'ū',
  'v',
  'z',
  'ž',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
