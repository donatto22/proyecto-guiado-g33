import Nav from '../components/nav/Nav'

const BaseLayout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}

            <footer>
                <p>Derechos reservados</p>
                <button>Dame click</button>
            </footer>
        </>
    )
}

export default BaseLayout