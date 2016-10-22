import { PropTypes } from 'react'


const InputText = ({text, onChange})=> {
    <div>
        <input type='text' defaultValue='' onChange={onChange} />
        <div>{text}</div>
    </div>
}

export default InputText