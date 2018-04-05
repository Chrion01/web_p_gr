import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import FontAwesome from 'react-fontawesome';
import { Container, Col, Row, Card, CardHeader, CardBody, CardFooter, Badge } from 'reactstrap';


const cardOffer = (props) => {

  let ownerOpts = (props.isOwner) ? (<CardBody>
                                            <Link to={props.url + '/' + props.offer_id + '/edit'}>
                                              <Button type='primary'>Status:{props.status}</Button>
                                            </Link>
                                            <Link to={props.url + '/' + props.offer_id + '/del'}>
                                              <FontAwesome name='trash-o' size='2x' style={{float: 'right', paddingLeft: '10px'}} />
                                            </Link>
                                          </CardBody>):
                                          null

  return(<section style={{"paddingBottom" : "10px"}}>
                <Card style={{"borderColor" : "black"}}>
                  <CardBody>
                    <Container>
                      <Row><h3>Offer for - {props.applicant}</h3></Row>
                      <Row><h5>Faculty Supervisor: {props.created_by}</h5></Row>
                      <Row style={{"paddingBottom" : "5px", "color" : 'primary' }}>
                        STATUS: {props.status}
                      </Row>
                      <Row style={{"paddingBottom" : "15px"}}>
                        Round: {props.round}
                      </Row>
                      <Row style={{"paddingBottom" : "5px"}}>
                        Ticket Id: {props.ticket_id}
                      </Row>
                      <Row style={{"paddingBottom" : "5px"}}>
                        Type: {props.type}
                      </Row>
                    </Container>
                  </CardBody>
                  <CardFooter>
                    <Container>
                      {ownerOpts}
                    </Container>
                  </CardFooter>
                </Card>
              </section>)
};

export default cardOffer;
