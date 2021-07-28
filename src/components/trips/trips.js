import React, {Component, useEffect, useState} from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import InputGroup from "react-bootstrap/cjs/InputGroup";
import ListGroup from "react-bootstrap/cjs/ListGroup";
import Alert from "react-bootstrap/cjs/Alert";
import moment from "moment";

export default function Trips() {

  const [fromStation, setFromStation] = useState('')
  const [toStation, setToStation] = useState('')
  const [date, setDate] = useState('')
  const [timetableData, setTimetableData] = useState([])
  const validUser = () => sessionStorage.getItem('validUser') === 'true'

  const railwayTimetableDatabase = [
    { from: 'Central', to: 'Redfern', date: '27-07-2021', departures: ['11 am', '11:10 am', '11:20 am', '11:30 am']},
    { from: 'Central', to: 'Redfern', date: '28-07-2021', departures: ['11 am', '11:10 am', '11:20 am', '11:30 am']},
    { from: 'Central', to: 'Circular Quay',  date: '27-07-2021', departures: ['11', '11:10', '11:20', '11:30']},
    { from: 'Central', to: 'Redfern',  date: '28-07-2021', departures: ['12', '12:10', '12:20', '12:30']},
    { from: 'Town hall', to: 'Redfern',  date: '29-07-2021', departures: ['12', '12:10', '12:20', '12:30']},
    { from: 'Town hall', to: 'Strathfield',  date: '29-07-2021', departures: ['12', '12:10', '12:20', '12:30']},
  ];

  const openNotepad = () => {
    // let oShell = new ActiveXObject("Shell.Application");
    // let commandtoRun = "c:\\windows\\system32\\notepad.exe";
    // oShell.ShellExecute(commandtoRun, "", "", "open", "1");
  }


  const getTimetable = () => {
    let stationsList = railwayTimetableDatabase.filter(data =>
      data.from === fromStation &&
          data.to === toStation
    )

    if(date) {
      stationsList = stationsList.filter( data =>
        data.date === date
      )
    }

    setTimetableData(stationsList.map(train => {return train.departures.map(timings =>
        <ListGroup.Item action variant="default">Departing at: <b><a href={openNotepad()}> {timings} </a> </b> on <b> {train.date} </b> </ListGroup.Item>)}));

  };

  const fromStations = () => {
    const uniqueStations = [...new Set(railwayTimetableDatabase.map( data => data.from))];
    const stationDropdown = [];
    uniqueStations.forEach( station => stationDropdown.push(<Dropdown.Item eventKey={station}>{station}</Dropdown.Item>))
    return stationDropdown;
  }
  const toStations = () => {
    const uniqueStations = [...new Set(railwayTimetableDatabase.map( data => data.to))];
    const stationDropdown = [];
    uniqueStations.forEach( station => stationDropdown.push(<Dropdown.Item eventKey={station}>{station}</Dropdown.Item>))
    return stationDropdown;
  }

  const handleSelectFrom=(e)=>{
    setFromStation(e)
  }
  const handleSelectTo=(e)=>{
    setToStation(e)
  }
  const handleDate=(e)=>{
    setDate(e !== "" ? e.format("DD-MM-YYYY") : e)
  }

  let yesterday = moment().subtract( 1, 'day' );
  let valid = function( current ){
    return current.isAfter( yesterday );
  };


  useEffect(() => {
    getTimetable()
  },[fromStation, toStation, date])

  return (
        <>
          {validUser() &&
          <Container>
            <Row><Col><h2>Trips</h2></Col></Row>
            <Row><Col><br/></Col></Row>
            <Row>
              <Col>
                <Dropdown id="fromStation"
                          onSelect={handleSelectFrom}>
                  <Dropdown.Toggle>
                    From Station {fromStations}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {fromStations()}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown id="toStation"
                          onSelect={handleSelectTo}>
                  <Dropdown.Toggle>
                    To Station
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {toStations()}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Text>Date</InputGroup.Text>
                  <Datetime
                      dateFormat="DD-MM-YYYY"
                      timeFormat={false}
                      onChange={handleDate}
                      closeOnClickOutside={true}
                      closeOnSelect={true}
                      isValidDate={valid}/>
                </InputGroup>
              </Col>
            </Row>
            <Row><Col><br/></Col></Row>
            <Row><Col><br/></Col></Row>
            {timetableData.length == 0
            && <Row><Col> <Alert variant="danger"><Alert.Heading>No Trains found</Alert.Heading> try selecting date from
              current week</Alert></Col></Row>}
            {timetableData.length > 0 &&
            <>
              <Row><Col>
                <Alert variant="success">Trains from <b>{fromStation}</b> station to <b>{toStation}</b> station {date && <>on the
                  date <b>{date}</b> </>} are as follows
                </Alert></Col></Row>
              <Row><Col sm={8}><ListGroup>{timetableData}</ListGroup></Col></Row>
            </>
            }
            <Row><Col><br/></Col></Row>
            <Row><Col><br/></Col></Row>

          </Container>
          }
        </>
    );
}
