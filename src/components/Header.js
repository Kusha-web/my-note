

const Header = ({ handleToggleDarkMode }) => {
    return(
        <div className="header">
            <h1>myNote</h1>
            <button onClick={() => handleToggleDarkMode((currentValue) => !currentValue)} className="save">Toggle</button>
        </div>
    )
}

export default Header;