import React from 'react';
import cn from 'classnames';

import Grid from "../Grid/Grid";
import "./SolidHero.scss"

const SolidHero = ({title, className}) => (
    <Grid.Container>
        <Grid fullWidth>
            <Grid.Row>
                <Grid.Col className={cn("HeroContainer")}>
                    <h1>{ title }</h1>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    </Grid.Container>
);

export default SolidHero;