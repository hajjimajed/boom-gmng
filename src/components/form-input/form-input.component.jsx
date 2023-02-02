import './form-input.styles.scss'


const FormInput = ({ label, ...otherProps }) => {

    return (

        <div className='group'>

            <input className='form-input' {...otherProps} />

            {
                label && (
                    <label className={`${otherProps.value ? 'shrink' : ''} form-input-label `}>{label}<span> *</span> </label>

                )
            }


        </div>

    )

}

export default FormInput