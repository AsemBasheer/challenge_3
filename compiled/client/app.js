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

    clearFields() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
    clearFields1() {
        document.getElementById("address1").value = "";
        document.getElementById("address2").value = "";
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
        document.getElementById("zip").value = "";
        document.getElementById("phone").value = "";
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
                React.createElement("input", { id: "email", type: "text", name: "email", className: "form-control" })
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
                React.createElement("input", { id: "password", type: "password", name: "password", className: "form-control" })
            ),
            React.createElement(
                "button",
                { className: "w3-button w3-red", onClick: () => {
                        this.clearFields(), this.setState({ page: "form2" });
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
                    React.createElement("input", { id: "address1", type: "text", name: "address1", className: "form-control", onChange: e => this.setState({ adaddressLine1: e.target.value }) })
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
                    React.createElement("input", { id: "address2", type: "text", name: "address2", className: "form-control" })
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
                    React.createElement("input", { id: "city", type: "text", name: "city", className: "form-control" })
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
                    React.createElement("input", { id: "state", type: "text", name: "state", className: "form-control" })
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
                    React.createElement("input", { id: "zip", type: "text", name: "zip_code", className: "form-control" })
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
                    React.createElement("input", { id: "phone", type: "text", name: "phone_number", className: "form-control" })
                ),
                React.createElement(
                    "button",
                    { className: "w3-button w3-red", onClick: () => {
                            this.clearFields1(), this.setState({ page: "form3" });
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
                React.createElement("input", { id: "creditNumber", type: "text", className: "form-control", name: "creditNumber" })
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
                React.createElement("input", { id: "creditExpiry", type: "text", className: "form-control", name: "creditExpiry" })
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
                React.createElement("input", { id: "creditCVV", type: "text", className: "form-control", name: "creditCVV" })
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
                React.createElement("input", { id: "billingZip", type: "text", className: "form-control", name: "billingZip" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicGFnZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0NpdHkiLCJhZGRyZXNzU3RhdGUiLCJhZGRyZXNzWmlwIiwicGhvbmUiLCJjcmVkaXROdW1iZXIiLCJjcmVkaXRFeHBpcnkiLCJjcmVkaXRDVlYiLCJiaWxsaW5nWmlwIiwiY2xlYXJGaWVsZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJjbGVhckZpZWxkczEiLCJyZW5kZXIiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJhZGFkZHJlc3NMaW5lMSIsIlJlYWN0RE9NIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNLE1BREc7QUFFVEMsa0JBQU0sRUFGRztBQUdUQyxtQkFBTyxFQUhFO0FBSVRDLHNCQUFVLEVBSkQ7QUFLVEMsMEJBQWMsRUFMTDtBQU1UQywwQkFBYyxFQU5MO0FBT1RDLHlCQUFhLEVBUEo7QUFRVEMsMEJBQWMsRUFSTDtBQVNUQyx3QkFBWSxFQVRIO0FBVVRDLG1CQUFPLEVBVkU7QUFXVEMsMEJBQWMsRUFYTDtBQVlUQywwQkFBYyxFQVpMO0FBYVRDLHVCQUFXLEVBYkY7QUFjVEMsd0JBQVk7QUFkSCxTQUFiO0FBZ0JIOztBQUVEQyxrQkFBYztBQUNWQyxpQkFBU0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FBaEMsR0FBd0MsRUFBeEM7QUFDQUYsaUJBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLEtBQWpDLEdBQXlDLEVBQXpDO0FBQ0FG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QUtELEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixPQUFwQixHQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBUSxXQUFVLGtCQUFsQixFQUFxQyxTQUFTLE1BQU07QUFBQyw2QkFBS3FCLFFBQUwsQ0FBYyxFQUFFckIsTUFBTSxNQUFSLEVBQWQ7QUFBaUMscUJBQXRGO0FBQUE7QUFBQTtBQUZKLFNBREosR0FNSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGtEQUFmO0FBQ0kseUNBQUssS0FBSSwrREFBVCxFQUF5RSxPQUFNLFFBQS9FLEdBREo7QUFFSTtBQUFBO0FBQUEsa0JBQVEsV0FBVSxrQkFBbEIsRUFBcUMsU0FBUyxNQUFNO0FBQUUsNkJBQUtxQixRQUFMLENBQWMsRUFBRXJCLE1BQU0sT0FBUixFQUFkO0FBQWtDLHFCQUF4RjtBQUFBO0FBQUE7QUFGSixTQWxEcEI7QUF1REg7QUEzRjZCO0FBNkZsQ3dCLFNBQVNMLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkosU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZTogXCJob21lXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgYWRkcmVzc0xpbmUxOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzTGluZTI6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NDaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzU3RhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NaaXA6IFwiXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXROdW1iZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdEV4cGlyeTogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0Q1ZWOiBcIlwiLFxyXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpZWxkcygpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY2xlYXJGaWVsZHMxKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkcmVzczFcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkcmVzczJcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6aXBcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPT09IFwiZm9ybTFcIiA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5OYW1lOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZX0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5FbWFpbCBBZGRyZXNzOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPlBhc3N3b3JkOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuY2xlYXJGaWVsZHMoKSwgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTJcIiB9KSB9fT5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gXCJmb3JtMlwiID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5BZGRyZXNzIExpbmUgMTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiYWRkcmVzczFcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkYWRkcmVzc0xpbmUxOiBlLnRhcmdldC52YWx1ZX0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPkFkZHJlc3MgTGluZSAyOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJhZGRyZXNzMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5DaXR5Ojwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPlN0YXRlOjwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48aW5wdXQgaWQ9XCJzdGF0ZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5aaXAgLyBQb3N0YWwgQ29kZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiemlwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwX2NvZGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5QaG9uZSBOdW1iZXI6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cInBob25lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVfbnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZFwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmNsZWFyRmllbGRzMSgpLCAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTNcIiB9KSB9fT5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID09PSBcImZvcm0zXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPkNyZWRpdCBDYXJkIE51bWJlcjo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY3JlZGl0TnVtYmVyXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3JlZGl0TnVtYmVyXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHN0cm9uZz5DcmVkaXQgQ2FyZCBFeHBpcnkgRGF0ZTo8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PGlucHV0IGlkPVwiY3JlZGl0RXhwaXJ5XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3JlZGl0RXhwaXJ5XCIgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxzdHJvbmc+Q2FyZCBDVlY6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImNyZWRpdENWVlwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNyZWRpdENWVlwiICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48c3Ryb25nPkJpbGxpbmcgWmlwIENvZGU6PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjxpbnB1dCBpZD1cImJpbGxpbmdaaXBcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJiaWxsaW5nWmlwXCIgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiZm9ybTRcIiB9KSB9fT5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gXCJmb3JtNFwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmNvbmZpcm1hdGlvbiBwYWdlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IFwiaG9tZVwiIH0pIH19PlB1cmNoYXNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMTIwMC8xKkV5dDFULUZIMkZTbzJlMXN5Ujh1YlEucG5nXCIgd2lkdGg9XCI0MDByZW1cIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWRcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBcImZvcm0xXCIgfSkgfX0+Q2hlY2tvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=