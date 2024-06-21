import { AudioClip } from "./types"

interface DrumProps {
    audioClip: AudioClip;
}

const Drum = ({audioClip} : DrumProps) => {

    const playSound = (clip: AudioClip) => {
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
          .play()
          .catch(console.error);

          const display = document.getElementById("display");
          if (display) {
            display.innerText = clip.description;
          }
    }

  return (
    <button className="drum-pad" 
    id={`drum-${audioClip.keyTrigger}`}
    onClick={() => playSound(audioClip)}>
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
        {audioClip.keyTrigger}
    </button>
  )
}

export default Drum