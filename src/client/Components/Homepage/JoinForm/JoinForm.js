import React from 'react';
import './JoinForm.scss';
import cn from 'classnames';
import { Grid } from '../../../styleguide/components';

const Field = ({fieldName, label, getValue, setValue, isDisabled}) => (
  <>
    <Grid.Col sm={12} md={3} lg={3}>
      <label className={cn("label")}>{label}</label>
    </Grid.Col>
    <Grid.Col sm={12} md={9} lg={9}>
      <input
        disabled={isDisabled}
        className={cn("input")}
        type={"text"}
        onChange={({target:{value}})=>setValue(fieldName, value)}
        value={getValue(fieldName)}
      />
    </Grid.Col>
  </>
);

const JoinForm = ({getValue, setValue, onSubmit, joinedChain}) => (
  <Grid.Container className={cn("formContainer")}>
    <Grid noPadding>
      <Grid.Row>
        <Grid.Col sm={12} md={12} lg={12}>
          <h2 className={cn("formHeading")}>Joining Form</h2>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Field isDisabled={joinedChain} label={"Name"} getValue={getValue} setValue={setValue} fieldName={"name"} />
        <Field isDisabled={joinedChain} label={"City"} getValue={getValue} setValue={setValue} fieldName={"city"} />
        <Field isDisabled={joinedChain} label={"Age"} getValue={getValue} setValue={setValue} fieldName={"age"} />
        <Field isDisabled={joinedChain} label={"Address"} getValue={getValue} setValue={setValue} fieldName={"address"} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Col className={cn("buttonContainer")}>
          <button disabled={joinedChain} className={cn("button")} onClick={onSubmit}>Submit & Join</button>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Grid.Container>
);

export default JoinForm;
