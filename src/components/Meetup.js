import React, { useState ,useEffect} from "react";

function Meetup() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupState = () => {
    console.log(showPopup)
      setShowPopup(true);
    
  };
  const handlePopupStateClose = () => {
    console.log(showPopup)
    setShowPopup(false);
  
};


  useEffect(()=>{
     setShowPopup(showPopup)
     console.log(showPopup)
  }, [setShowPopup])

  return (
    <div>
      <img src="meetup.png" style={{ width: "1100px", height: "700px" }} />
      <button onClick= {handlePopupState}
     type="button"
        class="btn btn-success btn-lg btn-block"
      >
        Text me if there is an event near me
      </button>

      <div style={showPopup? {'display':'block'}:{'display':'none'}}className='popup'>
        <div className='popup_inner'>
          <h1>Don't miss out on events near you</h1>
          <input placeholder= 'Enter your number'/>
          <br></br> <button>Opt in </button>
          <br></br><br></br><br></br>
        <button onClick={handlePopupStateClose}>close me</button>
        </div>
      </div>
    </div>
  );
}
export default Meetup;
