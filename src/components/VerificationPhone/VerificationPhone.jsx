import './style.scss';

export default function VerificationPhone() {
    return (
        <div className='verification_phone'>
            <div className='verification_phone_header'>
                Verification Phone
            </div>
            <div className='verification_phone_desc'>
                A verification code has been sent to your number. <br />Enter it to verify your number.
            </div>
            <div className='verification_phone_input'>
                <input className='verification_phone_input_group' type="tel" maxlength="1" pattern="[0-9]" />
                <input className='verification_phone_input_group' type="tel" maxlength="1" pattern="[0-9]" />
                <input className='verification_phone_input_group' type="tel" maxlength="1" pattern="[0-9]" />
                <input className='verification_phone_input_group' type="tel" maxlength="1" pattern="[0-9]" />
                <input className='verification_phone_input_group' type="tel" maxlength="1" pattern="[0-9]" />
                <input className='verification_phone_input_group' type="tel" maxlength="1" pattern="[0-9]" />
            </div>
            <div className="verification_phone_again">
                Didn't receive the email? <a href='#'>Try again.</a>
            </div>
            <button className='verification_phone_button'>
                Verification
            </button>
            <a className='verification_phone_bottom'>
                Remembered the password?
            </a>
        </div>
    )
}