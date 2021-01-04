import React, { Fragment, useEffect, useState } from 'react'
import { Div, Icon, Button, SideDrawer, Row, Text, Col, currentDevice, Container } from "atomize";
import { isAuthenticated, signout } from '../../core';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';

const AdminDashboardLayout = ({ isLoading = false, children }) => {
    const [deviseSize, setDeviseSize] = useState('')
    const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false)

    useEffect(() => {
        setDeviseSize(currentDevice())
    }, [])

    const history = useHistory();

    const { user } = isAuthenticated();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard"
        },
        {
            name: "Teachers",
            path: "/admin/teachers"
        },
        {
            name: "Students",
            path: "/admin/students"
        },
        {
            name: "Department",
            path: "/admin/department"
        },
        {
            name: "Program",
            path: "/admin/program"
        },
        {
            name: "Placements",
            path: "/admin/palcements"
        },
        {
            name: "Exam",
            path: "/admin/exam"
        },
        {
            name: "Clubs",
            path: "/admin/clubs"
        },
        {
            name: "Batch",
            path: "/admin/batch"
        }
    ]

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
                        {user && user.name}
                    </Button>
                    <Button bg="danger700"
                        rounded="lg"
                        m={{ r: "1rem", b: "10px" }}
                        h="30px"
                        onClick={(e) => {
                            signout(() => {
                                history.push('/login');
                            })
                        }}
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
            return (<Button bg="transparent" h="30px" onClick={(e) => setSideDrawerIsOpen(true)} >
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
                {
                    menuItems.map((item, i) => (
                        <Button
                            key={i}
                            bg={history.location.pathname == item.path ? "gray400" : "white"}
                            hoverBg="gray400"
                            rounded="0"
                            m={{ r: "1rem", b: "10px" }}
                            h="30px"
                            w="100%"
                            textColor="black400"
                            onClick={(e) => {
                                history.push(item.path)
                            }}
                        >
                            {item.name}
                        </Button>
                    ))
                }
            </Fragment>
        )
    }

    const showSideBar = () => {
        return <Div w="200px" maxW="20vw" bg="white" shadow="4" minH="calc(100vh - 80px)" p={{ x: "10px", y: "20px" }}>
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
                >

                    <Text
                        textSize="body"
                        textColor="info800"
                        tag="h1"
                    >
                        DMS
                    </Text>
                    <Text
                        m={{ x: { xs: "0.2rem", md: "1rem" }, t: "2px" }}
                        textSize="body"
                        textColor="black700"
                    >
                        Admin
                    </Text>
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
                    <Text
                        m={{ x: { sm: "0rem", md: "1rem" }, t: "2px" }}
                        textSize="body"
                    >
                        Dashboard
                    </Text>
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
                                    {user && user.name}
                                </Button>
                                <Button bg="danger700"
                                    rounded="0"
                                    m={{ r: "1rem", b: "10px" }}
                                    h="30px"
                                    w="30px"
                                    onClick={(e) => {
                                        signout(() => {
                                            history.push('/login');
                                        })
                                    }}
                                >
                                    <Icon name="Logout" color="white" size="18px" />
                                </Button>
                            </Row>
                        </Div>
                    )
                    }
                </Row>
            </Div>
        )
    }



    return (
        <Div>
            {firstNavBar()}
            {secondNavBar()}
            {sizeSideDrawer()}
            <Row w="100%" m={{ x: "0px" }}>
                {!sideBarCal() && showSideBar()}
                <Div p="10px" flexGrow="1">
                    {
                        isLoading ? (
                            <Div w="100%" h="500px" className="loading" textAlign="center" >
                            <Icon name="Loading2" m={{l:!sideBarCal()?"-50px":"-25px"}} size="50px" color="info700" className="loading-center" />
                            </Div>
                        ) : !sideBarCal() ? (
                            <Div p={{ x: "20px", y: "20px" }}>
                                {children}
                            </Div>
                        ) : (
                                    <Div p={{ x: "10px", y: "10px" }}>
                                        {children}
                                    </Div>
                                )
                    }
                    <Footer></Footer>
                </Div>
            </Row>
        </Div>
    )
}

export default AdminDashboardLayout
