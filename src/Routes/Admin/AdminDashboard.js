import React, { useEffect, useState } from 'react'
import { Div, Icon, Button, Anchor, Row, Text, Col } from "atomize";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import AdminDashboardLayout from './AdminDashboardLayout';
import Card from '../../components/Card';

const AdminDashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {

    })

    return (
        <Div>
            <AdminDashboardLayout>
                <Row>
                    <Card title="Teachers" value="179" icon="UserSolid" color="info700" ></Card>
                    <Card title="Students" value="179" icon="UserSolid" color="gray800" ></Card>
                    <Card title="Placements" value="179" icon="BookmarkSolid" color="warning700" ></Card>
                    <Card title="Teachers" value="179" icon="UserSolid" color="brand700" ></Card>
                    <Card title="Teachers" value="179" icon="UserSolid" color="info700" ></Card>
                    <Card title="Teachers" value="179" icon="UserSolid" color="info700" ></Card>
                    <Card title="Teachers" value="179" icon="UserSolid" color="info700" ></Card>
                </Row>
            </AdminDashboardLayout>
        </Div>
    )
}

export default AdminDashboard
