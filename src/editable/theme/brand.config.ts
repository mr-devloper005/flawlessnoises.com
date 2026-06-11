import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#FF5FCF', surface: '#000000' }
      : productKind === 'editorial'
        ? { primary: '#9929EA', surface: '#FAEB92' }
        : productKind === 'directory'
          ? { primary: '#9929EA', surface: '#FAEB92' }
          : { primary: '#FF5FCF', surface: '#000000' },
} as const
