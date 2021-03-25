const Button = ({buttonText, handleClick, buttonClass}) => {
    return (
        <>
          <button className={`button button--${buttonClass}`} >{buttonText}</button>  
        </>
    );
};

export default Button;