



import './Registration.css';
import { useState, useId } from 'react';

function Registration() {
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [confirmEmail, setConfirmEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [confirmPassword, setConfirmPassword] = useState(``);
    const [residentialAddress, setResidentialAddress] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [id] = useId();

    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);
    const [isBillingSameAsResidential, setIsBillingSameAsResidential] = useState(false);
    const [isResidentialAddressTouched, setIsResidentialAddressTouched] = useState(false);
    const [isBillingAddressTouched, setIsBillingAddressTouched] = useState(false);

    const isNameInvalid = isNameTouched && name.trim().length === 0;
    const isEmailInvalid = isEmailTouched && (email.trim().length === 0 || !email.includes(`@`));
    const isConfirmEmailInvalid = email !== confirmEmail;
    const isPasswordInvalid = isPasswordTouched && password.trim().length < 4;
    const isConfirmPasswordInvalid = password !== confirmPassword;
    const isResidentialAddressInvalid = isResidentialAddressTouched && residentialAddress.trim().length === 0;
    const isBillingAddressInvalid = isBillingAddressTouched && billingAddress.trim().length === 0;

    const handleNameBlur = () => {
        setIsNameTouched(true);
    };

    const handleEmailBlur = () => {
        setIsEmailTouched(true);
    };

    const handlePasswordBlur = () => {
        setIsPasswordTouched(true);
    };


    const handleResidentialAddressBlur = () => {
        setIsResidentialAddressTouched(true);
    };

    const handleBillingAddressBlur = () => {
        setIsBillingAddressTouched(true);
    };

    const handleBillingSameAsResidentialChange = (event) => {
        const isChecked = event.target.checked;
        setIsBillingSameAsResidential(isChecked);
        setBillingAddress(isChecked ? residentialAddress : '');
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length === 0 || email.trim().length === 0 || confirmEmail.trim().length === 0 || password.trim().length === 0 || confirmPassword.trim().length === 0 || residentialAddress.trim().length === 0 || billingAddress.trim().length === 0) {
            alert('Please fill out all fields.');
        } else {
            alert('Submission successful!');
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setConfirmEmail("");
        setPassword("");
        setConfirmPassword("");
        setResidentialAddress("");
        setBillingAddress("");
      };

    return (
        <div className="subscribe" id="main">

            <h2 className="subscribe__title">Join the Cat-Loving Community!</h2>
            <h3 className="subscribe__subtitle"> Sign up for an account to access our wide range of information and activities.</h3>

            <form className="subscribe__form" onSubmit={handleSubmit}>

                <label className="subscribe__form-label" htmlFor={`${id}-name`}> Name </label>
                <input className="subscribe__form-input" id={`${id}-name`} type="text" onChange={(e) => { setName(e.target.value); }} onBlur={handleNameBlur} value={name} />
                {isNameInvalid && (<p className="subscribe__form-error"> Name is required!</p>)}

                <label className="subscribe__form-label" htmlFor={`${id}-email`}> Email </label>
                <input className="subscribe__form-input" id={`${id}-email`} type="text" onChange={(e) => { setEmail(e.target.value); }} onBlur={handleEmailBlur} value={email} />
                {isEmailInvalid && (<p className="subscribe__form-error"> Email is required and must include @!</p>)}

                <label className="subscribe__form-label" htmlFor={`${id}-confirm-email`}> Confirm Email </label>
                <input className="subscribe__form-input" id={`${id}-confirm-email`} type="text" onChange={(e) => { setConfirmEmail(e.target.value); }} value={confirmEmail} />
                {isConfirmEmailInvalid && (<p className="subscribe__form-error"> Confirm email must match email!</p>)}

                <label className="subscribe__form-label" htmlFor={`${id}-password`}> Password </label>
                <input className="subscribe__form-input" id={`${id}-password`} type="text" onChange={(e) => { setPassword(e.target.value); }} onBlur={handlePasswordBlur} value={password} />
                {isPasswordInvalid && (<p className="subscribe__form-error"> Password must have at least 4 characters!</p>)}

                <label className="subscribe__form-label" htmlFor={`${id}-confirm-password`}> Confirm Password </label>
                <input className="subscribe__form-input" id={`${id}-confirm-password`} type="text" onChange={(e) => { setConfirmPassword(e.target.value); }} value={confirmPassword} />
                {isConfirmPasswordInvalid && (<p className="subscribe__form-error"> Confirm password must match password!</p>)}


                <label className="subscribe__form-label" htmlFor={`${id}-residential-address`}> Residential Address </label>
                <input className="subscribe__form-input" id={`${id}-residential-address`} onChange={(e) => { setResidentialAddress(e.target.value); }} onBlur={handleResidentialAddressBlur} value={residentialAddress} />
                {isResidentialAddressInvalid && (<p className="subscribe__form-error"> Residential Address is required!</p>)}


                <label className="subscribe__form-label" htmlFor={`${id}-billing-address`}> Billing Address </label>
                <input className="subscribe__form-input" id={`${id}-billing-address`} onChange={(e) => { setBillingAddress(e.target.value); }} onBlur={handleBillingAddressBlur} value={billingAddress} readOnly={isBillingSameAsResidential} />
                {isBillingAddressInvalid && (<p className="subscribe__form-error"> Billing Address is required!</p>)}

                <label className="subscribe__form-sublabel">
                    <input className="subscribe__form-input" id={`${id}-same-address`} type="checkbox" onChange={handleBillingSameAsResidentialChange} checked={isBillingSameAsResidential} /> Billing address same as residential address
                </label>

                <div className="button-container">
                <button aria-label="Registration Form Submit Button" className="subscribe__form-btn" disabled={isNameInvalid || isEmailInvalid || isConfirmEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid || isResidentialAddressInvalid || isBillingAddressInvalid} type="submit">Submit</button>
                <button aria-label="Registration Form Cancel Button" className="subscribe__form-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;


