
const Error = ({ error }) => {

    return !error ? null : (
        <p className="search-error">
            {error}
        </p>
    );
};

export default Error;