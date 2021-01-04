import { Button, Div, Row, Icon, Dropdown, Input, Anchor } from 'atomize'
import React, { useEffect, useState } from 'react'

const Table = ({ data = [{ row: [] }], value = [] }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataValue, setDataValue] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 1,
        count: 10,
        showDropdown: false
    });


    const { pageIndex, count, showDropdown } = pagination;

    const search = (searchValue) => {
        const _value = [];
        value.map((item, i) => {
            if (JSON.stringify(item).toLowerCase().indexOf(searchValue) > -1) {
                _value.push(item)
            }
        });
        setDataValue(_value);
        setPagination({ ...pagination, pageIndex: 1 })
    }

    useEffect(() => {
        setDataValue(value)
    }, [])

    const rows = () => {
        let _result = [];
        const length = (count * pageIndex) > dataValue.length ? dataValue.length : (count * pageIndex);
        for (let i = 0; i < length; i++) {
            const item = dataValue[i];
            if (i < (count * (pageIndex - 1))) {
                continue;
            }
            _result.push(
                <tr key={i}>
                    {
                        data.map((_item, _i) => (
                            <td key={_i} >
                                { _item.key && item[_item.key]}
                                { _item.row && (
                                    <Div d="flex" key={_i+i}>
                                        {
                                            _item.row.map((_element, key) => (
                                                _element(item,key)
                                            ))
                                        }
                                    </Div>
                                )}
                            </td>
                        ))
                    }
                </tr>
            )
        }
        return _result;
    }

    const paginationButtons = () => {
        let _result = [];
        let _pageIndex = 1;
        _result.push(
            <Button
                h="1.5rem"
                w="1rem"
                bg="white"
                key="back"
                hoverBg={pageIndex > 1 ? "gray400" : "white"}
                rounded="lg"
                textColor="black400"
                textSize="caption"
                m={{ r: "0.6rem" }}
                onClick={(e) => {
                    if (pageIndex > 1) {
                        setPagination({ ...pagination, pageIndex: pageIndex - 1 })
                    }
                }}
            >
                <Icon name="Back" color={pageIndex > 1 ? "black900" : "gray700"} size="20px" />
            </Button>
        )
        for (let i = 0; i < dataValue.length; i = i + count) {
            _result.push(
                _pageIndex < (pageIndex - 1) || _pageIndex > (pageIndex + 1) ? ("") : (
                    <Button
                        key={i}
                        h="1.5rem"
                        w="1rem"
                        bg={_pageIndex === pageIndex ? "gray400" : "white"}
                        hoverBg="gray400"
                        rounded="lg"
                        textColor="black400"
                        textSize="caption"
                        m={{ r: "0.6rem" }}
                        onClick={(e) => {
                            setPagination({ ...pagination, pageIndex: (i / count + 1) })
                        }}
                    >
                        {_pageIndex}
                    </Button>
                ))
            _pageIndex++;
        }

        _result.push(
            <Button
                h="1.5rem"
                w="1rem"
                bg="white"
                key="next"
                hoverBg={pageIndex < dataValue.length / count ? "gray400" : "white"}
                rounded="lg"
                textColor="black400"
                textSize="caption"
                m={{ r: "0.6rem" }}
                onClick={(e) => {
                    if (pageIndex < dataValue.length / count) {
                        setPagination({ ...pagination, pageIndex: pageIndex + 1 })
                    }
                }}
            >
                <Icon name="Next" color={pageIndex < dataValue.length / count ? "black900" : "gray700"} size="20px" />
            </Button>
        )
        return _result
    }


    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }}>
            {[10, 25, 50, 100, 500].map((name, index) => (
                <Anchor d="block" key={index} p={{ y: "0.25rem" }} onClick={(e) => setPagination({ ...pagination, showDropdown: !showDropdown, count: name })}>
                    {name}
                </Anchor>
            ))}
        </Div>
    );

    return (
        <Div >
            <Div textAlign="right">
                <Row m={{ b: '10px' }}>
                    <Dropdown
                        h="1.8rem"
                        w="fit-content"
                        isOpen={showDropdown}
                        value={count}
                        m={{ l: "auto", r: "10px" }}
                        onClick={() =>
                            setPagination({ ...pagination, showDropdown: !showDropdown })
                        } onChange={(e) => {
                            alert("ASdas")
                        }}
                        menu={menuList}
                    >
                        {count}
                    </Dropdown>
                    <Input
                        placeholder="Search"
                        h="1.8rem"
                        d="inline-block"
                        onChange={(e) => search(e.target.value)}
                        suffix={
                            <Button
                                pos="absolute"
                                onClick={() => setIsLoading(!isLoading)}
                                bg="transparent"
                                w="1.8rem"
                                h="1.8rem"
                                top="0"
                                right="0"
                                rounded={{ r: "md" }}
                            >
                                <Icon
                                    name={isLoading ? "Loading" : "Search"}
                                    color={isLoading ? "gray900" : "black"}
                                    size="16px"
                                />
                            </Button>
                        }
                    />
                </Row>
            </Div>
            <Div border="1px solid" borderColor="#C9CED650" maxW="calc(100vw - 40px)" style={{ overflowX: "auto" }}>

                <table style={{ textAlign: "left" }}>
                    <thead>
                        <tr>
                            {
                                data.map((item, i) => (
                                    <th key={i} >
                                        {item.title}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows()}
                    </tbody>
                </table>
            </Div>
            <Div >
                <Row p={{ x: "20px", t: "2.5rem" }} justify="center">
                    {paginationButtons()}
                </Row>
            </Div>
        </Div>
    )
}

export default Table
