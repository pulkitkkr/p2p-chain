import React from 'react';
import './RequestForm.scss';
import cn from 'classnames';
import { Grid } from '../../../styleguide/components';

const Field = ({label,value, setValue, isDisabled}) => (
  <>
    <Grid.Col sm={12} md={3} lg={3}>
      <label className={cn("label")}>{label}</label>
    </Grid.Col>
    <Grid.Col sm={12} md={9} lg={9}>
      <input
        disabled={isDisabled}
        className={cn("input")}
        type={"text"}
        onChange={({target:{value}})=>setValue(value)}
        value={value}
      />
    </Grid.Col>
  </>
);

const JoinForm = ({setCityValue, value, onSubmit}) => (
  <Grid.Container className={cn("formContainer")}>
    <Grid noPadding>
      <Grid.Row>
        <Grid.Col sm={12} md={12} lg={12}>
          <h2 className={cn("formHeading")}>Request Form</h2>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Field label={"City Filter"} setValue={setCityValue} value={value} fieldName={"filterCity"} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Col className={cn("buttonContainer")}>
          <button className={cn("button")} onClick={onSubmit}>Request</button>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Grid.Container>
);

export default JoinForm;
