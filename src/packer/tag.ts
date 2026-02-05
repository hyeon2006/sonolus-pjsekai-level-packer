import type { DatabaseTag, Tag } from '@sonolus/core'
import { localize } from './localize'

export const toTag = (databaseTag: DatabaseTag): Tag => ({
    title: databaseTag.title ? localize(databaseTag.title) : '',
    icon: databaseTag.icon,
})
