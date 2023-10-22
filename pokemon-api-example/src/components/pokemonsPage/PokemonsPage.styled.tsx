import { Box, Button, styled } from "@mui/material";


export const LoaderWrapper = styled(Box)`
    display:'flex';
    justifyContent:'center';
    alignItems:'center';
`;

export const HeaderWrapper = styled(Box)`
    display:flex;
    justifyContent:center;
    alignItems:center;
    background:white;
    color:black;
    width:inherit;
    padding:1rem;
    // background:lightgreen;
    width:100%;
    gap:2em;
`;

// export const ContentWrapper = styled(Box)`
//     display:grid;
//     justifyContent:center;
//     alignItems:center;
//     background:red;
//     padding:1rem;
//     background:lightgreen;
//     width:100%;
//     flexWrap:wrap;
// `;

export const ContentWrapper = styled(Box)(() =>({
    display:'grid',
    // gridTemplateColumns:'repeat(3,1fr)',
    gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',
    gap:'1rem',
    padding:'1rem',
    background:'lightgreen',
}));


export const PokemonCard = styled(Box)`
    display:flex;
    width:100px;
    height:100px;
`;

export const RefreshButton = styled(Button)`
    color: white;
    background: black;
    padding:15px;
`;