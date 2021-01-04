import React from 'react'
import { Div, Icon, Button, Anchor, Row, Text, Col } from "atomize";

const Footer = () => {
    return (
        <Div justify="center"
            textAlign="center" m={{t:"40px"}} textSize="caption" d="flex" textColor="gray800" p="10px">
            Made by &nbsp; <Text textSize="caption" textColor="black700"> trojancode</Text>
        </Div>
    )
}

export default Footer
