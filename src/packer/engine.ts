import { databaseEngineItem } from 'sonolus-next-rush-plus-engine'
import type { PackEngine } from '.'
import {
    getEngineConfigurationData,
    getEnginePlayData,
    getEnginePreviewData,
    getEngineRomData,
    getEngineThumbnailData,
    getEngineTutorialData,
    getEngineWatchData,
} from './assets'

export const packEngine: PackEngine = async () => {
    const playData = await getEnginePlayData()
    const watchData = await getEngineWatchData()
    const previewData = await getEnginePreviewData()
    const tutorialData = await getEngineTutorialData()
    const configurationData = await getEngineConfigurationData()
    const thumbnailData = await getEngineThumbnailData()
    const romData = await getEngineRomData()
    return {
        item: {
            ...databaseEngineItem,
            tags: [],
        },
        resources: {
            playData: { type: 'raw', data: playData },
            thumbnail: { type: 'raw', data: thumbnailData },
            watchData: { type: 'raw', data: watchData },
            previewData: { type: 'raw', data: previewData },
            tutorialData: { type: 'raw', data: tutorialData },
            configuration: { type: 'raw', data: configurationData },
            rom: { type: 'raw', data: romData },
        },
    }
}
