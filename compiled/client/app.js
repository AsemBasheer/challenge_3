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
            null,
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
            ),
            React.createElement(
                "button",
                { className: "w3-button w3-red", onClick: () => {
                        this.postData("form1"), this.setState({ page: "form2" });
                    } },
                "next"
            )
        ) : this.state.page === "form2" ? React.createElement(
            "div",
            null,
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
                ),
                React.createElement(
                    "button",
                    { className: "w3-button w3-red", onClick: () => {
                            this.postData("form2"), this.setState({ page: "form3" });
                        } },
                    "next"
                )
            )
        ) : this.state.page === "form3" ? React.createElement(
            "div",
            null,
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
            ),
            React.createElement(
                "button",
                { className: "w3-button w3-red", onClick: () => {
                        this.postData("form3"), this.setState({ page: "form4" });
                    } },
                "next"
            )
        ) : this.state.page === "form4" ? React.createElement(
            "div",
            null,
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
                { className: "w3-button w3-red", onClick: () => {
                        this.reset(), this.setState({ page: "home" });
                    } },
                "Purchase"
            )
        ) : React.createElement(
            "div",
            { className: "d-flex justify-content-center align-items-center" },
            React.createElement("img", { src: "https://miro.medium.com/max/1200/1*Eyt1T-FH2FSo2e1syR8ubQ.png", width: "400rem" }),
            React.createElement(
                "button",
                { className: "w3-button w3-red", onClick: () => {
                        this.setState({ page: "form1" });
                    } },
                "Checkout"
            )
        );
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicGFnZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0NpdHkiLCJhZGRyZXNzU3RhdGUiLCJhZGRyZXNzWmlwIiwicGhvbmUiLCJjcmVkaXROdW1iZXIiLCJjcmVkaXRFeHBpcnkiLCJjcmVkaXRDVlYiLCJiaWxsaW5nWmlwIiwicG9zdERhdGEiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc2V0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU0sTUFERztBQUVUQyxrQkFBTSxFQUZHO0FBR1RDLG1CQUFPLEVBSEU7QUFJVEMsc0JBQVUsRUFKRDtBQUtUQywwQkFBYyxFQUxMO0FBTVRDLDBCQUFjLEVBTkw7QUFPVEMseUJBQWEsRUFQSjtBQVFUQywwQkFBYyxFQVJMO0FBU1RDLHdCQUFZLEVBVEg7QUFVVEMsbUJBQU8sRUFWRTtBQVdUQywwQkFBYyxFQVhMO0FBWVRDLDBCQUFjLEVBWkw7QUFhVEMsdUJBQVcsRUFiRjtBQWNUQyx3QkFBWTtBQWRILFNBQWI7QUFnQkg7O0FBRURDLGFBQVNDLEdBQVQsRUFBYztBQUNWQyxjQUFPLEdBQUVELEdBQUksRUFBYixFQUFnQjtBQUNaRSxvQkFBUSxNQURJO0FBRVpDLGtCQUFNQyxLQUFLQyxTQUFM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QUFBO0FBQUEsa0JBQVEsV0FBVSxrQkFBbEIsRUFBcUMsU0FBUyxNQUFNO0FBQUMsNkJBQUtTLEtBQUwsSUFBYyxLQUFLQyxRQUFMLENBQWMsRUFBRXZCLE1BQU0sTUFBUixFQUFkLENBQWQ7QUFBK0MscUJBQXBHO0FBQUE7QUFBQTtBQTVESixTQURKLEdBZ0VJO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0RBQWY7QUFDSSx5Q0FBSyxLQUFJLCtEQUFULEVBQXlFLE9BQU0sUUFBL0UsR0FESjtBQUVJO0FBQUE7QUFBQSxrQkFBUSxXQUFVLGtCQUFsQixFQUFxQyxTQUFTLE1BQU07QUFBRSw2QkFBS3VCLFFBQUwsQ0FBYyxFQUFFdkIsTUFBTSxPQUFSLEVBQWQ7QUFBa0MscUJBQXhGO0FBQUE7QUFBQTtBQUZKLFNBNUdwQjtBQWlISDtBQXBLNkI7QUFzS2xDNEIsU0FBU0osTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCSyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYWdlOiBcImhvbWVcIixcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzTGluZTE6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NMaW5lMjogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc0NpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NTdGF0ZTogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc1ppcDogXCJcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdE51bWJlcjogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0RXhwaXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXRDVlY6IFwiXCIsXHJcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3REYXRhKHVybCkge1xyXG4gICAgICAgIGZldGNoKGAke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiBcImhvbWVcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc0xpbmUxOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc0xpbmUyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc0NpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzU3RhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzWmlwOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkaXROdW1iZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkaXRFeHBpcnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkaXRDVlY6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBiaWxsaW5nWmlwOiBcIlwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gXCJmb3JtMVwiID9cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5OYW1lOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkVtYWlsIEFkZHJlc3M6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+UGFzc3dvcmQ6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wb3N0RGF0YShcImZvcm0xXCIpLHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImZvcm0yXCIgfSl9fT5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gXCJmb3JtMlwiID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+QWRkcmVzcyBMaW5lIDE6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImFkZHJlc3MxXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzTGluZTE6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5BZGRyZXNzIExpbmUgMjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiYWRkcmVzczJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NMaW5lMjogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNpdHk6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc0NpdHk6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5TdGF0ZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwic3RhdGVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NTdGF0ZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlppcCAvIFBvc3RhbCBDb2RlOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJ6aXBcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBfY29kZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NaaXA6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5QaG9uZSBOdW1iZXI6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cInBob25lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVfbnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcGhvbmU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4ge3RoaXMucG9zdERhdGEoXCJmb3JtMlwiKSwgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTNcIiB9KSB9fT5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID09PSBcImZvcm0zXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DcmVkaXQgQ2FyZCBOdW1iZXI6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImNyZWRpdE51bWJlclwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNyZWRpdE51bWJlclwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNyZWRpdE51bWJlcjogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNyZWRpdCBDYXJkIEV4cGlyeSBEYXRlOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJjcmVkaXRFeHBpcnlcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjcmVkaXRFeHBpcnlcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXRFeHBpcnk6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DYXJkIENWVjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY3JlZGl0Q1ZWXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3JlZGl0Q1ZWXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0Q1ZWOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+QmlsbGluZyBaaXAgQ29kZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiYmlsbGluZ1ppcFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImJpbGxpbmdaaXBcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBiaWxsaW5nWmlwOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZFwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnBvc3REYXRhKFwiZm9ybTNcIiksIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImZvcm00XCIgfSkgfX0+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTRcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q29uZmlybWF0aW9uIFBhZ2U8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj57dGhpcy5zdGF0ZS5uYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBhc3N3b3JkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucGFzc3dvcmR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3MgTGluZSAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuYWRkcmVzc0xpbmUxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzIExpbmUgMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QWRkcmVzcyBDaXR5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuYWRkcmVzc0NpdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3MgU3RhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5hZGRyZXNzU3RhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3MgWmlwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuYWRkcmVzc1ppcH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGhvbmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5waG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3JlZGl0IENhcmQgTnVtYmVyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuY3JlZGl0TnVtYmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DcmVkaXQgQ2FyZCBFeHBpcnkgRGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmNyZWRpdEV4cGlyeX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3JlZGl0IENWVjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmNyZWRpdENWVn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QmlsbGluZyBaaXAgQ29kZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmJpbGxpbmdaaXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5yZXNldCgpLCB0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJob21lXCIgfSkgfX0+UHVyY2hhc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xMjAwLzEqRXl0MVQtRkgyRlNvMmUxc3lSOHViUS5wbmdcIiB3aWR0aD1cIjQwMHJlbVwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZFwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTFcIiB9KSB9fT5DaGVja291dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==