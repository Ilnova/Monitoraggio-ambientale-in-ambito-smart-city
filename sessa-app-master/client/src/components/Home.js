
import '../../src/App.css';
import { useEffect,useState } from 'react';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import unisaLogo from "../assets/unisa-logo.png"

function Home() {
    
    const [data,setData] = useState();

    const loadData = async () =>{
        const res = await axios.get("http://localhost:5000/getData")
        setData(res.data)
        console.log(res.data)
    }

    useEffect (()=>{
        loadData().then(
            console.log("Dati Caricati con successo")
        ).catch(
            console.log("Errore!")
        )
    },[])
//Inizio rendering
    return (
      <>
      <nav className='nav'>
        <div className='nav-row'>
          <img src={unisaLogo} alt="unisa logo" style={{height:80,marginLeft:30}}/>
         <div className='tryflex'>
          <h2> Università degli studi di Salerno</h2>
          <h7> Raccolta dati rumore, temperatura ed umidità</h7>
          </div>
        </div>     
      </nav>
        <Table striped bordered hover className="table-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID_Wasp</th>
            <th>Frame Type</th>
            <th>Frame Number</th>
            <th>Sensor</th>
            <th>Value</th>
            <th>Timestamp</th>
            <th>Sync</th>
            <th>Raw</th>
            <th>Parser Type</th>
            <th>MeshliumID</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d)=>{
            return(
                  <tr>
                    <td>{d.id}</td>
                    <td>{d.id_wasp}</td>
                    <td>{d.frame_type}</td>
                    <td>{d.frame_number}</td>
                    <td>{d.sensor}</td>
                    <td>{d.value}</td>
                    <td>{d.timestamp}</td>
                    <td>{d.sync}</td>
                    <td>{d.raw}</td>
                    <td>{d.parser_type}</td>
                    <td>{d.MeshliumID}</td>
                  </tr>
            )
          })}
        </tbody>
      </Table>
      <nav className='footer'>
        <div className='footer-row'>
          <h4> Sviluppato da Sessa Gerardo per tesi triennale in informatica</h4>
        </div>
      </nav>
      </>
   );
  }
  
  export default Home;
  