import React from 'react'
import { Img, Source } from 'uhrp-react'

const App: React.FC = () => {
  return (
    <div>
      <Img src="uhrp:XUT4UwibmJijUorRuhdceFhVXvpzZYfusvC6umGFHWrCxsfBK8Eq" />

      <video controls>
        <Source src="XUSy2EHiJqRxcB3frZbfQ7J1kEe1sE8x2vB6cfUr1A6rry2AeTZX" />
      </video>
    </div>
  )
}

export default App
