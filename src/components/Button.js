const Button = ({buttonText, handleClick}) => {
    return (
        <>
          <button onclick={handleClick}>{buttonText}</button>  
        </>
    );
};

export default Button;