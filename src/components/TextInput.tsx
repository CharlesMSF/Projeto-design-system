import { InputHTMLAttributes, ReactNode} from 'react';
import {clsx} from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className='flex items-center gap-3 h-12py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
        {props.children}  
        </div>
    )
}

export interface TextInputInputProps{
    children: ReactNode;
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400 '>
        {props.children}
        </Slot>
    )
    
}

TextInputInput.displayName = 'TextInput.Input'
export interface TextInputInputProps extends InputHTMLAttributes<HTMLAnchorElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
        className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400  outline-none'
        
    {...props}
    />
    )
}



export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
    

}
