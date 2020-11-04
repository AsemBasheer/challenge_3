class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home",
            name: "",
            email: "",
            password: "",
            addressLine1: "",
            addressLine2: "",
            addressCity: "",
            addressState: "",
            addressZip: "",
            phone: "",
            creditNumber: "",
            creditExpiry: "",
            creditCVV: "",
            billingZip: ""
        };
    }

    test() {
        console.log(this.state)
    }

    render() {
        return (
            this.state.page === "form1" ?
                <div>
                    <div className="col-md-12"><strong>Name:</strong></div>
                    <div className="col-md-12"><input id="name" type="text" name="name" className="form-control" onChange={(e) => this.setState({ name: e.target.value})} /></div>
                    <div className="col-md-12"><strong>Email Address:</strong></div>
                    <div className="col-md-12"><input id="email" type="text" name="email" className="form-control" onChange={(e) => this.setState({ email: e.target.value})} /></div>
                    <div className="col-md-12"><strong>Password:</strong></div>
                    <div className="col-md-12"><input id="password" type="password" name="password" className="form-control" onChange={(e) => this.setState({ password: e.target.value})} /></div>
                    <button className="w3-button w3-red" onClick={() => { this.setState({ page: "form2" }) }}>next</button>
                </div>
                :
                this.state.page === "form2" ?
                    <div>
                        <form>
                            <div className="col-md-12"><strong>Address Line 1:</strong></div>
                            <div className="col-md-12"><input id="address1" type="text" name="address1" className="form-control" onChange={(e) => this.setState({ addressLine1: e.target.value})} /></div>
                            <div className="col-md-12"><strong>Address Line 2:</strong></div>
                            <div className="col-md-12"><input id="address2" type="text" name="address2" className="form-control" onChange={(e) => this.setState({ addressLine2: e.target.value})}/></div>
                            <div className="col-md-12"><strong>City:</strong></div>
                            <div className="col-md-12"><input id="city" type="text" name="city" className="form-control" onChange={(e) => this.setState({ addressCity: e.target.value})} /></div>
                            <div className="col-md-12"><strong>State:</strong></div>
                            <div className="col-md-12"><input id="state" type="text" name="state" className="form-control" onChange={(e) => this.setState({ addressState: e.target.value})} /></div>
                            <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                            <div className="col-md-12"><input id="zip" type="text" name="zip_code" className="form-control" onChange={(e) => this.setState({ addressZip: e.target.value})} /></div>
                            <div className="col-md-12"><strong>Phone Number:</strong></div>
                            <div className="col-md-12"><input id="phone" type="text" name="phone_number" className="form-control" onChange={(e) => this.setState({ phone: e.target.value})} /></div>
                            <button className="w3-button w3-red" onClick={() => { this.setState({ page: "form3" }) }}>next</button>
                        </form>
                    </div>
                    :
                    this.state.page === "form3" ?
                        <div>
                            <div className="col-md-12"><strong>Credit Card Number:</strong></div>
                            <div className="col-md-12"><input id="creditNumber" type="text" className="form-control" name="creditNumber" onChange={(e) => this.setState({ creditNumber: e.target.value})}  /></div>
                            <div className="col-md-12"><strong>Credit Card Expiry Date:</strong></div>
                            <div className="col-md-12"><input id="creditExpiry" type="text" className="form-control" name="creditExpiry" onChange={(e) => this.setState({ creditExpiry: e.target.value})}  /></div>
                            <div className="col-md-12"><strong>Card CVV:</strong></div>
                            <div className="col-md-12"><input id="creditCVV" type="text" className="form-control" name="creditCVV" onChange={(e) => this.setState({ creditCVV: e.target.value})}  /></div>
                            <div className="col-md-12"><strong>Billing Zip Code:</strong></div>
                            <div className="col-md-12"><input id="billingZip" type="text" className="form-control" name="billingZip" onChange={(e) => this.setState({ billingZip: e.target.value})}  /></div>
                            <button className="w3-button w3-red" onClick={() => {this.setState({ page: "form4" }) }}>next</button>
                        </div>
                        :
                        this.state.page === "form4" ?
                            <div>
                                <h1>confirmation page</h1>
                                <button className="w3-button w3-red" onClick={() => {this.test(),this.setState({ page: "home" }) }}>Purchase</button>
                            </div>
                            :
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="https://miro.medium.com/max/1200/1*Eyt1T-FH2FSo2e1syR8ubQ.png" width="400rem"></img>
                                <button className="w3-button w3-red" onClick={() => { this.setState({ page: "form1" }) }}>Checkout</button>
                            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));