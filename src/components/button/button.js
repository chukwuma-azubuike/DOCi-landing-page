import './style.css';

function GreenButton(props) {
    return <button type='button' className='green-button'>{props.label}</button>
}

function RedButton(props) {
    return <button type='button' className='red-button'>{props.label}</button>
}

function CustomButton(props) {
    return <button
        type='button'
        style={{
            background: props.bgColor ? props.bgColor : 'black',
            color: props.color ? props.color : 'white',
            borderRadius: props.bdRad ? props.bdRad : '6px',
            padding: props.padding ? props.padding : '22px 235px'
        }}>
        {props.label}
    </button>
}

export { GreenButton, RedButton, CustomButton };