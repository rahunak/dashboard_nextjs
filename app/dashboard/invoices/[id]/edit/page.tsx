import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
 
export default async function Page(props:{params:Promise<{id:string}>}) {
 const params = await props.params;
 const id = params.id;
 const [invoice, customers] = await Promise.all([
  fetchInvoiceById(id),
  fetchCustomers(),
]);
console.log("->",[invoice, customers]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}