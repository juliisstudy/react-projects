import {useRef} from 'react';

export default function Form(){
    const inputRef = useRef(null);
    
    function handleClick(){
        inputRef.current.focus();
    }
    return (
        <>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focuse the input</button>
        </>
    );
}




