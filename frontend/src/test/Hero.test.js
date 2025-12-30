import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';


import Hero from "../landing_page/home/Hero";

//Test Suite
describe("Hero Component", () => {
    test("render hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test("render hero image", () => {
        render(<Hero />);
        const signUpButton = screen.getByRole("button", { name: "Signup Now"});
        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveClass("btn-primary");
    });
});