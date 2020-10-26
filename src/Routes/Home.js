import React, { useState } from 'react'
import { Div, Icon, Button } from "atomize";
import { Link } from 'react-router-dom';

const Home = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <Div>
        <Button>asdsad</Button>
        <Link to='/eee'>
        eee
        </Link>
        </Div>
    )
}

export default Home
