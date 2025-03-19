# uhrp-react

UHRP-enabled React components for images, video, and audio.

# Background

The Universal Hash Resolution Protocol (UHRP) allows content to be addressed by its SHA256 hash, enabling efficient content storage and retrieval. This eliminates the need to store large media files directly on the blockchain, significantly reducing costs.

## Installation

```
npm i uhrp-react
```

## Usage
In your React project:

```tsx
import React from 'react'
import { Img, Source } from 'uhrp-react'

const App = () => (
  <div>
    <h1>UHRP Media Showcase</h1>

    <div>
      <h2>Image Preview</h2>
      <Img src='XUT4UwibmJijUorRuhdceFhVXvpzZYfusvC6umGFHWrCxsfBK8Eq' />
    </div>

    <div>
      <h2>Video Preview</h2>
      <video controls>
        <Source src='XUSy2EHiJqRxcB3frZbfQ7J1kEe1sE8x2vB6cfUr1A6rry2AeTZX' />
      </video>
    </div>

    <div>
      <h2>Image with Loading State</h2>
      <Img
        src='XUT4UwibmJijUorRuhdceFhVXvpzZYfusvC6umGFHWrCxsfBK8Eq'
        loading={<div>Loading...</div>}
      />
    </div>
  </div>
)

export default App
```
## Props

src (required) – The UHRP address of the media.
loading (optional) – A React element to display while the media is being resolved.
Any additional props will be passed directly to the rendered <img> or <source> element for greater flexibility.

## How It Works

The uhrp-react library automatically resolves UHRP URLs to HTTP URLs using the UHRP Storage Server in the background. This provides seamless integration with your React application.

## License
The license for the code in this repository is the Open BSV License.

