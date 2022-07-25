import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import withCapsService from "../../hoc";
import { getCapsName } from "../../../actions";
import { useDispatch } from "react-redux/es/exports";
import './search-panel.css'

const SearchPanel = ({ capsService, allFilteredCapsProps }) => {
    const [searchValue, setSearchValue] = useState('')
    const [capsName, setCapsName] = useState([])
    const dispatch = useDispatch()

    const getCapsInfo = () => {
        return capsService.getAllCaps()
            .then((data) =>
                setCapsName(data)
            )
    }
    useEffect(() => {
        getCapsInfo()
    }, [])

    const onSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const filteredCaps = capsName.filter(caps => {
        return caps.brand.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <div className='input-container'>
            <form className="search-form"
            >
                <input
                    type='text'
                    onChange={onSearchChange}
                    placeholder='type to search'
                    className='search' />
                <ul className="search-autocomplete">
                    {
                        searchValue
                            ? filteredCaps.map((capsName, id) => {
                                return (
                                    <Link to={`/search-res/${capsName.brand.name}`} style={{ color: "black", textDecoration: 'none' }}>
                                        <li
                                            key={id}
                                            className="search-item"
                                            onClick={() => dispatch(getCapsName(capsName.brand.name))}
                                        >
                                            {capsName.brand.name}
                                        </li>
                                    </Link>
                                )
                            }) : null
                    }
                </ul>
                <a href='/search-res/'><i className="fa-solid fa-magnifying-glass"></i></a>
            </form>
        </div >
    )
}

export default withCapsService(SearchPanel);