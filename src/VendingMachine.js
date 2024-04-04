import NavBar from "./NavBar";
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <img
                className="VendingMachine-pic"
                src="https://images.unsplash.com/photo-1625650484478-113df4bfc370?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="VendingMachine-text">
                <p>Hello, I am Vend-igo Machine-toya. You pressed my button. Prepare to snack!</p>
            </div>
            <NavBar />
        </div>
    )
}

export default VendingMachine;