import React, { Children } from 'react'

import TryPremium from '../premium /TryPremium'
import People from '../people/People'
import Pages from '../main/pages/Page'


export default function RIghtSide() {
  return (
    <div className='space-y-8 col-span-1'>
      <TryPremium />
      <People />
      <Pages />
    </div>
  )
}
