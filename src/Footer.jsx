import './Footer.css';


function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__content'> Designed by Ren Yang <br></br>© 2023 Cat Final Project. All rights reserved.</p>
            <ul className='footer__social-list'>
                <li className='footer__social-item'>
                    <a className='footer__social-link' href='https://www.facebook.com/'>
                        Facebook
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a className='footer__social-link' href='https://www.instagram.com/'>
                        Instagram
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a className='footer__social-link' href='https://twitter.com/'>
                        Twitter
                    </a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;