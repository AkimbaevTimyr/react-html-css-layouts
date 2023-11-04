import './style.css';

export default function ConfirmationVerification() {
    return (
        <div>
            <div className="successfull-block">
                <div className='successfull-block-img'>
                    <svg width="151" height="133" viewBox="0 0 151 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.03711" y="1" width="130" height="130" rx="65" stroke="#0D53FC" strokeWidth="2" />
                        <g clipPath="url(#clip0_206_20221)">
                            <path d="M136.537 10L64.0371 82.5L36.0371 54.5" stroke="white" strokeWidth="41" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M136.537 10L64.0371 82.5L36.0371 54.5" stroke="#0D53FC" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_206_20221">
                                <rect width="150" height="132" fill="white" transform="translate(0.0371094)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="successfull-block-title">
                    Verification Successfully Completed
                </div>
                <div className="successfull-block-desc">
                    Your phone number has been successfully verified. You can now enjoy all the benefits of our platform. Thank you for your trust!
                </div>
                <button className='successfull-block-button'>
                    Continute
                </button>
                <div className="successfull-block-bottom">
                    Didn't receive the email? <a href='#'>Try again.</a>
                </div>
            </div>
        </div>
    )
}