
import Sidebar from "@/components/dashboard/Sidebar";
import PlanOverview from "@/components/plan/PlanOverview";

const PlanPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6 md:p-0 mt-12 md:mt-0">
            <PlanOverview />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
