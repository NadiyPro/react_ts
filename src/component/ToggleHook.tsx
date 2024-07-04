import {useState} from 'react';

type ReturnValue = [() => void,string]

export const useToggle = (init:boolean):ReturnValue => {
    const [toggle, setToggle] = useState<boolean>(init)
    const [backgroundColor, setBackgroundColor] = useState<string>('cornflowerblue')
    const colorToggle = () => {
        setToggle(value => !value);
        setBackgroundColor(toggle? 'cornflowerblue' : 'rosybrown' )
  };

    return [colorToggle, backgroundColor];
}