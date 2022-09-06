import React, {useRef} from "react";
import { useListingsStore } from "../../../Context/ListingsContext";
import "./FilterSort.css";

const ListingsFilterSort = () => {

    const {companyList, filterList, sortByHorsepower, sortByPrice} = useListingsStore();

    const priceFilter = useRef<null | HTMLSelectElement>(null);
    const horsepowerFilter = useRef<null | HTMLSelectElement>(null);

    return (
        <div className="filter-sort-container">
            <div className="select-container">
                <h5>Filter by:</h5>
                <div className="label-select-box">
                    <h6>Make:</h6>
                    <select title="company-filter" className="filter" defaultValue={"All"} onChange={(e) => filterList(e)}>
                        <option value={"M-N/A"}>All</option>
                        {companyList.map(item => {
                            return <option key={item.id} value={item.company}>{item.company}</option>
                        })}
                    </select>
                </div>
                <div className="label-select-box">
                    <h6>Engine:</h6>
                    <select title="engine-filter" className="filter" defaultValue={"All"} onChange={(e) => filterList(e)}>
                        <option value={"E-N/A"}>All</option>
                        <option value={"petrol"}>Petrol</option>
                        <option value={"diesel"}>Diesel</option>
                    </select>
                </div>
            </div>
            <div className="select-container">
                <h5>Sort by:</h5>
                <div className="label-select-box">
                    <h6>Horsepower:</h6>
                    <select title="horsepower-sort" ref={horsepowerFilter} className="filter" defaultValue={"none"} 
                        onChange={(e) => {
                            priceFilter.current!.value = "none";
                            sortByHorsepower(e)}
                        }>
                        <option value={"none"}>N/A</option>
                        <option value={"highest"}>Highest first</option>
                        <option value={"lowest"}>Lowest first</option>
                    </select>
                </div>
                <div className="label-select-box">
                    <h6>Price:</h6>
                    <select title="price-sort" ref={priceFilter} className="filter" defaultValue={"none"} 
                        onChange={(e) => {
                            horsepowerFilter.current!.value = "none";
                            sortByPrice(e)}
                        }>
                        <option value={"none"}>N/A</option>
                        <option value={"highest"}>Highest first</option>
                        <option value={"lowest"}>Lowest first</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ListingsFilterSort;