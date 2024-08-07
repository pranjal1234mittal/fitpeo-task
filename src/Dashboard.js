import React, {useState} from 'react';
import {
    Box,
    Typography,
    Grid,
    CircularProgress,
    TableContainer,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Table,
    Button,
    Rating,
    Select,
    MenuItem
} from "@mui/material"
import './style.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

function Dashboard() {
    const orderArray = [
        {
            image: <div className='orderBorder blueOrder'><ShopTwoIcon /></div>,
            amount: 75,
            status: "Total orders",
            rating: '3%',
            level: "up"
        },
        {
            image: <div className='orderBorder greenOrder'><LocalMallIcon /></div>,
            amount: 70,
            status: "Total Delivered",
            rating: '3%',
            level: "down"
        },
        {
            image: <div className='orderBorder orangeOrder'><LocalMallIcon /></div>,
            amount: "05",
            status: "Total Cancelled",
            rating: '3%',
            level: "up"
        },
        {
            image: <div className='orderBorder pinkOrder'><CurrencyExchangeIcon /></div>,
            amount: "$12K",
            status: "Total Revenue",
            rating: '3%',
            level: "down"
        }
    ];

    const goalsArray = [
        {
            image: <div className='orderBorder2 orangeOrder'><GpsFixedIcon /></div>,
            status: "Goals",
        },
        {
            image: <div className='orderBorder2 blueOrder'><LunchDiningIcon /></div>,
            status: "Popular Dishes",
        },
        {
            image: <div className='orderBorder2 menuOrder'><RoomServiceIcon /></div>,
            status: "Menus",
        }
    ];

    const recentOrders = [
        {
            profileImage: "https://i.pinimg.com/236x/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg",
            name: "Tony Stark",
            orderNumber: "123456",
            amount: "$305.00",
            status: "Delivered",
        },
        {
            profileImage: "https://www.looper.com/img/gallery/things-you-get-wrong-about-clark-kent/intro-1612453541.jpg",
            name: "Clark Kent",
            orderNumber: "456780",
            amount: "$44.90",
            status: "Pending",
        },
        {
            profileImage: "https://live.staticflickr.com/1285/5179358175_fca366cd86.jpg",
            name: "Bruce Wayne",
            orderNumber: "456123",
            amount: "$667.20",
            status: "Cancelled",
        },
        {
            profileImage: "https://m.media-amazon.com/images/S/amzn-author-media-prod/edhqjtpgf4gg8mhlc93c8bqu2._SY450_CR0%2C0%2C450%2C450_.jpg",
            name: "Scott Lang",
            orderNumber: "987098",
            amount: "$77.00",
            status: "Delivered",
        },
        {
            profileImage: "https://w0.peakpx.com/wallpaper/775/1010/HD-wallpaper-steve-rogers-age-of-ultron-avengers-steve-rogers-thumbnail.jpg",
            name: "Steve Rogers",
            orderNumber: "445521",
            amount: "$33.10",
            status: "Pending",
        },
        {
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfSgQg3sq67tyTa3kw2aHk50jfUAbOBPBBw&s",
            name: "Bruce Banner",
            orderNumber: "889943",
            amount: "$612.00",
            status: "Cancelled",
        }
    ];

    const reviewsArray = [
        {
            profileImage: "https://m.media-amazon.com/images/S/amzn-author-media-prod/edhqjtpgf4gg8mhlc93c8bqu2._SY450_CR0%2C0%2C450%2C450_.jpg",
            name: "Scott Lang",
            rating: 4,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfSgQg3sq67tyTa3kw2aHk50jfUAbOBPBBw&s",
            name: "Bruce Banner",
            rating: 3,
            review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
        },
        {
            profileImage: "https://w0.peakpx.com/wallpaper/775/1010/HD-wallpaper-steve-rogers-age-of-ultron-avengers-steve-rogers-thumbnail.jpg",
            name: "Steve Rogers",
            rating: 2,
            review: "Contrary to popular belief, Lorem Ipsum is not simply random text",
        },
        {
            profileImage: "https://i.pinimg.com/236x/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg",
            name: "Tony Stark",
            rating: 3,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            profileImage: "https://live.staticflickr.com/1285/5179358175_fca366cd86.jpg",
            name: "Bruce Wayne",
            rating: 1,
            review: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
        },
        {
            profileImage: "https://www.looper.com/img/gallery/things-you-get-wrong-about-clark-kent/intro-1612453541.jpg",
            name: "Clark Kent",
            rating: 4,
            review: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        },
    ];

    const dataset = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: "5",
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: "9",
        },
        {
            london: 47,
            paris: 53,
            newYork: 106,
            seoul: 41,
            month: "11",
        },
        {
            london: 54,
            paris: 56,
            newYork: 92,
            seoul: 73,
            month: "17",
        },
        {
            london: 57,
            paris: 69,
            newYork: 92,
            seoul: 99,
            month: "19",
        },
        {
            london: 60,
            paris: 63,
            newYork: 103,
            seoul: 144,
            month: "21",
        },
        {
            london: 59,
            paris: 60,
            newYork: 105,
            seoul: 319,
            month: "23",
        },
        {
            london: 65,
            paris: 60,
            newYork: 106,
            seoul: 249,
            month: "25",
        },
        {
            london: 51,
            paris: 51,
            newYork: 95,
            seoul: 131,
            month: "27",
        },
    ];

    const chartSetting = {
        yAxis: [
            {
                label: "rainfall (mm)",
            },
        ],
        width: 700,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: "translate(-20px, 0)",
                width: "40px",
            },
        },
    };

    const [graphSelect, setGraphSelect] = useState(1);

    const handleGraphSelect = (event) => {
        setGraphSelect(event.target.value)
    };

    const valueFormatter = (value) => `${value}mm`;

    return (
        <Box className="mainDashboard">
            <Box className="container">
                <Typography className="dashText">Dashboard</Typography>
                <Box className="firstSection">
                    <Grid className='orderList'>
                        {orderArray.map((data) => {
                            return (
                                <Box className="showOrder">
                                    <Box>
                                        {data.image}
                                        <Typography className="dashTextStatus">{data.status}</Typography>
                                    </Box>
                                    <Box className="amountBox">
                                        <Typography className="dashTextAmount">{data.amount}</Typography>
                                        <Box className="ratingBox">
                                            {data.level === "up" ?
                                                <ArrowDropUpIcon className='upIcon' />
                                                :
                                                <ArrowDropDownIcon className='downIcon' />
                                            }
                                            <Typography className={data.level === "up" ? 'ratingTextUp' : 'ratingTextDown'}>{data.rating}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Grid>
                    <Grid className='circularBox'>
                        <Box className="showProfit">
                            <Typography className="dashTextStatus">Net Profit</Typography>
                            <Typography className="dashText">$6759.25</Typography>
                            <Box className="ratingBox">
                                <ArrowDropUpIcon className='upIcon' />
                                <Typography className='ratingTextUp'>3%</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box position="relative" display="inline-flex">
                                <CircularProgress variant="determinate" size={110} thickness={7} value={100} className="circularProgressParentStyle" />
                                <CircularProgress
                                    variant="determinate"
                                    className="circularProgressStyle"
                                    style={{ borderRadius: "30px" }}
                                    value={70}
                                    size={110} thickness={7}
                                />
                                <Typography className="showRate">70%</Typography>

                                <Typography className="statusText">Goal Completed</Typography>
                            </Box>
                            <Typography className='valueText'>*The values here has been rounded off.</Typography>
                        </Box>
                    </Grid>
                </Box>
                <Box className="firstSection">
                    <Grid className='activityBar'>
                        <Box className="dropdownTextBox">
                        <Typography className='activityText'>Activity</Typography>
                        <Select 
                            value={graphSelect}
                            onChange={(event) => handleGraphSelect(event)}
                            className='graphSelect' 
                            IconComponent={() => (<ArrowDropDownRoundedIcon className="arrowDropdown" />)}
                        >
                            <MenuItem value={1}>Weekly</MenuItem>
                            <MenuItem value={2}>Monthly</MenuItem>
                            <MenuItem value={3}>Daily</MenuItem>
                        </Select>
                        </Box>
                        <BarChart
                            className="bar"
                            dataset={dataset}
                            xAxis={[{ scaleType: "band", dataKey: "month" }]}
                            series={[
                                { dataKey: "london", label: "London", valueFormatter },
                                { dataKey: "paris", label: "Paris", valueFormatter },
                                { dataKey: "newYork", label: "New York", valueFormatter },
                                { dataKey: "seoul", label: "Seoul", valueFormatter },
                            ]}
                            {...chartSetting}
                        />
                    </Grid>
                    <Grid className='circularBox'>
                        <Box className='fourthSection'>
                            {goalsArray.map((item) => {
                                return (
                                    <Box className="goalsList">
                                        <Box className="statusSection">
                                            {item.image}
                                            <Typography className="dashTextAmount">{item.status}</Typography>
                                        </Box>
                                        <ArrowForwardIosIcon className='forwardIcon' />
                                    </Box>
                                )
                            })}
                        </Box>
                    </Grid>
                </Box>
                <Box className="thirdSection">
                    <Grid className='recentOrderBox'>
                        <Typography className='recentOrdersText'>Recent Orders</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow className='tableHead'>
                                        <TableCell className='tableHead'>Customer</TableCell>
                                        <TableCell className='tableHead'>Order No.</TableCell>
                                        <TableCell className='tableHead'>Amount</TableCell>
                                        <TableCell className='tableHead'>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {recentOrders.map((orders) => {
                                        return (
                                            <TableRow className='tableRow'>
                                                <TableCell className='tableDataCustomer'>
                                                    <img src={orders.profileImage} className='ordersProfileImage' alt="profileImage" />
                                                    <Typography className='tableCustomerText'>{orders.name}</Typography>
                                                </TableCell>
                                                <TableCell className='tableData'>{orders.orderNumber}</TableCell>
                                                <TableCell className='tableData'>{orders.amount}</TableCell>
                                                <TableCell>
                                                    <Button className={orders.status === "Delivered" ? "tableDataStatusDelivered" : "tableDataStatus"}>{orders.status}</Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid className='reviewSectionBox'>
                    <Typography className='customerFeedbackText'>Customer's Feedback</Typography>
                        {reviewsArray.map((reviews) => {
                            return (
                                <Box className="reviewBox">
                                    <Box className="profileReviewBox">
                                        <img src={reviews.profileImage} className='ordersProfileImage' alt="profileImage" />
                                        <Typography className='reviewerName'>{reviews.name}</Typography>
                                    </Box>
                                    <Rating value={reviews.rating} />
                                    <Typography className='reviews'>{reviews.review}</Typography>
                                </Box>
                            )
                        })}            
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
export default Dashboard;