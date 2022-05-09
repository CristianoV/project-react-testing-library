import { render } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import React from "react";
import { Router } from "react-router-dom";

export default function RenderWitchRouter(component) {
    const history = createMemoryHistory();
    return { ...render(<Router history={ history }>{component}</Router>), history}
} 