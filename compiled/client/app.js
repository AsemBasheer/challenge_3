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
        console.log(this.state);
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
                    null,
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
                    null,
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
                    null,
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
                        this.setState({ page: "form2" });
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
                        null,
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
                        null,
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
                        null,
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
                        null,
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
                        null,
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
                        null,
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
                            this.setState({ page: "form3" });
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
                    null,
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
                    null,
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
                    null,
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
                    null,
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
                        this.setState({ page: "form4" });
                    } },
                "next"
            )
        ) : this.state.page === "form4" ? React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "confirmation page"
            ),
            React.createElement(
                "button",
                { className: "w3-button w3-red", onClick: () => {
                        this.test(), this.setState({ page: "home" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicGFnZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0NpdHkiLCJhZGRyZXNzU3RhdGUiLCJhZGRyZXNzWmlwIiwicGhvbmUiLCJjcmVkaXROdW1iZXIiLCJjcmVkaXRFeHBpcnkiLCJjcmVkaXRDVlYiLCJiaWxsaW5nWmlwIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxrQkFBTSxNQURHO0FBRVRDLGtCQUFNLEVBRkc7QUFHVEMsbUJBQU8sRUFIRTtBQUlUQyxzQkFBVSxFQUpEO0FBS1RDLDBCQUFjLEVBTEw7QUFNVEMsMEJBQWMsRUFOTDtBQU9UQyx5QkFBYSxFQVBKO0FBUVRDLDBCQUFjLEVBUkw7QUFTVEMsd0JBQVksRUFUSDtBQVVUQyxtQkFBTyxFQVZFO0FBV1RDLDBCQUFjLEVBWEw7QUFZVEMsMEJBQWMsRUFaTDtBQWFUQyx1QkFBVyxFQWJGO0FBY1RDLHdCQUFZO0FBZEgsU0FBYjtBQWdCSDs7QUFFREMsV0FBTztBQUNIQyxnQkFBUUMsR0FBUixDQUFZLEtBQUtqQixLQUFqQjtBQUNIOztBQUVEa0IsYUFBUztBQUNMLGVBQ0ksS0FBS2xCLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixPQUFwQixHQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFV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LCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IFwiaG9tZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NMaW5lMTogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc0xpbmUyOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzQ2l0eTogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc1N0YXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzWmlwOiBcIlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0TnVtYmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXRFeHBpcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdENWVjogXCJcIixcclxuICAgICAgICAgICAgYmlsbGluZ1ppcDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTFcIiA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5OYW1lOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZX0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5FbWFpbCBBZGRyZXNzOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZX0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5QYXNzd29yZDo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJmb3JtMlwiIH0pIH19Pm5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID09PSBcImZvcm0yXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPkFkZHJlc3MgTGluZSAxOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJhZGRyZXNzMVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc0xpbmUxOiBlLnRhcmdldC52YWx1ZX0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPkFkZHJlc3MgTGluZSAyOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJhZGRyZXNzMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc0xpbmUyOiBlLnRhcmdldC52YWx1ZX0pfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmc+Q2l0eTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzQ2l0eTogZS50YXJnZXQudmFsdWV9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5TdGF0ZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwic3RhdGVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NTdGF0ZTogZS50YXJnZXQudmFsdWV9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5aaXAgLyBQb3N0YWwgQ29kZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiemlwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwX2NvZGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzWmlwOiBlLnRhcmdldC52YWx1ZX0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPlBob25lIE51bWJlcjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwicGhvbmVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZV9udW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwaG9uZTogZS50YXJnZXQudmFsdWV9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZFwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTNcIiB9KSB9fT5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID09PSBcImZvcm0zXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPkNyZWRpdCBDYXJkIE51bWJlcjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY3JlZGl0TnVtYmVyXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3JlZGl0TnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0TnVtYmVyOiBlLnRhcmdldC52YWx1ZX0pfSAgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5DcmVkaXQgQ2FyZCBFeHBpcnkgRGF0ZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY3JlZGl0RXhwaXJ5XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3JlZGl0RXhwaXJ5XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0RXhwaXJ5OiBlLnRhcmdldC52YWx1ZX0pfSAgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5DYXJkIENWVjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY3JlZGl0Q1ZWXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3JlZGl0Q1ZWXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0Q1ZWOiBlLnRhcmdldC52YWx1ZX0pfSAgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5CaWxsaW5nIFppcCBDb2RlOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJiaWxsaW5nWmlwXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYmlsbGluZ1ppcFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJpbGxpbmdaaXA6IGUudGFyZ2V0LnZhbHVlfSl9ICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4ge3RoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImZvcm00XCIgfSkgfX0+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTRcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb25maXJtYXRpb24gcGFnZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4ge3RoaXMudGVzdCgpLHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImhvbWVcIiB9KSB9fT5QdXJjaGFzZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzEyMDAvMSpFeXQxVC1GSDJGU28yZTFzeVI4dWJRLnBuZ1wiIHdpZHRoPVwiNDAwcmVtXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgcGFnZTogXCJmb3JtMVwiIH0pIH19PkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19