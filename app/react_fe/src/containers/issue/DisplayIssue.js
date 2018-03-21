import React, { Component } from 'react';
import Aux from '../../wrapper/Auxiliary';
import sty from '../../css/bootstrap.min.css'
import styles from './Issues.css';
import Card from '../../components/box/Card';

class displayIssue extends Component {
    render () {
        let output = null;

        switch ( this.props.type ) {
            case ( 'short' ):
                output = (

                  <Card
                    issue_id={this.props.issue_id}
                    created_by={this.props.created_by}
                    priority={this.props.priority}
                    select={this.props.select}
                    status={this.props.status}
                    created_by_id={this.props.created_by_id}
                  />
                );
                break;
            case ( 'modal-short' ):
                output = (
                  <Aux onClick={this.props.select}>
                      <h2>Issue for {this.props.created_by}</h2>
                      <h5>Issue ID: {this.props.issue_id}</h5>
                  </Aux>
                );
                break;
            case ( 'modal-full' ):
                output = (
                  <Aux onClick={this.props.select}>
                      <h2>Issue for {this.props.created_by}</h2>
                      <h5>Issue ID: {this.props.issue_id}</h5>
                      <h5>Creator ID: {this.props.created_by_id}</h5>
                      <h5>description: {this.props.description}</h5>
                      <h5>priority {this.props.priority}</h5>
                      <h5>status {this.props.status}</h5>
                  </Aux>
                );
                break;
            default:
                output = (
                  <article className={styles.Issue} onClick={this.props.select}>
                      <h2>Issue for {this.props.created_by}</h2>
                      <h5>Issue ID: {this.props.issue_id}</h5>
                      <h5>priority {this.props.priority}</h5>
                      <h5>status {this.props.status}</h5>
                  </article>
                );
        }

        return output;
    }
}

export default displayIssue;
