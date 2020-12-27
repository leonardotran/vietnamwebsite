import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica color="#047bf1"/>),
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique places",
    },
    {
        icon: <MdAirplanemodeActive color="#f3a82e"/>,
        title: "Over 1 Million Trips Made",
        desc: "Over 1 Million Trips Made Last Year",
    },
    {
        icon: <MdTimer color="#f34f2e"/>,
        title: "Fastest Support",
        desc: "Access Our Support Team 24/7",
    },
    {
        icon: <FaMoneyCheck color="#3af576"/>,
        title: "Best Deal",
        desc: "We Offer The Best Prices",
    },
]