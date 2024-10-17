import NewIncident from "../../shared/NewIncident";

const IncidentsLocation = () => {
  return (
    <div>
      <NewIncident
        btnText="Finished"
        btnBack="Back"
        welcome="Home - incidents - NewIncidents"
        heading="Incidents"
      />
    </div>
  );
};

export default IncidentsLocation;
