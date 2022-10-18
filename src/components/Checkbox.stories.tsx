import{Meta, StoryObj} from '@storybook/react'
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args:{},
    argTypes: {},
    decorators:[(Story)=>{
        return (
            <div className='flex items-center gap-2 text-gray-100'>
            {Story()}
            <text size='sm'>Lembrar de mim por 30 dias</text>
            </div>
        
        )

    }
    ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

