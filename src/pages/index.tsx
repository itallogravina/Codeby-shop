import { VStack } from '@chakra-ui/react'
import axios from 'axios'
import Main from 'components/Layout'
import LayoutCart from 'components/LayoutCart'
import SideBar from 'components/SideBar'
import { GetServerSideProps } from 'next/types'
import { useEffect, useState } from 'react'

export default function Home({ products }) {
  const [productdata, setproductdat] = useState(products)
  const [selectOptions, setselectOptions] = useState<number>(1)

  async function ApiGetData() {
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/api/date',
      headers: { 'Content-Type': 'application/json' },
      data: { value: selectOptions }
    }
    const products = await axios
      .request(options)
      .then((response) => response.data)
      .catch(function (error) {
        console.error(error)
      })
    setproductdat(products)
  }
  useEffect(() => {
    ApiGetData()
    console.log(productdata)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectOptions])

  return (
    <Main>
      <SideBar SidebarButton={(e) => setselectOptions(e)}></SideBar>

      <VStack alignItems="flex-start" w="full" p={6}>
        <LayoutCart data={productdata} />
      </VStack>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/api/date',
    headers: { 'Content-Type': 'application/json' },
    data: { value: 2 }
  }

  const products = await axios
    .request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error)
    })

  return {
    props: { products }
  }
}
