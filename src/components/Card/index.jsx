import React from 'react'
import './Card.css'
export const Card = ({ data }) => {
    if (data.color) {
        return <div style={{ background: data.color }} className="card">
            {data.title}
        </div>
    } else {
        return <div style={{ backgroundImage: `url(${data.img})`}} className="card">
            <p>здесь должен быть рисунок</p>
            {data.title}
        </div>
    }
}