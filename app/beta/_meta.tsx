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
    title: 'Introduction',
    type: 'doc',
  },
  architecture: {
    title: 'Architecture',
    type: 'doc',
  },
  identity: {
    title: 'Identity',
    type: 'doc',
  },
  governance: {
    title: 'Governance & Audit',
    type: 'doc'
  },
  observability: {
    title: 'Observability',
    type: 'doc'
  },
  experience: {
    title: 'User Experience Layer',
    type: 'doc'
  },
  integration: {
    title: 'Integration',
    type: 'doc'
  },
  billing: {
    title: 'Billing & Application State',
    type: 'doc'
  },
}

export default meta
