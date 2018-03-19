import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {red200} from "material-ui/styles/colors";


export const AppButtons = (props) => {
return (
    <div >
    <FloatingActionButton
        style={{
            position: 'fixed',
            left: 50,
            top: 50
        }}
        backgroundColor={red200}
        onClick = {() => props.openModal()}
    >
        <ContentAdd />
    </FloatingActionButton>

    </div>
)
};