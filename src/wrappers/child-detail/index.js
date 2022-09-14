import React from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

export default function ChildDetailPokemon({isMobile,...props}){
    if(isMobile){
        return <Mobile {...props} />
    }
    return <Desktop {...props} />
}