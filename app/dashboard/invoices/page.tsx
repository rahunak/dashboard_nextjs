async function name() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
 }

export default async function Page() {

 await name() ;
  return <p>invoices Page</p>;
}