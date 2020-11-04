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
        // .then(response => response.json())
        // .then(json => console.log(json))
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
                        this.setState({ page: "home" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicGFnZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0NpdHkiLCJhZGRyZXNzU3RhdGUiLCJhZGRyZXNzWmlwIiwicGhvbmUiLCJjcmVkaXROdW1iZXIiLCJjcmVkaXRFeHBpcnkiLCJjcmVkaXRDVlYiLCJiaWxsaW5nWmlwIiwicG9zdERhdGEiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlbmRlciIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNLE1BREc7QUFFVEMsa0JBQU0sRUFGRztBQUdUQyxtQkFBTyxFQUhFO0FBSVRDLHNCQUFVLEVBSkQ7QUFLVEMsMEJBQWMsRUFMTDtBQU1UQywwQkFBYyxFQU5MO0FBT1RDLHlCQUFhLEVBUEo7QUFRVEMsMEJBQWMsRUFSTDtBQVNUQyx3QkFBWSxFQVRIO0FBVVRDLG1CQUFPLEVBVkU7QUFXVEMsMEJBQWMsRUFYTDtBQVlUQywwQkFBYyxFQVpMO0FBYVRDLHVCQUFXLEVBYkY7QUFjVEMsd0JBQVk7QUFkSCxTQUFiO0FBZ0JIOztBQUVEQyxhQUFTQyxHQUFULEVBQWM7QUFDVkMsY0FBTyxHQUFFRCxHQUFJLEVBQWIsRUFBZ0I7QUFDWkUsb0JBQVEsTUFESTtBQUVaQyxrQkFBTUMsS0FBS0MsU0FBTCxDQUFlLEtB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QUFSLEVBQWQ7QUFBa0MscUJBQXhGO0FBQUE7QUFBQTtBQUZKLFNBNUdwQjtBQWlISDtBQW5KNkI7QUFxSmxDMkIsU0FBU0wsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCTSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYWdlOiBcImhvbWVcIixcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzTGluZTE6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NMaW5lMjogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc0NpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NTdGF0ZTogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc1ppcDogXCJcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdE51bWJlcjogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0RXhwaXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXRDVlY6IFwiXCIsXHJcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3REYXRhKHVybCkge1xyXG4gICAgICAgIGZldGNoKGAke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAvLyAudGhlbihqc29uID0+IGNvbnNvbGUubG9nKGpzb24pKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTFcIiA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+TmFtZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5FbWFpbCBBZGRyZXNzOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlBhc3N3b3JkOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4ge3RoaXMucG9zdERhdGEoXCJmb3JtMVwiKSx0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJmb3JtMlwiIH0pfX0+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTJcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkFkZHJlc3MgTGluZSAxOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJhZGRyZXNzMVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc0xpbmUxOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+QWRkcmVzcyBMaW5lIDI6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImFkZHJlc3MyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzTGluZTI6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DaXR5Ojwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NDaXR5OiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+U3RhdGU6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cInN0YXRlXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzU3RhdGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5aaXAgLyBQb3N0YWwgQ29kZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiemlwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwX2NvZGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzWmlwOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+UGhvbmUgTnVtYmVyOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJwaG9uZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lX251bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBob25lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZFwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnBvc3REYXRhKFwiZm9ybTJcIiksIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImZvcm0zXCIgfSkgfX0+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gXCJmb3JtM1wiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q3JlZGl0IENhcmQgTnVtYmVyOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJjcmVkaXROdW1iZXJcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjcmVkaXROdW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXROdW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DcmVkaXQgQ2FyZCBFeHBpcnkgRGF0ZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY3JlZGl0RXhwaXJ5XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3JlZGl0RXhwaXJ5XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0RXhwaXJ5OiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q2FyZCBDVlY6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImNyZWRpdENWVlwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNyZWRpdENWVlwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNyZWRpdENWVjogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkJpbGxpbmcgWmlwIENvZGU6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImJpbGxpbmdaaXBcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJiaWxsaW5nWmlwXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYmlsbGluZ1ppcDogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wb3N0RGF0YShcImZvcm0zXCIpLCB0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJmb3JtNFwiIH0pIH19Pm5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID09PSBcImZvcm00XCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNvbmZpcm1hdGlvbiBQYWdlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e3RoaXMuc3RhdGUubmFtZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FbWFpbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QYXNzd29yZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnBhc3N3b3JkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzIExpbmUgMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QWRkcmVzcyBMaW5lIDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5hZGRyZXNzTGluZTJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3MgQ2l0eTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmFkZHJlc3NDaXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzIFN0YXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuYWRkcmVzc1N0YXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzIFppcDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmFkZHJlc3NaaXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBob25lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNyZWRpdCBDYXJkIE51bWJlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmNyZWRpdE51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3JlZGl0IENhcmQgRXhwaXJ5IERhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5jcmVkaXRFeHBpcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNyZWRpdCBDVlY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5jcmVkaXRDVlZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkJpbGxpbmcgWmlwIENvZGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5iaWxsaW5nWmlwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJob21lXCIgfSkgfX0+UHVyY2hhc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xMjAwLzEqRXl0MVQtRkgyRlNvMmUxc3lSOHViUS5wbmdcIiB3aWR0aD1cIjQwMHJlbVwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZFwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTFcIiB9KSB9fT5DaGVja291dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==