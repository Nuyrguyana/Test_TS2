import React from 'react';
import { Card, CardVariant } from "./components/Card";
import { log } from "util";

export const App = () => {
    return (
        <div>
            <Card
                height='200px'
                width='200px'
                variant={CardVariant.primary}
                onClick={(num) => console.log('click', num)}
            >
                <button>BTN</button>
            </Card>
        </div>
    );
};
