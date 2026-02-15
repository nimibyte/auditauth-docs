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
    title: 'Mierda de doc',
    type: 'doc',
    theme: {
      footer: false,
    }
  },
  concepts: {
    title: 'Concepts',
    type: 'doc',
  },
  howto: {
    title: 'how to',
    type: 'doc',
  },
}

export default meta
