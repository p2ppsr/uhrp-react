# uhrp-react

UHRP-enabled React components for images, video and audio

# Background

The Universal Hash Resolution Protocol (UHRP) allows content to be addressed by its SHA256 hash, removing the need for large image and video files to be stored directly on the blockchain. This reduces the cost of storing files 'on' the blockchain by a factor of 100.

Read more here:
[https://www.projectbabbage.com/docs/nanostore/concepts/uhrp](https://www.projectbabbage.com/docs/nanostore/concepts/uhrp)

## Installation

```
npm i uhrp-react
```

## Usage

Within a React project:

```js
import React from 'react'
import { Img, Source } from 'uhrp-react'

export default () => (
  <div>
    <Img src='uhrp:XUT4UwibmJijUorRuhdceFhVXvpzZYfusvC6umGFHWrCxsfBK8Eq' />
    <video controls>
      <Source
        src='XUSy2EHiJqRxcB3frZbfQ7J1kEe1sE8x2vB6cfUr1A6rry2AeTZX'
      />
    </video>
    <Img
      src='uhrp:XUT4UwibmJijUorRuhdceFhVXvpzZYfusvC6umGFHWrCxsfBK8Eq'
      loading={<div>...</div>}
      bridgeportResolvers={['http://localhost:3103']}
    />
  </div>
)
```

The `loading` prop is shown until the URL is resolved.

The `bridgeportResolvers` prop is forwarded to `nanoseek`.

You are free to pass any other props to the components, which will be passed to the HTML element.

The library simply resolves the UHRP URL and replaces it with the HTTP URL when creating the HTML elements.

## License

The license for the code in this repository is the Open BSV License.
