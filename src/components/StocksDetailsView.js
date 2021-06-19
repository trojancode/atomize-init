import React from 'react'
import { Div, Row, Icon, Col, Text, Input } from "atomize";

const StocksDetailsView = ({ data }) => {

    const StockDataItem = (name, value) => (
        <Div rounded="lg" p={{ x: "25px", y: "20px" }} className="stockDetailsItem">
            <Row justify="space-between">
                <Text textSize="para">{name}</Text>
                <Text textSize="para" m={{t:{xs:"10px",sm:"0px"}}} textColor="danger900">{value}</Text>
            </Row>
        </Div>
    )


    if(data.isLoading){
        return (
            <Div p={{ x: "20px", y: "20px" }}  rounded="lg" m={{ x: "auto", t: "25px" }}>
                <Icon name="Loading" size="34px" color="info700"></Icon>
            </Div>
        )
    }
    return (
            <Div maxW="1100px" p={{ x: "20px", y: "20px" }} bg="white" rounded="lg" m={{ x: "auto", t: "25px" }}>
                <Text p={{ y: "10px", x: "30px" }} m={{ b: "30px" }} textSize="subtitle" textAlign="left">{data?.data?.name}</Text>
                <Div bg="gray200" rounded="md" p={{ x: "15px", y: "15px" }}>
                    <Row m="0">

                        <Col size={{xs:"12",md:"6",lg:"4"}} >
                            {StockDataItem("Market cap", "₹"+data.data.market_cap)}
                            {StockDataItem("Cauurent Price", "₹"+data.data.current_market_price)}
                            {StockDataItem("Stock P/E", data.data.stock_pe+"%")}
                            {StockDataItem("Debt", "₹"+data.data.debt)}
                        </Col>

                        <Col size={{xs:"12",md:"6",lg:"4"}} >
                            {StockDataItem("Divident Yield", data.data.dividend_yeild+"%")}
                            {StockDataItem("ROCE", data.data.roce+"%")}
                            {StockDataItem("ROE", data.data.roe_proviouse+"%")}
                        </Col>

                        <Col size={{xs:"12",md:"6",lg:"4"}} >
                            {StockDataItem("Debt Equally", data.data.debt_to_equity+"%")}
                            {StockDataItem("Eps", "₹"+data.data.eps)}
                            {StockDataItem("Reserves", "₹"+data.data.reserves)}
                        </Col>

                    </Row>
                </Div>
            </Div>
        )
}

export default StocksDetailsView
