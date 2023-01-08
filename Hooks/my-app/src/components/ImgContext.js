import { createContext, useState } from "react";

const ImgContext = createContext();

export function ImgProvider({children}){

    const [savedImages, setSavedImages] = useState([]);

    const AddToSavedImages = (name, url, numOfLikes) => {
        setSavedImages(prevState => [...prevState, { name, url, numOfLikes }])
    }

    return (
        <ImgContext.Provider value={{ savedImages, AddToSavedImages}}>
            {children}
        </ImgContext.Provider>
    )
}

export default ImgContext;