import React, { useState } from 'react'
import { Div, Icon, Button, Anchor,Dropdown } from "atomize";
import { Link } from 'react-router-dom';

const Home2 = () => {
    const [showDropdown, setShowDropdown] = useState(false)


    const menuList = (
        <Div>
            {["Option 1", "Option 2", "Option 3"].map((name, index) => (
                <Anchor d="block" p={{ y: "0.25rem" }}>
                    {name}
                </Anchor>
            ))}
        </Div>
    );

    return (
        <Div>
            <Dropdown
                w="fit-content"
                isOpen={showDropdown}
                onClick={() =>
                    setShowDropdown(!showDropdown )
                }
                menu={menuList}
            >
                Click me
      </Dropdown>
        <Link to='/'>
        eee22
        </Link>
        </Div>
    )
}

export default Home2
