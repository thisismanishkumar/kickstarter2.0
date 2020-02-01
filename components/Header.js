import React from "react";
import { Menu } from "semantic-ui-react";
import {Link} from '../routes';

export default ()=> {
    
        return (
            <Menu style ={{marginTop:'20px'}} >
                <Link route='/'>
                    <a className='item'>
                        Kickstarter 2.0
                    </a>
                </Link>
                <Menu.Menu position="right">
                    <Menu.Item primary ="true"
                    >
                        Campaign
        </Menu.Item>
                    <Menu.Item primary = "true">
                    +
        </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    
}
