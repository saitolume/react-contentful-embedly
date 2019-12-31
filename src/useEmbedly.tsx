import * as React from 'react'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { importFromCdn } from './util'

export type EmbedlyAttributes = {
  via?: string
  chrome?: '0' | '1'
  theme?: 'light' | 'black'
  image?: string
  embed?: string
  controls?: '0' | '1'
  width?: string
  align?: 'left' | 'center' | 'right'
  recommend?: '0' | '1'
  key?: string
}

export const useEmbedly = (
  {
    via,
    chrome,
    theme,
    image,
    embed,
    controls,
    width,
    align,
    recommend,
    key
  }: EmbedlyAttributes = {
    via: undefined,
    chrome: '1',
    theme: 'light',
    image: undefined,
    embed: undefined,
    controls: '1',
    width: undefined,
    align: 'center',
    recommend: '1',
    key: undefined
  }
): Options => {
  React.useEffect(() => {
    importFromCdn('https://cdn.embedly.com/widgets/platform.js').then()
  })

  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => {
        const url = children
          ?.toString()
          ?.match(/^Embedded content.+(https.+$)/)?.[1]
        if (!url) return children
        return (
          <a
            href={url}
            className="embedly-card"
            data-card-via={via}
            data-card-chrome={chrome}
            data-card-theme={theme}
            data-card-image={image}
            data-card-embed={embed}
            data-card-controls={controls}
            data-card-width={width}
            data-card-align={align}
            data-card-recommend={recommend}
            data-card-key={key}
          >
            Embedded content {url}
          </a>
        )
      }
    }
  }
}
