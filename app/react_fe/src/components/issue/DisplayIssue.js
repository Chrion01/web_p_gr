import React from 'react';
import Modal from '../ui/modal/Modal';
import Aux from '../../wrapper/Auxiliary';

const displayIssue = (props) => (
    <Aux>
    <Modal show={props.show} closeModal={props.close} >
        <h2>Issue for {props.created_by}</h2>
        <h5>Issue ID: {props.issue_id}</h5>
        <h5>Creator ID: {props.created_by_id}</h5>
        <h5>description: {props.description}</h5>
        <h5>priority {props.priority}</h5>
        <h5>status {props.status}</h5>
    </Modal>
    </Aux>
);

export default displayIssue;