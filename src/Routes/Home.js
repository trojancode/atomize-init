import React, { useState } from 'react'
import { Div, Row, Col, Button } from "atomize";
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const history=useHistory();
    return (
        <Div h="40px" bg="white" shadow="2" >
            <Row w="100%" p={{ y: "5px" }}>
                <Button
                    bg="white"
                    hoverBg="white"
                    rounded="lg"
                    m={{ x: "1rem", y: "auto" }}
                    h="30px"
                    textColor="info800"
                >
                    DMS
                </Button>
                <Div m={{ l: "auto" }}>

                    <Row>
                        <Button
                            bg="white"
                            hoverBg="gray400"
                            rounded="lg"
                            m={{ r: "1rem", y: "auto" }}
                            h="30px"
                            textColor="black400"
                        >
                            About
                        </Button>
                        
                        <Button
                            bg="white"
                            hoverBg="gray400"
                            rounded="lg"
                            m={{ r: "1rem", y: "auto" }}
                            h="30px"
                            textColor="black400"
                            onClick={(e)=>{
                                history.push("/admin/dashboard")
                            }}
                        >
                            Login
                        </Button>
                    </Row>
                </Div>

            </Row>

        </Div>
    )
}

export default Home
