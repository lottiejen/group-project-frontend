const Button = ({buttonText, handleClick}) => {
    return (
        <>
          <button onClick={handleClick}>{buttonText}</button>  
        </>
    );
};

export default Button;