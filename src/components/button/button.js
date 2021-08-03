import './style.css';

function GreenButton(props) {
    return <button type='button' className='green-button'>{props.label}</button>
}

function RedButton(props) {
    return <button type='button' className='red-button'>{props.label}</button>
}

function CustomButton(props) {
    return <button
        className='red-button'
        type='button'
        style={{
            background: props.bgColor && props.bgColor,
            color: props.color && props.color,
            borderRadius: props.bdRad && props.bdRad,
            padding: props.padding && props.padding,
            width: props.width && props.width
        }}>
        {props.label}
    </button>
}

export { GreenButton, RedButton, CustomButton };