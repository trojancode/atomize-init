import React from 'react'
import { Div, Icon, Row, Text, Col } from "atomize";

const Card = ({title, value, icon, color}) => {

    return (
        <Col size={{ xs: "6", md: "4", lg: "2" }}>
            <Div bg="white" rounded="md" shadow="4" h="100px" m={{ y: "15px" }} p="20px" >
                <Text textColor={color} textWeight="700">
                    {title}
                </Text>
                <Row
                    justify="flex-end"
                    align="flex-end">
                    <Icon color={color} name={icon} m="10px" size="20px" />
                    <Text textColor={color} textAlign="right" textSize="display1" textWeight="700">
                        {value}
                    </Text>
                </Row>
            </Div>
        </Col>
    )
}

export default Card
