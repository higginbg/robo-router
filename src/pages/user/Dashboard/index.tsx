import { robotsData } from '../../../data/robots';

const Dashboard = () => {
  const robotCount = robotsData.length;

  return (
    <h3 style={{ textAlign: 'center' }}>
      You have {robotCount} robots in your collection.
    </h3>
  );
};

export default Dashboard;
