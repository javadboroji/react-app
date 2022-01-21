import React from 'react'

function Filter({count,size,sort,filterProducts,sortProducts}) {
    return (
        <div className='filter'>
            <div className='filter-result'>{count} Products</div>
            <div className='filter-sort'>
                Order{"  "}
                <select value={sort} onChange={sortProducts}>
                    <option >Lastest</option>
                    <option value="Lowest">Lowest</option>
                    <option value='heighest'>heighest</option>
                </select>
            </div>
            <div className='filter-size'>
            Filter{"  "}
                <select value={size} onChange={filterProducts}>
                    
                    <option value="" >All</option>
                    <option value="Xs">Xs</option>
                    <option value="X">X</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>

        </div>
    )
}

export default Filter
