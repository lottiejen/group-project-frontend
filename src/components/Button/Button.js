const Button = ({buttonText, handleClick, buttonClass}) => {
    return (
        <>
          <button className={`button button--${buttonClass}`} onClick={handleClick}>{buttonText}</button>  
        </>
    );
};

export default Button;