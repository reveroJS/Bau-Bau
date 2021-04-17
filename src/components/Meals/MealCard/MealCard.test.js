import { BrowserRouter } from "react-router-dom"
import { render, screen, fireEvent, waitFor} from "@testing-library/react";


import MealCard from "./MealCard";

describe("MealCard Compoent", () => {
    it("Should display name", () => {
        render(
            <BrowserRouter>
                <MealCard name="Pesho" />
            </BrowserRouter>
        );
        expect(document.querySelector("h2").textContent).toBe("Pesho");
    });

    it("Should display description", () => {
        render(
            <BrowserRouter>
                <MealCard description="Lorem ipsum dolor sit." />
            </BrowserRouter>
        );
        expect(document.querySelector("p").textContent).toBe("Lorem ipsum dolor sit.");
    });

    it("Should redirect to details with Id", async () => {
        render(
            <BrowserRouter>
                <MealCard id="someId" />
            </BrowserRouter >
        )
        let link = screen.getByText("See More").href;
        expect(link).toBe("http://localhost/meals/detail/someId")
    });

    it("Should have imageUrl", () => {
        render(
            <BrowserRouter>
                <MealCard imageUrl="https://i.postimg.cc/SQMdPLYq/lamb1.jpg" />
            </BrowserRouter>
        );
           
        let image = document.querySelector("img").src
        expect(image).toBe("https://i.postimg.cc/SQMdPLYq/lamb1.jpg");
    });
});