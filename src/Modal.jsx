import { useRef, useState } from 'react';
import './Modal.css';

function Modal() {
    const dialogRef = useRef();
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [sucessMessage, setSucessMessage] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (!value.includes('@')) {
            setErrorMessage('A valid email address must contain @');
        } else {
            setErrorMessage('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setErrorMessage('Email address cannot be empty.');
            return;
        }

        if (!email.includes('@')) {
            setErrorMessage('A valid email address must contain @.');
            return;
        }

        setSucessMessage('SUCCESSFUL SUBMISSION !');

    };

    const handleClear = (event) => {
        event.preventDefault();
        setEmail("");
    };

    return (
        <>
            <button aria-label="Subscribe Modal Open Button" className='modalbtn' onClick={() => dialogRef.current.showModal()}>Subscribe</button>
            <dialog className='modal' ref={dialogRef}>
                <form className='modal__form' onSubmit={handleSubmit}>
                    <h5 className='modal__form-header'>Subscribe to the Latest News!</h5>
                    {sucessMessage && <p className='modal__form-sucess'>{sucessMessage}</p>}
                    <label className="modal__form-label"> Email:</label>
                    <input className="modal__form-input" type="text" value={email} onChange={handleChange} />
                    {errorMessage && <p className='modal__form-error'>{errorMessage}</p>}
                    <div className="modal__form-buttoncontainer">
                        <button aria-label="Subscribe Modal Subscribe Button" className="modal__form-button" type="submit" >Subscribe</button>
                        <button aria-label="Subscribe Modal Clear Button" className="modal__form-button" onClick={handleClear}>Clear</button>
                        <button aria-label="Subscribe Modal Cancel Button" className="modal__form-button" onClick={() => dialogRef.current.close()}>Cancel</button>
                    </div>
                </form>
            </dialog>
        </>
    );
}

export default Modal;
