import { Button } from "bootstrap"



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
                        <Button id="link">Home</Button>
                        <Button id="link">Landing</Button>
                        <Button id="link">About</Button>
                        <Button id="link">Menu</Button>
                        <Button id="link">Team</Button>
                        <Button id="link">Contact</Button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}