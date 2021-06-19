import React, { useEffect, useState } from 'react'
import { Div, Row, Icon, Col, Text, Input } from "atomize";
import { Link, useHistory } from 'react-router-dom';
import SerachDropDownItem from '../components/SerachDropDownItem'
import StocksDetailsView from '../components/StocksDetailsView'
import { getRecomendation, getStock } from '../core/serchApi';

const Home = () => {
    const [searchText, setSearchText] = useState("")
    const [searchReco, setSearchReco] = useState({
        data: [],
        isLoading: false
    })
    const [searchResult, setSearchResult] = useState({
        data: {}, 
        isLoading: false 
    })


    const searchDropdown = () => {
        if (searchReco.data.length < 1) {
            return (<Div></Div>)
        }
        return (
            <Div shadow="4" pos="absolute" w="calc(100% - 40px)" bg="white" maxH="250px" overflow="auto" style={{ borderRadius: "0px 0px 15px 15px" }} m={{ x: "20px" }} >
                {
                    searchReco.data.map((item, i) => (
                        <SerachDropDownItem key={i} name={item.name} onClick={() => {
                            setSearchReco({ ...searchReco, data: [] })
                            getStockDetails(item.id)
                        }}></SerachDropDownItem>
                    ))
                }
            </Div>
        )
    }

    useEffect(() => {
        if (searchText.length > 2) {
            getRecomendations()
        } else {
            setSearchReco({ ...searchReco, data: [] })
        }
    }, [searchText])



    const getRecomendations = () => {
        setSearchReco({ ...searchReco, isLoading: true })
        getRecomendation(searchText).then(
            data => {
                if (!data.error) {
                    setSearchReco({ ...searchReco, data: data.data, isLoading: false })
                } else {
                    setSearchReco({ ...searchReco, isLoading: false })

                }
            }
        )
    }

    const getStockDetails = (stockId) => {
        setSearchResult({ ...searchResult, isLoading: true })
        getStock(stockId).then(data => {
            if (!data.error) {
                console.log(data.data);
                setSearchResult({ ...searchResult, data: data.data, isLoading: false })
            }else{

                setSearchResult({ ...searchResult, isLoading: false })
            }
        })
    }


    return (
        <Div h="100vh">
            <Div bg="lightblue">
                <Row w="100%" >
                    <Text
                        m={{ x: "2rem", y: "1rem" }}
                        textColor="black"
                        textWeight="600"
                        textSize="title"
                    >
                        STOCKS
                    </Text>

                </Row>
            </Div>
            <Div bg="mainBg" minH="calc(100% - 64px)" w="100%" textAlign="center" p={{ y: "15px", x: "15px" }}>
                <Text textSize="titleCaption" maxW="600px" m={{ x: "auto", y: "15px" }} textWeight="600">The eisiest way to buy and sell stocks</Text>
                <Text textSize="para" maxW="400px" m={{ x: "auto", y: "25px" }} >Stock analysis and screening tool for investors in india.</Text>
                <Div m={{ x: "auto" }} pos="relative"
                    maxW="540px">
                    <Input
                        p={{ x: "3.5rem", y: "2rem", l: "3.5rem" }}
                        h="48px"
                        border="0"
                        m={{ r: "0" }}
                        shadow="4"
                        textColor="danger900"
                        textWeight="600"
                        textSize="subtitle"
                        onChange={(e) => setSearchText(e.target.value)}
                        prefix={
                            <Icon
                                name={searchReco.isLoading ? "Loading" : "Search"}
                                color="black"
                                size="34px"
                                cursor="pointer"
                                pos="absolute"
                                top="50%"
                                left="0.95rem"
                                transform="translateY(-50%)"
                            />
                        } ></Input>
                    {searchDropdown()}
                </Div>
                <StocksDetailsView data={searchResult}></StocksDetailsView>
            </Div>

        </Div>
    )
}

export default Home
