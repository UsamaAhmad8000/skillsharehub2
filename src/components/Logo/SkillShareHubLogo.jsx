import React from 'react';
import SkillShareHub1 from "../../SkillShareHub.png";
import classes from './Logo.module.css';

const SkillShareHubLogo=(props)=>{
    return (
    <nav>
    <div className={classes.Logo} style={{height:props.height}}>
        <image className={classes.img} src={SkillShareHub1} alt="SkillShareHub"/>
    </div>
    </nav>
    );
};

export default SkillShareHubLogo;