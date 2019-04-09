import React from 'react';
import { Grid, SolidHero } from "../../../styleguide/components";

const Hero = () => (
    <Grid.Container>
        <Grid noPadding fullWidth>
            <Grid.Row>
                <Grid.Col md={12}>
                    <SolidHero title={"Identity Chain"}/>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    </Grid.Container>
);

export default Hero;
