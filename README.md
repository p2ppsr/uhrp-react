# uhrp-react

UHRP-enabled React components for images, video and audio

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
  </div>
)
```

You are free to pass any other props to the components, which will be passed to the HTML element.

The library simply resolves the UHRP URL and replaces it with the HTTP URL when creating the HTML elements.

## License

The license for the code in this repository is the Open BSV License.
