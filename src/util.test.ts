import '@testing-library/jest-dom/extend-expect'
import { importFromCdn } from './util'

const cdnUrl = 'https://cdn.embedly.com/widgets/platform.js'

describe('importFromCdn', () => {
  beforeAll(() => {
    importFromCdn(cdnUrl).then()
  })

  it('should create script element which has CDN URL', () => {
    expect(document.querySelector(`script[src="${cdnUrl}"`)).toBeInTheDocument()
  })
})
