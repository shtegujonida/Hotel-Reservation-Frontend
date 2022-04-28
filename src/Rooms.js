import React, { useState, useEffect } from 'react';
import './Rooms.css';


// Hooks
export default function Rooms() {
    // declaring a new state variable which calls filter,guides,filterType
    const [filter, setFilter] = useState("");
    const [rooms, setRooms] = useState([]);
    const [filterType, setFilterType] = useState("free");
    const [free, setFree] = useState(false);

    // making a function to get the data from the backend's API
    const getData = () => { 
        if(free) {
            if (filter === "") { // condition that calls all the rooms available
                fetch("http://localhost:8080/reservations/available")
                .then(res => res.json())
                .then(json => setRooms(json));
            }
            else { // condition that filters the rooms available based on free by default
                fetch("http://localhost:8080/reservations/available" + filterType + "/" + filter)
                .then(res => res.json())
                .then(json => setRooms(json));
            }
        }
        else {
            if (filter === "") { // condition that calls all rooms
                fetch("http://localhost:8080/reservations")
                .then(res => res.json())
                .then(json => setRooms(json));
            }
            else { // condition that filter all the rooms based on free by default
                fetch("http://localhost:8080/reservations" + filterType + "/" + filter)
                .then(res => res.json())
                .then(json => setRooms(json));
            }
    }
   

    }

    useEffect(() => { // calls the fetch API upon loading the component to claim the reservations
        fetch("http://localhost:8080/reservations").then(res => res.json()).then(json => setRooms(json));
    }, []);

    return (
        <><div>
            <h1 className='rooms--header'>Rooms</h1>
            <input type="text" value={filter} onChange={(event) => {
                        setFilter(event.target.value);
                    }} className="input--search"></input>
                    <select onChange={(event) => {
                        setFilterType(event.target.value);
                    }} name="filterType">
                        <option value="jaccuzi">Filter by Jaccuzi</option>
                        
                    </select>
                    <button onClick={getData}>Search</button>
                    <input type="checkbox" onChange={() => {
                        setFree((prevState) => !prevState);
                    }}></input>
                    <label>Check for available rooms only</label>
              </div>
              <div>
                {rooms.map(room => <div className='rooms--container'>
                   <aside className='img--aside'>
                    <img src={room.image} className="rooms--img" />
                    </aside>
                    <div className='rooms--info'>
                    <h2 className='rooms--description'>
                        Room number {room.roomNumber}</h2>
                    <h3>Room for {room.persons} person/s.</h3>
                    <h4>Beds: {room.numOfBeds}, Price: {room.price}€, Jaccuzi: {room.jaccuzi.toString()}, Room Service: {room.roomService.toString()}</h4>
                    <h4>Availability: {room.free.toString()}.</h4>
                    <h4>Arrival Date: {room.arrivalDate} Reserved until: {room.until}</h4>
                    </div>
                    
                    
                </div>)}
            </div></>
    )
}