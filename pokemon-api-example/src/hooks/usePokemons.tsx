import React from 'react';
import { Pokemon } from './types';

const usePokemons = () => {
    const [pokemons, setPokemons] = React.useState<Array<Pokemon>>([]);
    const [searchText,setSearchText] = React.useState<string>('');
    const [page,setPage] = React.useState<number>(0);
    const [total,setTotal] = React.useState<number>(0);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [needRefresh, setNeedRefresh] = React.useState<boolean>(false);

    const handleSearchText = (value: string) => {
        setTimeout(() => {  
            setSearchText(value);
        }, 3000);
    }
    const fetchPokemons = async () =>{
        setIsLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
            const res = await response.json();
            setTotal(res.count);
            setPokemons(res.results); 
        } catch (error) {
            setTotal(0);
            setPokemons([]);
        }
        finally{
            setIsLoading(false);
        }
     }

     React.useEffect(() => {
        fetchPokemons();
      }, [])

     React.useEffect(() => {
        fetchPokemons();
      }, [searchText,setSearchText])

      React.useEffect(() => {
        if(needRefresh){
            fetchPokemons();
            setNeedRefresh(false);
        }
      }, [needRefresh,setNeedRefresh])
     return {pokemons,isLoading,total,page,handleSearchText,setNeedRefresh,searchText}
};

export default usePokemons;