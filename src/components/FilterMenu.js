import React from 'react';
import { CartState } from '../context/Context';

import {
    FilterContainer,
    FilterTitle,
    RadioButton,
    RadioButtonLabel,
    Item,
    Checkbox,
    CheckboxLabel
} from '../style/FilterElements';

const FilterMenu = () => {

    const {
        productState: {byStock, byFastDelivery, sort, searchQuery},
        productDispatch,
    } = CartState();

    console.log(byStock, byFastDelivery, sort, searchQuery);

  return (
    <>
        <FilterContainer>
            <FilterTitle>Filter Products</FilterTitle>
            <Item>
                <RadioButtonLabel >
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="optionA"
                        // checked={select === "optionA"}
                        // onChange={event => handleSelectChange(event)}
                        onChange={() => productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })}
                        checked={sort === "lowToHigh" ? true : false}
                    />
                Ascending
                </RadioButtonLabel>       
            </Item>
            <Item>
                <RadioButtonLabel >
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="optionA"
                        // checked={select === "optionA"}
                        // onChange={event => handleSelectChange(event)}
                        onChange={() => productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })}
                        checked={sort === "highToLow" ? true : false}
                    />
                Descending
                </RadioButtonLabel>       
            </Item>
            <Item>
                <Checkbox
                    type="checkbox" 
                    id="vehicle1" 
                    name="vehicle1" 
                    value="Bike"
                    onChange={() => 
                        productDispatch({
                            type: "FILTER_BY_STOCK",
                        })
                    }
                    checked={byStock}
                />
                <CheckboxLabel>Include Out of Stocks</CheckboxLabel>
            </Item>
            <Item>
                <Checkbox
                    type="checkbox" 
                    id="vehicle1" 
                    name="vehicle1" 
                    value="Bike"
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_DELIVERY",
                        })
                    }
                    checked={byFastDelivery}
                />
                <CheckboxLabel>Fast Delivery Only</CheckboxLabel>
            </Item>
 
        </FilterContainer>
    </>
  )
}

export default FilterMenu