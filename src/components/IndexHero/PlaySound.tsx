import React, { FC, useEffect, useState } from 'react'
import Button from 'components/Button/Button'
import tw from 'twin.macro'
import SoundOn from 'assets/icons/SoundOn'

const PlaySound: FC<{ sound: string; buttonName: string }> = ({ sound, buttonName }) => {
  const [audio, setAudio] = useState<HTMLAudioElement>()
  useEffect(() => {
    const audio = new Audio()
    audio.src = sound
    setAudio(audio)
  }, [sound])
  return (
    <Button
      isSmall
      color="ghost"
      aria-label={buttonName}
      onClick={(): void => {
        if (audio) {
          audio.play()
        }
      }}
    >
      <SoundOn css={[tw`w-5`]} />
    </Button>
  )
}
export default PlaySound
