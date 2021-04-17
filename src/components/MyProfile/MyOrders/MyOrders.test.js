import { BrowserRouter } from "react-router-dom"
import { render} from "@testing-library/react";


import MyOrders from "./MyOrders";

describe("MyOrders Compoent", () => {
    it("Should display name", () => {
        render(
            <BrowserRouter>
                <MyOrders productName="Pesho" />
            </BrowserRouter>
        );
        expect(document.querySelector("h2").textContent).toBe("Pesho");
    });

    it("Should display description", () => {
        render(
            <BrowserRouter>
                <MyOrders orderNumber="3242" />
            </BrowserRouter>
        );
        expect(document.querySelector("h4").textContent).toBe("Order Number: 3242");
    });
});