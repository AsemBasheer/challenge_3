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

    postData(url) {
        fetch(`${url}`, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    }

    reset() {
        this.setState({
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
        });
    }

    render() {
        return this.state.page === "form1" ? React.createElement(
            "div",
            { className: "d-flex justify-content-center align-items-center vh-100" },
            React.createElement(
                "div",
                { className: "w-50" },
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "strong",
                        { className: "text-white" },
                        "Name:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement("input", { id: "name", type: "text", name: "name", className: "form-control", onChange: e => this.setState({ name: e.target.value }) })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "strong",
                        { className: "text-white" },
                        "Email Address:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement("input", { id: "email", type: "text", name: "email", className: "form-control", onChange: e => this.setState({ email: e.target.value }) })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "strong",
                        { className: "text-white" },
                        "Password:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement("input", { id: "password", type: "password", name: "password", className: "form-control", onChange: e => this.setState({ password: e.target.value }) })
                )
            ),
            React.createElement(
                "button",
                { className: "m-1 w3-button w3-red", onClick: () => {
                        this.postData("form1"), this.setState({ page: "form2" });
                    } },
                "next"
            )
        ) : this.state.page === "form2" ? React.createElement(
            "div",
            { className: "d-flex justify-content-center align-items-center vh-100" },
            React.createElement(
                "div",
                { className: "w-50" },
                React.createElement(
                    "form",
                    null,
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "strong",
                            { className: "text-white" },
                            "Address Line 1:"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement("input", { id: "address1", type: "text", name: "address1", className: "form-control", onChange: e => this.setState({ addressLine1: e.target.value }) })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "strong",
                            { className: "text-white" },
                            "Address Line 2:"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement("input", { id: "address2", type: "text", name: "address2", className: "form-control", onChange: e => this.setState({ addressLine2: e.target.value }) })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "strong",
                            { className: "text-white" },
                            "City:"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement("input", { id: "city", type: "text", name: "city", className: "form-control", onChange: e => this.setState({ addressCity: e.target.value }) })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "strong",
                            { className: "text-white" },
                            "State:"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement("input", { id: "state", type: "text", name: "state", className: "form-control", onChange: e => this.setState({ addressState: e.target.value }) })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "strong",
                            { className: "text-white" },
                            "Zip / Postal Code:"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement("input", { id: "zip", type: "text", name: "zip_code", className: "form-control", onChange: e => this.setState({ addressZip: e.target.value }) })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "strong",
                            { className: "text-white" },
                            "Phone Number:"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement("input", { id: "phone", type: "text", name: "phone_number", className: "form-control", onChange: e => this.setState({ phone: e.target.value }) })
                    )
                )
            ),
            React.createElement(
                "button",
                { className: "m-1 w3-button w3-red", onClick: () => {
                        this.postData("form2"), this.setState({ page: "form3" });
                    } },
                "next"
            )
        ) : this.state.page === "form3" ? React.createElement(
            "div",
            { className: "d-flex justify-content-center align-items-center vh-100" },
            React.createElement(
                "div",
                { className: "w-50" },
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "strong",
                        { className: "text-white" },
                        "Credit Card Number:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement("input", { id: "creditNumber", type: "text", className: "form-control", name: "creditNumber", onChange: e => this.setState({ creditNumber: e.target.value }) })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "strong",
                        { className: "text-white" },
                        "Credit Card Expiry Date:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement("input", { id: "creditExpiry", type: "text", className: "form-control", name: "creditExpiry", onChange: e => this.setState({ creditExpiry: e.target.value }) })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "strong",
                        { className: "text-white" },
                        "Card CVV:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement("input", { id: "creditCVV", type: "text", className: "form-control", name: "creditCVV", onChange: e => this.setState({ creditCVV: e.target.value }) })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "strong",
                        { className: "text-white" },
                        "Billing Zip Code:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement("input", { id: "billingZip", type: "text", className: "form-control", name: "billingZip", onChange: e => this.setState({ billingZip: e.target.value }) })
                )
            ),
            React.createElement(
                "button",
                { className: "m-1 w3-button w3-red", onClick: () => {
                        this.postData("form3"), this.setState({ page: "form4" });
                    } },
                "next"
            )
        ) : this.state.page === "form4" ? React.createElement(
            "div",
            { className: "d-flex justify-content-center align-items-center vh-100" },
            React.createElement(
                "div",
                { className: "w-50" },
                React.createElement(
                    "h1",
                    { className: "text-white" },
                    "Confirmation Page"
                ),
                React.createElement(
                    "table",
                    { className: "table table-dark" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                { scope: "col" },
                                "Name"
                            ),
                            React.createElement(
                                "th",
                                { scope: "col" },
                                this.state.name
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Email"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.email
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Password"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.password
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Address Line 1"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.addressLine1
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Address Line 2"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.addressLine2
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Address City"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.addressCity
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Address State"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.addressState
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Address Zip"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.addressZip
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Phone"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.phone
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Credit Card Number"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.creditNumber
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Credit Card Expiry Date"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.creditExpiry
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Credit CVV"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.creditCVV
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Billing Zip Code"
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.state.billingZip
                            )
                        )
                    )
                ),
                React.createElement(
                    "button",
                    { className: "m-1 w3-button w3-red", onClick: () => {
                            this.reset(), this.setState({ page: "home" });
                        } },
                    "Purchase"
                )
            )
        ) : React.createElement(
            "div",
            { className: "d-flex justify-content-center align-items-center vh-100" },
            React.createElement("img", { src: "https://miro.medium.com/max/1200/1*Eyt1T-FH2FSo2e1syR8ubQ.png", width: "700rem" }),
            React.createElement(
                "button",
                { className: "m-1 w3-button w3-red", onClick: () => {
                        this.setState({ page: "form1" });
                    } },
                "Checkout"
            )
        );
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicGFnZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0NpdHkiLCJhZGRyZXNzU3RhdGUiLCJhZGRyZXNzWmlwIiwicGhvbmUiLCJjcmVkaXROdW1iZXIiLCJjcmVkaXRFeHBpcnkiLCJjcmVkaXRDVlYiLCJiaWxsaW5nWmlwIiwicG9zdERhdGEiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc2V0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU0sTUFERztBQUVUQyxrQkFBTSxFQUZHO0FBR1RDLG1CQUFPLEVBSEU7QUFJVEMsc0JBQVUsRUFKRDtBQUtUQywwQkFBYyxFQUxMO0FBTVRDLDBCQUFjLEVBTkw7QUFPVEMseUJBQWEsRUFQSjtBQVFUQywwQkFBYyxFQVJMO0FBU1RDLHdCQUFZLEVBVEg7QUFVVEMsbUJBQU8sRUFWRTtBQVdUQywwQkFBYyxFQVhMO0FBWVRDLDBCQUFjLEVBWkw7QUFhVEMsdUJBQVcsRUFiRjtBQWNUQyx3QkFBWTtBQWRILFNBQWI7QUFnQkg7O0FBRURDLGFBQVNDLEdBQVQsRUFBYztBQUNWQyxjQUFPLEdBQUVELEdBQUksRUFBYixFQUFnQjtBQUNaRSxvQkFBUSxNQURJO0FBRVpDLGtCQUFNQyxLQUFLQyxTQUFM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O0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyxxQ0FBS1osS0FBTCxDQUFXYTtBQUFoQjtBQUZKLHlCQXpDSjtBQTZDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUsscUNBQUtiLEtBQUwsQ0FBV2M7QUFBaEI7QUFGSjtBQTdDSjtBQVBKLGlCQUZKO0FBNERJO0FBQUE7QUFBQSxzQkFBUSxXQUFVLHNCQUFsQixFQUF5QyxTQUFTLE1BQU07QUFBRSxpQ0FBS1MsS0FBTCxJQUFjLEtBQUtDLFFBQUwsQ0FBYyxFQUFFdkIsTUFBTSxNQUFSLEVBQWQsQ0FBZDtBQUErQyx5QkFBekc7QUFBQTtBQUFBO0FBNURKO0FBREosU0FESixHQWtFSTtBQUFBO0FBQUEsY0FBSyxXQUFVLHlEQUFmO0FBQ0kseUNBQUssS0FBSSwrREFBVCxFQUF5RSxPQUFNLFFBQS9FLEdBREo7QUFFSTtBQUFBO0FBQUEsa0JBQVEsV0FBVSxzQkFBbEIsRUFBeUMsU0FBUyxNQUFNO0FBQUUsNkJBQUt1QixRQUFMLENBQWMsRUFBRXZCLE1BQU0sT0FBUixFQUFkO0FBQWtDLHFCQUE1RjtBQUFBO0FBQUE7QUFGSixTQXBIcEI7QUF5SEg7QUE1SzZCO0FBOEtsQzRCLFNBQVNKLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkssU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZTogXCJob21lXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc0xpbmUxOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzTGluZTI6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NDaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzU3RhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NaaXA6IFwiXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXROdW1iZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdEV4cGlyeTogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0Q1ZWOiBcIlwiLFxyXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0RGF0YSh1cmwpIHtcclxuICAgICAgICBmZXRjaChgJHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhZ2U6IFwiaG9tZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NMaW5lMTogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc0xpbmUyOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzQ2l0eTogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc1N0YXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzWmlwOiBcIlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0TnVtYmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXRFeHBpcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdENWVjogXCJcIixcclxuICAgICAgICAgICAgYmlsbGluZ1ppcDogXCJcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gXCJmb3JtMVwiID9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHZoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPk5hbWU6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5FbWFpbCBBZGRyZXNzOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+UGFzc3dvcmQ6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS0xIHczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucG9zdERhdGEoXCJmb3JtMVwiKSwgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTJcIiB9KSB9fT5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gXCJmb3JtMlwiID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB2aC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkFkZHJlc3MgTGluZSAxOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiYWRkcmVzczFcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NMaW5lMTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5BZGRyZXNzIExpbmUgMjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImFkZHJlc3MyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzTGluZTI6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q2l0eTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc0NpdHk6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+U3RhdGU6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJzdGF0ZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc1N0YXRlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlppcCAvIFBvc3RhbCBDb2RlOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiemlwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwX2NvZGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzWmlwOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlBob25lIE51bWJlcjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cInBob25lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVfbnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcGhvbmU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tMSB3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnBvc3REYXRhKFwiZm9ybTJcIiksIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImZvcm0zXCIgfSkgfX0+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTNcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHZoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DcmVkaXQgQ2FyZCBOdW1iZXI6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJjcmVkaXROdW1iZXJcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjcmVkaXROdW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXROdW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q3JlZGl0IENhcmQgRXhwaXJ5IERhdGU6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJjcmVkaXRFeHBpcnlcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjcmVkaXRFeHBpcnlcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXRFeHBpcnk6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q2FyZCBDVlY6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJjcmVkaXRDVlZcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjcmVkaXRDVlZcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXRDVlY6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+QmlsbGluZyBaaXAgQ29kZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImJpbGxpbmdaaXBcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJiaWxsaW5nWmlwXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYmlsbGluZ1ppcDogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tMSB3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnBvc3REYXRhKFwiZm9ybTNcIiksIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImZvcm00XCIgfSkgfX0+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTRcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB2aC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Db25maXJtYXRpb24gUGFnZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e3RoaXMuc3RhdGUubmFtZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QYXNzd29yZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5wYXNzd29yZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QWRkcmVzcyBMaW5lIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuYWRkcmVzc0xpbmUxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzIExpbmUgMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5hZGRyZXNzTGluZTJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3MgQ2l0eTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5hZGRyZXNzQ2l0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QWRkcmVzcyBTdGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5hZGRyZXNzU3RhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3MgWmlwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmFkZHJlc3NaaXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBob25lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnBob25lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DcmVkaXQgQ2FyZCBOdW1iZXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuY3JlZGl0TnVtYmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DcmVkaXQgQ2FyZCBFeHBpcnkgRGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5jcmVkaXRFeHBpcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNyZWRpdCBDVlY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuY3JlZGl0Q1ZWfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CaWxsaW5nIFppcCBDb2RlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmJpbGxpbmdaaXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTEgdzMtYnV0dG9uIHczLXJlZFwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5yZXNldCgpLCB0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJob21lXCIgfSkgfX0+UHVyY2hhc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdmgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMTIwMC8xKkV5dDFULUZIMkZTbzJlMXN5Ujh1YlEucG5nXCIgd2lkdGg9XCI3MDByZW1cIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tMSB3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJmb3JtMVwiIH0pIH19PkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19