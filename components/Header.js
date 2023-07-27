import Link from "next/link"


export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <Link href={"/"} id="link">Home</Link>
                        <Link href={"/landing"} id="link">Landing</Link>
                        <Link href={"/about"} id="link">About</Link>
                        <Link href={"/menu"} id="link">Menu</Link>
                        <Link href={"/team"} id="link">Team</Link>
                        <Link href={"/contact"} id="link">Contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}