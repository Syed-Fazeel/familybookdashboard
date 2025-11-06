import { DataTable } from '../data-table';
import { Badge } from '@/components/ui/badge';

const mockData = [
  { id: '1', name: 'Dance Academy', status: 'approved', revenue: '$1,245' },
  { id: '2', name: 'Music Studio', status: 'pending', revenue: '$890' },
  { id: '3', name: 'Art Classes', status: 'approved', revenue: '$2,100' },
];

const columns = [
  { key: 'name', header: 'Name' },
  { 
    key: 'status', 
    header: 'Status',
    render: (item: any) => (
      <Badge variant={item.status === 'approved' ? 'default' : 'secondary'}>
        {item.status}
      </Badge>
    )
  },
  { key: 'revenue', header: 'Revenue' },
];

export default function DataTableExample() {
  return (
    <div className="p-6 bg-background">
      <DataTable 
        columns={columns} 
        data={mockData}
        currentPage={1}
        totalPages={3}
        onPageChange={(page) => console.log('Page:', page)}
      />
    </div>
  );
}
