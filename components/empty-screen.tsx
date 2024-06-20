import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Welcome to MapleBond!</h1>
        <p className="leading-normal text-muted-foreground">
          MapleBond, an AI assistant platform providing comprehensive services
          for Chinese immigrants or those planning to immigrate to North
          America. MapleBond offers immigration consultation, life advice,
          educational guidance, job search assistance, and more.
        </p>
      </div>
    </div>
  )
}
