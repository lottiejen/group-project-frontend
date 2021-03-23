const Button = ({buttonText, handleClick, buttonStyle}) => {
    return (
        <>
          <button onClick={handleClick}>{buttonText}</button>  
        </>
    );
};

export default Button;