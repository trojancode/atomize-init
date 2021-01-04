import React, { useEffect, useState } from 'react'
import { Div, Icon, Button, Anchor, Row, Text, Col } from "atomize";
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import Footer from '../components/Footer';

const Dashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {

    })

    return (
        <Div>
            <DashboardLayout>
                <Footer></Footer>
            </DashboardLayout>


        </Div>
    )
}

export default Dashboard
