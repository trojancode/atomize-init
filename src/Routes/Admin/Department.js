import React, { useEffect, useState } from 'react'
import { Div, Icon, Button, Modal, Row, Text, Col, Label, Input } from "atomize";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import AdminDashboardLayout from './AdminDashboardLayout';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { getDepartments } from '../../core/apiCore';

const Department = () => {
    const [editValues, setEditValues] = useState({
        show: false,
        isLoading: false,
        data: {}
    })

    const [data, setData] = useState({
        datas: [],
        isLoading: false,
        error: false
    })

    const { datas, isLoading } = data;

    useEffect(() => {
        fetchDepartment()
    }, [])


    const fetchDepartment = () => {
        setData({ ...data, isLoading: true })
        getDepartments().then(data => {
            if (data.error) {
                setData({ ...data, isLoading: false })
                console.log(data.error);
            } else {
                setData({ ...data, datas: data, isLoading: false })
            }
        })
    }

    const editDep = () => {
        return (
            <Modal
                isOpen={editValues.show}
                onClose={(e) => setEditValues({ ...editValues, show: !editValues.show })}
                m={{ y: "4rem", x: { xs: "1rem", lg: "auto" } }}
                rounded="xl"
            >
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="16px"
                    onClick={(e) => setEditValues({ ...editValues, show: !editValues.show })}
                    cursor="pointer"
                />
                <Text
                    p={{ l: "0.5rem", t: "0.25rem" }}
                    tag="h6"
                    m={{ b: "2rem" }}
                >
                    Edit Department - {editValues.data.name}
                </Text>

                <Label tag="asdasd">
                    <Input placeholder="Department Name" h="2rem" />
                </Label>



                <Div d="flex" justify="flex-end">
                    <Button
                        onClick={(e) => setEditValues({ ...editValues, show: !editValues.show })}
                        bg="gray200"
                        textColor="medium"
                        m={{ r: "1rem" }}
                    >
                        Cancel
                    </Button>
                            <Button
                                isLoading={editValues.isLoading}
                                onClick={(e) => setEditValues({ ...editValues, show: !editValues.show })}
                                bg={editValues.isLoading ? "info300" : "info700"}
                            >
                                Yes, Submit
                    </Button>
                </Div>
            </Modal>
        )
    }

    return (
        <Div>
            {editDep()}
            <AdminDashboardLayout isLoading={isLoading}>
                <Table data={[
                    {
                        title: "Name",
                        key: "name"
                    },
                    {
                        title: "Hod",
                        key: "hod_user_name"
                    },
                    {
                        title: "Hod email",
                        key: "email"
                    },
                    {
                        title: "Manage",
                        row: [
                            (data, key) => (
                                <Button
                                    key={key}
                                    h="2rem"
                                    w="2rem"
                                    bg="info300"
                                    hoverBg="info400"
                                    rounded="lg"
                                    m={{ x: "0.5rem" }}
                                    onClick={(e) => setEditValues({ ...editValues, show: true, data: data })}
                                >
                                    <Icon name="Edit" color="info800" size="18px" />
                                </Button>
                            ),
                            (data, key) => (
                                <Button
                                    key={key}
                                    h="2rem"
                                    w="2rem"
                                    bg="danger300"
                                    hoverBg="danger400"
                                    rounded="lg"
                                    m={{ x: "0.5rem" }}
                                    onClick={(e) => alert(data.name)}
                                >
                                    <Icon name="Delete" color="danger800" size="18px" />
                                </Button>
                            )
                        ]
                    },


                ]}
                    value={datas}
                >

                </Table>
            </AdminDashboardLayout>
        </Div>
    )
}

export default Department
