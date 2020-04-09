import React from 'react'

const Header = ({ handleDropDownSort, offers }) => {

    // passing data to the parent component
    const handleSelectSort = event => {
        handleDropDownSort(event.target.value)
    }

    return (
        <div className="Header">

            <div className="Header__text">
                You just compared {offers} rates in 2 minutes!
            </div>

            <div className="Header__sort">
                <p className="Header__dropdown-text">Sort by:</p>
                <select id="sortDropdown" className="Header__dropdown" onChange={event => handleSelectSort(event)}>
                    <option value="rate">Select</option>
                    <option value="rate">Price</option>
                    <option value="stars">Rating</option>
                    <option value="name">Provider Name</option>
                </select>
            </div>
        </div>
    )
}

export default Header