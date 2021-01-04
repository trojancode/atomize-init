import React, { Fragment, useEffect, useState } from 'react'
import { Div, Icon, Button, SideDrawer, Row, Text, Col, currentDevice } from "atomize";

const DashboardLayout = ({ children }) => {
    const [deviseSize, setDeviseSize] = useState('')
    const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false)

    useEffect(() => {
        setDeviseSize(currentDevice())
    }, [])

    const sizeSideDrawer = () => {
        return (

            <SideDrawer isOpen={sideDrawerIsOpen} onClose={(e) => setSideDrawerIsOpen(false)} w={{ xs: "12rem", sm: "12rem" }}>
                <Div minH="calc(100vh - 104px)">
                    {sideBarContent()}
                </Div>
                <Div textSize="body" h="80px">

                    <Button
                        bg="white"
                        hoverBg="gray400"
                        rounded="lg"
                        m={{ r: "1rem", b: "10px" }}
                        h="30px"
                        w="100%"
                        textColor="black400"
                    >
                        Admin
                    </Button>
                    <Button bg="danger700"
                        rounded="lg"
                        m={{ r: "1rem", b: "10px" }}
                        h="30px"

                        w="100%"
                    >
                        Logout
                    </Button>
                </Div>
            </SideDrawer>
        );
    };


    const showHamberg = () => {
        if (sideBarCal()) {
            return (<Button bg="transparent" onClick={(e) => setSideDrawerIsOpen(true)} >
                <Icon name="Menu" size="20px" />
            </Button>);
        }
    }

    const sideBarCal = () => {
        if (deviseSize == "xs" || deviseSize == "sm" || deviseSize == "md") {
            return true;
        } else {
            return false;
        }
    }

    const sideBarContent = () => {
        return (
            <Fragment>
                <Button
                    bg="white"
                    hoverBg="gray400"
                    rounded="lg"
                    m={{ r: "1rem", b: "10px" }}
                    h="30px"
                    w="100%"
                    textColor="black400"
                >
                    Dashboard
                    </Button>

                <Button
                    bg="white"
                    hoverBg="gray400"
                    rounded="lg"
                    m={{ r: "1rem", y: "auto" }}
                    h="30px"
                    w="100%"
                    textColor="black400"
                >
                    Dashboard
                    </Button>
            </Fragment>
        )
    }

    const showSideBar = () => {
        return <Div w="200px" maxW="20vw" bg="white" shadow="4" h="calc(100vh - 80px)" p={{ x: "10px", y: "20px" }}>
            {sideBarContent()}
        </Div>
    }

    const firstNavBar = () => {
        return (<Div h="40px" bg="white" shadow="2" >
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
                {/* 
                <Col size={{ xs: "auto", md: "7" }} p={{ y: "5px" }}>
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
                </Col> */}
            </Row>

        </Div>)
    }


    const secondNavBar = () => {
        return (
            <Div h="40px" bg="gray300" shadow="2" >
                <Row w="100%" p={{ y: "5.5px" }}>
                    {showHamberg()}
                    <Button
                        bg="transparent"
                        hoverBg="white"
                        rounded="lg"
                        m={{ x: { sm: "0rem", md: "1rem" },}}
                        h="30px"
                        textColor="black400"
                    >
                        Admin  Dashboard
                    </Button>
                    {!sideBarCal() && (
                        <Div m={{ l: "auto" }}>
                                <Row >
                                    <Button
                                        bg="transparent"
                                        hoverBg="gray400"
                                        rounded="lg"
                                        h="30px"
                                        textColor="black400"
                                    >
                                        Admin
                                </Button>
                                    <Button bg="danger700"
                                        rounded="0"
                                        m={{ r: "1rem", b: "10px" }}
                                        h="30px"
                                        w="30px"
                                    >
                                       <Icon name="Logout" color="white" size="18px" />
                                </Button>
                                </Row>
                        </Div>
                    )
                    }
                </Row>
            </Div>)
    }



    return (
        <Div>
            {firstNavBar()}
            {secondNavBar()}
            {sizeSideDrawer()}
            <Row w="100%">
                {!sideBarCal() && showSideBar()}
                <Div p="10px" flexGrow="1">{children}</Div>
            </Row>
        </Div>
    )
}

export default DashboardLayout
