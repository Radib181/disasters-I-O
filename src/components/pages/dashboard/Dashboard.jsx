import { CardDetails } from '../../lib/db';
import Filter from './../../shared/Filter';
import Card from './Card';


const Dashboard = () => {
  return (
    <div>
      <Filter welcome="welcome back" heading="Dashboard" btnText="Cypher AI" />
      <div className="grid grid-cols-4 gap-2 p-4">
        {CardDetails.map((cardDetails, i) => (
          <Card key={i} {...cardDetails} />
        ))}
      </div>
      <button className="bg-orange text-white w-[77px] h-[77px] rounded-full inline-flex justify-center items-center bottom-4 right-4 fixed hover:cursor-pointer font-bold text-[55px] font-white font-babesNeue">
        C
      </button>
    </div>
  );
};

export default Dashboard;
