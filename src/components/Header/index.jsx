import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="mb-10">
            <h1 className="text-3xl font-bold text-yellow-400">
                <Link to="/">
                 Fome Express
                </Link>
            </h1>
            <nav className="mt-2 space-x-4">
                <Link to="/sobre" className="text-white hover:underline">
                    Sobre
                </Link>
                <Link to="/contato" className="text-white hover:underline">
                    Contatos
                </Link>
            </nav>
        </header>
    )
}
