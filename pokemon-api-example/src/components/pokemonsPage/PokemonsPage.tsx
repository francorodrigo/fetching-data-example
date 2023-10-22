import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Pokemon } from '../../hooks/types';
import usePokemons from '../../hooks/usePokemons';
import { ContentWrapper, HeaderWrapper, LoaderWrapper, PokemonCard, RefreshButton } from './PokemonsPage.styled';
import { Circles } from 'react-loader-spinner';
const PokemonsPage = () => {
    const {pokemons,isLoading,total,searchText,handleSearchText,setNeedRefresh} = usePokemons();
    
    if(isLoading) return (<LoaderWrapper>
        <Circles
            height="80"
            width="80"
            ariaLabel="loading"
        />
    </LoaderWrapper>);
    return (
        <>
            <HeaderWrapper>
                <Typography sx={{display:'flex',width:'100%'}}>Pokemones</Typography>
                <input type='text' onChange={ev => handleSearchText(ev.target.value)}/>
                <RefreshButton onClick={() => setNeedRefresh(true)}>
                    Refrescar
                </RefreshButton>
            </HeaderWrapper>
            <ContentWrapper>
            {pokemons?.map((pokemon: Pokemon) => {
                return <Card>
                            <CardMedia>
                                <CardHeader>
                                    <CardMedia src={pokemon.url}></CardMedia>
                                </CardHeader>
                                <CardContent>{
                                    pokemon.name}</CardContent>
                            </CardMedia>
                        </Card>
            })}
            </ContentWrapper>
        </>
    );
};


export default PokemonsPage;