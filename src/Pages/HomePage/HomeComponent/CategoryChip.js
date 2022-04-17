import React, { useState } from 'react'
import { useCategory } from "../../../Context/category-provider"

const CategoryChip = ({ props }) => {
    const { title } = props
    const { videoCategory, setVideoCategory } = useCategory()
    return (
        <div onClick={() => setVideoCategory(title)}
            className={videoCategory === title ? "category-chip filled" : "category-chip"}>
            {title}
        </div>
    )
}

export { CategoryChip }