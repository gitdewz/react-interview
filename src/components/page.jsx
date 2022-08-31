import React, { /* add any hook imports that are needed */ } from "react";
import './page.css';
import styled from "styled-components";
// use Pokemon component to display pokemon data
import { Pokemon } from "./pokemon";

const Wrapper = styled.div`

`;

const Loader = styled.span``;

/*
    fetch with this url to retrieve pokemon data
    response is JSON, use results attribute to cache 
    array of pokemon data
*/
const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

export const Page = () => {
    const loading = false; // change loading to use react hook

    // use a react hook to request pokemon data with the url constant above
    // response data will be JSON with a name and url attribute

    if (loading) {
        return <Loader>Loading...</Loader>;
    }

    return <Wrapper>Request Pokemon and make them appear here!</Wrapper>;
}