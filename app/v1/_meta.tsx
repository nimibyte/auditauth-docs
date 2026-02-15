import type { MetaRecord } from 'nextra'
import { VersionSelector } from '../version-selector'

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  '': {
    type: 'separator',
    title: (
      <VersionSelector />
    )
  },
  index: {
    title: 'Overview',
    type: 'doc',
  },
  status: {
    title: 'Release Status',
    type: 'doc',
  },
  concepts: {
    title: 'Concepts',
    type: 'doc',
  },
}

export default meta
