import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// import Title from "../Header/Title"

test("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

 const loginButton = screen.getByText("Logout",{name : "Logout"})
 expect(loginButton).toBeInTheDocument()
});


it("should render header component with cart  items as 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
   const cartItems = screen.getByText(/Cart/)
   
   expect(cartItems).toBeInTheDocument()
  });
  

  
it("should change Login button to logout onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const logoutButton = screen.getByText("Logout",{name : "Logout"})

    fireEvent.click(logoutButton)

    const loginButton = screen.getByRole("button",{name:"Login"})
  
   
   expect(loginButton).toBeInTheDocument()
  });
  
