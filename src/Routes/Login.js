import React, { useEffect, useState } from 'react'
import { Div, Icon, Button, Container, Notification, Text, Input } from "atomize";
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../core';

const Login = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [values, setValues] = useState({
        loading: false,
        redirectToReferrer: false,
        error: false
    })

    const { loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setData({
            ...data,
            [name]: event.target.value
        });
    }

    const redirectuser = () => {
        if (redirectToReferrer) {
            if (user && user.role === "0") {
                return <Redirect to='/'></Redirect>
            } else {
                return <Redirect to='/login'></Redirect>
            }
        }

        if (isAuthenticated()) {
            return <Redirect to='/'></Redirect>
        }
    }

    const showError = () => {
        return (<Notification
            bg="danger700"
            isOpen={error}
            onClose={() => setValues({ ...values, error: false })}
            prefix={
                <Icon
                    name="CloseSolid"
                    color="white"
                    size="18px"
                    m={{ r: "0.5rem" }}
                />
            }
        >
            Password or Username is incorrect
        </Notification>)
    }

    const submitLogin = event => {
        event.preventDefault();
        setValues({ ...values, loading: true })
        console.log(JSON.stringify(data));
        signin(data)
            .then(data => {
                if (data.error || data.err) {
                    setValues({ ...values, error: data.error || data.err, loading: false })
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true,

                        })
                    })
                }
            }).catch(e => {
                setValues({ ...values, error: e, loading: false })
            })
    }



    return (
        <Container p={{ t: "20px" }} h="100vh" >
            {redirectuser()}
            {showError()}
            <br /><br /><br />
            <Text textAlign="center" textSize="display1" tag="h4">Stocks</Text><br />
            <Div m={{ xs: "20px", md: "auto" }} bg="white" shadow="5" rounded="xl" p="20px" maxW={{ xs: "auto", md: "350px" }}>
                <Text textAlign="center" textSize="heading" m={{ b: "1rem" }}>
                    Login In
        </Text>
                <Input
                    placeholder="username"
                    p={{ x: "2.5rem" }}
                    m={{ b: "1rem" }}
                    prefix={
                        <Icon
                            name="UserSolid"
                            color="warning800"
                            size="16px"
                            cursor="pointer"
                            pos="absolute"
                            top="50%"
                            left="0.75rem"
                            transform="translateY(-50%)"
                        />
                    }
                    onChange={handleChange('username')}
                />
                <Input
                    placeholder="Password"
                    m={{ b: "1rem" }}
                    type={showPassword ? "text" : "password"}
                    suffix={
                        <Button
                            pos="absolute"
                            onClick={() => setshowPassword(!showPassword)}
                            bg="transparent"
                            w="3rem"
                            top="0"
                            right="0"
                            rounded={{ r: "md" }}
                        >
                            <Icon
                                name={showPassword ? "EyeSolid" : "Eye"}
                                color={showPassword ? "danger800" : "success800"}
                                size="16px"
                            />
                        </Button>
                    }
                    onChange={handleChange('password')}
                />

                <Button
                    p={{ x: "2.5rem" }}
                    hoverShadow="2"
                    m={{ r: "1rem" }}
                    bg="info800"
                    hoverBg="info700"
                    onClick={submitLogin}
                    isLoading={loading}
                >
                    Login
        </Button>
            </Div>
        </Container>
    )
}

export default Login
