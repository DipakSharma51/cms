'use client'
import { cn } from '@/utilities/ui'
import React from 'react'

import type { ArchiveBlock as ArchiveBlockProps } from '@/payload-types'
import { Media } from '../Media'

export type Props = {
  media: ArchiveBlockProps['media']
}

export const MediaArchive: React.FC<Props> = (props) => {
  const { media } = props
  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {media?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Media resource={result} />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
