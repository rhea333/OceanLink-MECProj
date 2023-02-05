import React, { useState, useEffect, useRef } from "react";
import oceanLinkLogo from "../images/OceanLink.png";
import "./Runner.css";

function Runner() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/items/33.768321/-118.195617/near/1/65`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [dist, setDist] = useState("");
  const [radius, setRadius] = useState("");
  const [speed, setSpeed] = useState("");
  let formRef = useRef();

  const handleLonChange = (e) => {
    setLon(e);
    console.log(lon);
  };
  const handleLatChange = (e) => {
    setLat(e);
    console.log(lat);
  };
  const handleDistChange = (e) => {
    setDist(e);
    console.log(dist);
  };
  const handleRadiusChange = (e) => {
    setRadius(e);
    console.log(radius);
  };
  const handleSpeedChange = (e) => {
    setSpeed(e);
    console.log(speed);
  };
  const handleChange = (e) => {};

  const submit = async (e) => {
    e.preventDefault();
    await fetch(
      `http://127.0.0.1:5000/items/${lat}/${lon}/${dist}/${radius}/${speed}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);

        formRef.current?.reset();
      });
  };

  return (
    <body className="background">
      <div>
        <img
          src={oceanLinkLogo}
          alt="logo"
          style={{ height: 150, width: 375 }}
        />
      </div>
      <div className="sensors">
        <div className="info">
          <h2 className="heading">Wind</h2>
          <div> {data.WindComment}</div>
        </div>
        <div className="spacer"></div>
        <div className="info">
          <h2 className="heading">Fog</h2>
          <div> {data.Fog}</div>
        </div>
        <div className="spacer"></div>
        <div className="info">
          <h2 className="heading">Objects</h2>
          <div> {data.Objects}</div>
        </div>
        <div className="spacer"></div>
        <div className="info">
          <h2 className="heading">Tide</h2>
          <div> {data.height}</div>
        </div>
      </div>

      <form ref={formRef} onSubmit={submit}>
        <div className="formWrapper">
          <div className="inputBoxWrapper">
            <div className="inputBoxWrapper">
              <input
                placeholder="Latitude"
                className="inputBox"
                type="text"
                onChange={(event) => handleLatChange(event.target.value)}
              />
            </div>
            <div className="inputBoxWrapper">
              <input
                placeholder="Longitude"
                className="inputBox"
                type="text"
                onChange={(event) => handleLonChange(event.target.value)}
              />
            </div>
          </div>
          <div className="inputBoxWrapper">
            <div className="inputBoxWrapper">
              <input
                placeholder="Distance"
                className="inputBox"
                type="text"
                onChange={(event) => handleDistChange(event.target.value)}
              />
            </div>
            <div className="inputBoxWrapper">
              <input
                placeholder="Radius"
                className="inputBox"
                type="text"
                onChange={(event) => handleRadiusChange(event.target.value)}
              />
            </div>
          </div>
          <div className="inputBoxWrapper">
            <div className="inputBoxWrapper">
              <input
                placeholder="Speed"
                className="inputBox"
                type="text"
                onChange={(event) => handleSpeedChange(event.target.value)}
              />
            </div>
            <div className="inputBoxWrapper">
              <input
                placeholder="Time of Day"
                className="inputBox"
                type="text"
                onChange={(event) => handleChange(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="buttonWrapper">
          <button className="update">SUBMIT</button>
        </div>
      </form>
    </body>
  );
}

export default Runner;
