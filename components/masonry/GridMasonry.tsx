import { FC, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { Card, Image, Overlay } from 'styles/grid.module'

const GridDispaly: FC<prop> = ({ title, summary, image }) => {
  const [shown, setShown] = useState<boolean>(false)
  return (
    <Link href={'/'} passHref>
      <Card
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          animate={{ scale: shown ? 1.5 : 1, rotate: shown ? 10 : 0 }}
          transition={{ type: 'tween', duration: 0.5 }}
          alt={title}
          src={image}
        />
        <AnimatePresence>
          {shown && (
            <Overlay>
              <p>{title}</p>
              <p>{summary}</p>
            </Overlay>
          )}
        </AnimatePresence>
      </Card>
    </Link>
  )
}

export default GridDispaly

type prop = {
  title: string
  summary: string
  image: string
}
