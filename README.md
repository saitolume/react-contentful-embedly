# react-contentful-embedly

[![npm version](https://badge.fury.io/js/react-contentful-embedly.svg)](https://badge.fury.io/js/react-contentful-embedly) ![CI Status](https://github.com/saitoeku3/react-contentful-embedly/workflows/ci/badge.svg)

> Display Embedly in contentful rich document with React Hooks

## Motivation

> Developer's perspective
> We use Embedly to display external content. To show Embedly cards in your sites and apps, you should use the relevant libraries provided by Embedly. [See the documentation](https://docs.embed.ly/docs/embedly-api) for more information.
>
> [Markdown editor documentation | Contentful](https://www.contentful.com/r/knowledgebase/markdown/)

## Install

```
$ npm install react-contentful-embedly
$ yarn add react-contentful-embedly
```

## Usage

```tsx
import React from 'react'
import { useEmbedly, EmbedlyAttributes } from 'react-contentful-embedly'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

const Component = () => {
  const attributes: EmbedlyAttributes = { align: 'left' }
  const option = useEmbedly(attributes)
  // Or `const option = useEmbedly({ align: 'left' })`

  const documentIncludesEmbedly: Document = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value:
              'Embedded content: https://www.youtube.com/watch?v=Sa4DYkIEzz8',
            marks: [],
            data: {}
          }
        ]
      }
    ]
  }

  return <div>{documentToReactComponents(documentIncludesEmbedly, option)}</div>
}
```

Result (Screenshot):

![result](./result.png)

## API Docs

### useEmbedly

`(attributes: EmbedlyAttributes) => Options`

You can get `Options` for `@contentful/rich-text-react-renderer` and install package to render embedly.

### EmbedlyAttributes

Type of Embedly card attributes.

```ts
{
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
```

Ref: [Cards · Embedly Documentation](https://docs.embed.ly/docs/cards#customize)

## License

MIT © saitoeku3
