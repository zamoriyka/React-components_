import React from 'react'
//import {List, ListItem} from 'material-ui/List'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: 200,
    },
};

export const AppList = (props) => {
    return (
<div>
    {/*  <List>
        {props.items.map((item, key) => {
            return (
                <ListItem
                    primaryText = {item.name}  />
            )})}
    </List>
*/}
    <DropDownMenu
       style={styles.customWidth}
       onChange={this.handleChange}
       //value={this.props.name}
    >
        {props.items.map((item, key) => {
            return (
                <MenuItem
                          primaryText = {item.name}
                          openImmediately={true}
                          autoWidth={false}/>
            )
        })
        }
    </DropDownMenu>
    <br />
</div>

)
}

