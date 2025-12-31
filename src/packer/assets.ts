import type { Database } from '@sonolus/core'
import _db from '../pack/db.json'

export const db = _db as Database

export const getRepository = async () => {
    const modules = import.meta.glob('../pack/repository/*', {
        query: '?arraybuffer',
        import: 'default',
        eager: false,
    })

    const entries = await Promise.all(
        Object.entries(modules).map(async ([path, loader]) => {
            const buffer = await loader()
            return {
                filename: path.slice(path.lastIndexOf('/') + 1),
                buffer: buffer as ArrayBuffer,
            }
        }),
    )

    return entries
}

export const getEnginePlayData = async () =>
    (await import('sonolus-next-rush-plus-engine/EnginePlayData?arraybuffer')).default
export const getEngineWatchData = async () =>
    (await import('sonolus-next-rush-plus-engine/EngineWatchData?arraybuffer')).default
export const getEnginePreviewData = async () =>
    (await import('sonolus-next-rush-plus-engine/EnginePreviewData?arraybuffer')).default
export const getEngineTutorialData = async () =>
    (await import('sonolus-next-rush-plus-engine/EngineTutorialData?arraybuffer')).default
export const getEngineConfigurationData = async () =>
    (await import('sonolus-next-rush-plus-engine/EngineConfiguration?arraybuffer')).default
export const getEngineRomData = async () =>
    (await import('sonolus-next-rush-plus-engine/EngineRom?arraybuffer')).default
export const getEngineThumbnailData = async () =>
    (await import('sonolus-next-rush-plus-engine/EngineThumbnail?arraybuffer')).default
