import { AppPieChart } from '@/components/custom/PieChart';
import { AppAreaChart } from '@/components/custom/AreaChart';
import { AppBarChart } from '@/components/custom/BarChart';
import { TodoList } from '@/components/custom/TodoList';
import { CardList } from '@/components/custom/CardList';

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-0">
      <div className="bg-primary-foreground p-4 rounded-lg overflow-auto  lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg overflow-auto">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg overflow-auto">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg overflow-auto">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg overflow-auto  lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg overflow-auto">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
