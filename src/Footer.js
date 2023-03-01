const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <>
        <footer className="footer">
         <h3> copyright ©{year}</h3>
         </footer>
        </>
    )
}

export default Footer;