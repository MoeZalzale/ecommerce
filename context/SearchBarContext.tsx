import { createContext, ReactNode, useContext, useState } from "react"


type SearchBarProviderProps ={
    children: ReactNode
}

type SearchBarContext ={
updateSearched: (char: string) => void
searched: string

} 


const SearchBarContext = createContext({} as SearchBarContext)

export const useSearchBar = () => {
    return useContext(SearchBarContext)
}

export const SearchBarProvider = ({children}: SearchBarProviderProps) =>{
    const [searched,updateSearchField]=useState<string>('')

    const updateSearched = (char: string)=>{
        return updateSearchField(char)
        
        
    }

    


    return <SearchBarContext.Provider value={{updateSearched,searched}}>
        {children}


    </SearchBarContext.Provider>



}



