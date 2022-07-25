import React, { useState, useEffect } from 'react';
import withCapsService from '../hoc';
import './search-res.css'
import SearchResultItem from './search-result-item/search-result-item';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchCaps } from '../../actions';

const SearchRes = ({ id, capsService }) => {
    const [capsName, setCapsName] = useState([])
    const { name } = useSelector(s => s)

    const getCapsInfo = () => {
        return capsService.getAllCaps()
            .then((data) =>
                setCapsName(data)
            )
    }
    useEffect(() => {
        getCapsInfo()
    }, [])


    const allFilteredCaps = capsName.filter(el => {
        return el.brand.name.toLowerCase() === name.toLowerCase()
    })

    if (allFilteredCaps.length === 0) {
        return <h1 className='nothing'>404 Not Found</h1>
    }

    console.log(allFilteredCaps)

    return (
        <div className='result-container main-container'>
            <div className='links-container'>
                <a href='/' className='from-page'>Поиск</a>
                <p className='from-page'>&gt;</p>
                <a href='/' className='to-page'>Adidas</a>
            </div>
            <div className='caps-catalog-flex'>
                {
                    allFilteredCaps.map((capsSearchItem) => {
                        return (
                            <SearchResultItem
                                key={id}
                                id={id}
                                capsSearchItem={capsSearchItem} />
                        )
                    })
                }




            </div>
        </div >
    )
}

export default withCapsService(SearchRes);