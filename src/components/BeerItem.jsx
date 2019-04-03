import React, { Component } from 'react';


class BeerItem extends Component {

    constructor(props) {
        super(props);

        this.state = {  
            beerData: props.beerData
        }

    }
    render() { 
        return ( 
            <tr>
                <td></td>
            </tr>

         );
    }
}
 
export default BeerItem;