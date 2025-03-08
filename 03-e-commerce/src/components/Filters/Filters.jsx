import './Filters.css';
import { useId, useState } from 'react';
import { useFilters } from '../../hooks/useFilters';

export function Filters() {
    const { setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Price a partir de:</label>
                <input 
                    type="range" 
                    id={minPriceFilterId}
                    min="0" 
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="groceries">Alimentos</option>
                    <option value="furniture">Muebles</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragancias</option>
                </select>
            </div>
        </section>
    )
}