import { convertToLevelData } from 'sonolus-next-rush-plus-engine'
import type { PackLevelData } from '.'
import type { LevelData } from '@sonolus/core'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    const buffer = await chart.arrayBuffer()
    const data = new Uint8Array(buffer)

    if (data.length >= 2 && data[0] === 0x1f && data[1] === 0x8b) {
        return { type: 'raw', data: buffer }
    }

    const isBinary = data.subarray(0, 4096).some((b) => b === 0)

    let levelData: LevelData
    if (isBinary) {
        levelData = convertToLevelData(data, offset)
    } else {
        const text = new TextDecoder().decode(data)
        levelData = convertToLevelData(text, offset)
    }

    return { type: 'json', data: levelData }
}