import github from '../../assets/github.svg';

const Footer = () => {
    return (
        <footer className="footer glass">

            <section className="socials">
                <div className="socials_img">
                    <a href="https://github.com/lottiejen">
                        <img src={github} alt="github logo"/>
                        <div>
                            <p className="socials_para">Lottie</p>
                        </div>
                    </a>
                </div>
                <div className="socials_img">
                    <a href="https://github.com/georgiaeh">
                        <img src={github} alt="github logo"/>
                        <div>
                            <p className="socials_para">Georgia</p>
                        </div>
                    </a>
                </div>
                <div className="socials_img">
                    <a href="https://github.com/jaytmiah">
                        <img src={github} alt="github logo"/>
                        <div>
                            <p className="socials_para">Jay</p>
                        </div>
                    </a>
                </div>
                <div className="socials_img">
                    <a href="https://github.com/dredgos">
                        <img src={github} alt="github logo"/>
                        <div>
                            <p className="socials_para">Paul</p>
                        </div>
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;