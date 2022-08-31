import React, { useEffect, useState } from "react";
import "./pokemon.css";
import styled from "styled-components";

const Wrapper = styled.div`

`;

const Img = styled.img`
    width: 300px;
`;

const Stats = styled.div`

`;

const Stat = styled.span`

`;

export const Pokemon = ({ name, url }) => {
    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetch(url).then((response => {
            response.json().then(pokemonData => {
                console.log({pokemonData});
                setData(pokemonData);
                setImage(pokemonData.sprites.front_default);
                setStats(pokemonData.stats);
            })
        }))
    }, [url]);

    return (
        <Wrapper>
            <Img src={image}/>
            <Stats>
                {stats.map(stat => <Stat>{stat.stat.name}: {stat.base_stat}</Stat>)}
            </Stats>
        </Wrapper>
    );
}