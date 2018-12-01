import React, { Component } from 'react';
import Bur from '../../hoc/Bur';

class BurgerBuilder extends Component {
    render() {
        return(
            <Bur>
                <div>
                    Burger
                </div>
                <div>
                    Build Controils
                </div>
            </Bur>
        )
    }
}

export default BurgerBuilder;