import { useNavigate } from "react-router-dom";
import NewIncident from "../../shared/NewIncident";

const IncidentsLocation = () => {
  const navigate = useNavigate();
  const stepBack = () => {
    navigate("/incidents/stepbar/newIncidents/describeIncidents");
  };
  const finished = () => {
    navigate("/Locations");
  };
  return (
    <div>
      <NewIncident
        btnText="Finished"
        btnBack="Back"
        welcome="Home - incidents - NewIncidents"
        heading="Incidents"
        onClick={finished}
        stepBackClick={stepBack}
      />
      <div className="flex flex-col justify-center items-center gap-4 my-6 md:mx-0 mx-5">
        <div className="md:-ms-10 ms-0 ">
          <h1 className="font-bold text-2xl text-blackBold ">
            Where&apos;s the incident?
          </h1>
          <p className="text-14 leading-5 text-grayBold">
            Enter a GPS, address. or pin point on the map. Try to be as accurate
            as possible, or click:Jurisdiction Wide
          </p>
        </div>
        <img src="/google-map.png" alt="google map" className="img-fluid" />
      </div>
    </div>
  );
};

export default IncidentsLocation;
