import {useState, useRef,useEffect} from 'react';

// eslint-disable-next-line react/prop-types
function VideoPlayer({src,isPlaying}){
    const ref = useRef(null);
    useEffect(()=>{
        if(isPlaying){
            console.log('calling video.play()');
            ref.current.play();
        }else{
            console.log('calling video.pause()');
            ref.current.pause();
        }
    },[isPlaying]);
    return <video ref={ref} src={src} loop playsInline width="500px" />
}

export default function VideoPlay(){
    const [isPlaying,setIsPlaying] = useState(false);
    return(
        <>
           
            <VideoPlayer isPlaying={isPlaying} 
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
            <br/>
             <button onClick={()=>setIsPlaying(!isPlaying)}>
                {isPlaying?'Pause':'Play'}
            </button>
        </>
    )
}