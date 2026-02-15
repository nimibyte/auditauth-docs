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
  introduction: {
    title: 'Introduction',
    type: 'doc',
  },
  architecture: {
    title: 'Architecture',
    type: 'doc',
  },
  integration: {
    title: 'Integration',
    type: 'doc',
  },
  security: {
    title: 'Security & Trust Model',
    type: 'doc',
  },
  observability: {
    title: 'Observability',
    type: 'doc',
  },
  plans: {
    title: 'Plans & Enforcement',
    type: 'doc',
  },
  'api-reference': {
    title: 'API Reference (Advanced)',
    type: 'doc',
  }
}

export default meta
