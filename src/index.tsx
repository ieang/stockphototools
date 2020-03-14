import * as React from "react";
import * as ReactDOM from "react-dom";

import { StockPage } from "./StockPage";

ReactDOM.render(
    <StockPage compiler="TypeScript" framework="React" />,
    document.getElementById("root-page")
);