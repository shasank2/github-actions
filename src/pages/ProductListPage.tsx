import { Table } from '@radix-ui/themes'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import QuantitySelector from '../components/QuantitySelector'
import { Product } from '../entities'

function ProductListPage() {
  const { data: products, isLoading, error } = useProducts()

  const renderProducts = () => {
    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    if (products!.length === 0) return <p>No product was found!</p>

    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <Table.Root className='w-full table-auto'>
            <Table.Header>
              <Table.Row className='bg-gray-2 text-left dark:bg-meta-4'>
                <Table.ColumnHeaderCell className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11'>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11' >Price</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11'></Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {products!.map(product => (
                <Table.Row key={product.id}>
                  <Table.Cell className='border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11'>
                    <h5 className="font-medium text-black dark:text-white">
                      <Link to={product.id.toString()}>{product.name}</Link>
                    </h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-sm text-black dark:text-white">
                      ${product.price}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <QuantitySelector product={product} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Products</h1>
      {renderProducts()}
    </div>
  )
}

const useProducts = () =>
  useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: () => axios.get('/products').then(res => res.data),
  })

export default ProductListPage
