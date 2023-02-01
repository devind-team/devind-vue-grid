import { ColumnNameRow, RowNameColumn } from '@/types'

export function getDefaultColumnNameRow(): ColumnNameRow {
  return {
    height: 25,
    font: `700 16px "Roboto",sans-serif`,
    getName: getDefaultColumnName,
  }
}

export function getDefaultColumnName(index: number): string {
  return positionToLetter(index)
}

export function getDefaultRowNameColumn(): RowNameColumn {
  return {
    width: 30,
    font: `700 16px "Roboto",sans-serif`,
    getName: getDefaultRowName,
  }
}

export function getDefaultRowName(index: number): string {
  return String(index)
}

const __CACHE_COLUMN_PL: Record<number, string> = {}

export function positionToLetter(position: number): string {
  if (position in __CACHE_COLUMN_PL) {
    return __CACHE_COLUMN_PL[position]
  }
  const base = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1
  const letterCodes = []
  while (position > 0) {
    let remainder = position % base
    position = Math.floor(position / base)
    if (remainder === 0) {
      remainder = 26
      position -= 1
    }
    letterCodes.push(remainder + 'A'.charCodeAt(0) - 1)
  }
  const result = String.fromCharCode(...letterCodes.reverse())
  __CACHE_COLUMN_PL[position] = result
  return result
}
