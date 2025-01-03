import { useState } from "react";
import { formatPrice } from "../utils";


const FormRange = ({ label, name, size, price }) => {
    const step = 1000;
    const maxPrice = 100000;
    const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
    return (
        <div className="form-control">
            <label className="label cursor-pointer" htmlFor={name}>
                <span className="label-text capitalize">{label}</span>
                <span>{formatPrice(selectedPrice)}</span>
            </label>
            <input
                type="range"
                min={0}
                max={maxPrice}
                value={selectedPrice}
                name={name}
                onChange={(e) => setSelectedPrice(e.target.value)}
                step={step}
                className={`range range-primary ${size}`}
            />
            <div className="w-full flex justify-between text-xs px-2 mt-2">
                <span className="font-bold text-md">0</span>
                <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
            </div>
        </div>
    )
}

export default FormRange