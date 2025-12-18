import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import UserMenuChart from "../../components/ecommerce/UserMenuChart";

export default function Home() {
  const [counts, setCounts] = useState<{
    userCount: number;
    menuCount: number;
  }>({ userCount: 0, menuCount: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await httpService.get<{
          userCount: number;
          menuCount: number;
        }>("stats/counts");
        setCounts(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  // Skeleton component for loading state
  const SkeletonCard = () => (
    <div className="p-4 bg-white rounded-lg shadow animate-pulse h-40"></div>
  );

  const SkeletonChart = () => (
    <div className="p-4 bg-white rounded-lg shadow animate-pulse h-64"></div>
  );

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonChart />
          </>
        ) : (
          <>
            <EcommerceMetrics
              userCount={counts.userCount}
              menuCount={counts.menuCount}
            />
            <UserMenuChart
              userCount={counts.userCount}
              menuCount={counts.menuCount}
            />
          </>
        )}
      </div>

      <div className="col-span-12 xl:col-span-5">
        {loading ? (
          <SkeletonCard />
        ) : (
          <MonthlyTarget
            userCount={counts.userCount}
            menuCount={counts.menuCount}
          />
        )}
      </div>

      <div className="col-span-12">
        {loading ? (
          <SkeletonChart />
        ) : (
          <StatisticsChart
            userCount={[counts.userCount]}
            menuCount={[counts.menuCount]}
          />
        )}
      </div>
    </div>
  );
}
