import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'
import Head from 'next/head'

export const maxDuration = 50
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'MapleBond'
}

export default async function IndexPage() {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  return (
    <>
      <Head>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MWBFH4BVDV"
            data-next-head-load="false"
          ></script>
          <script
            src="https://www.googletagmanager.com/gtag/js?id=G-MWBFH4BVDV"
            async
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MWBFH4BVDV');
            `
            }}
          ></script>
        </Head>
      </Head>
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <Chat id={id} session={session} missingKeys={missingKeys} />
      </AI>
    </>
  )
}
