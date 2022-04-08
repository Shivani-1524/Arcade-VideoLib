import { useState, createContext, useContext } from 'react'

const CategoryContext = createContext()

const useCategory = () => useContext(CategoryContext)

const CategoryProvider = ({ children }) => {
    const [videoCategory, setVideoCategory] = useState('All');
    return (
        <CategoryContext.Provider value={{ videoCategory, setVideoCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

export { CategoryProvider, useCategory }