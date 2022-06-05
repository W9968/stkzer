import Head from 'next/head'
import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'

import AdminLayout from 'layout/Admin.layout'

import { category } from 'types/data.d'
import { supabase } from 'hooks/useSupa'
import { Button, Input } from 'components/export'
import { BiTrashAlt, BiEditAlt, BiEdit } from 'react-icons/bi'

import {
  Action,
  CategoryData,
  CategoryForm,
  CategoryPageContainer,
  DataRow,
} from 'styles/category.module'

const Home: NextPage<prop> = ({ data }) => {
  const [value, setValue] = useState<string>('')
  const [payload, setPayload] = useState<category[]>(data)

  return (
    <>
      <Head>
        <title>STKZER - Category</title>
        <meta
          name='description'
          content='my watchlist that i use to store data of things i watched'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AdminLayout>
        <CategoryPageContainer>
          <CategoryForm>
            <h1>Categories</h1>
            <Input
              type={'text'}
              value={value}
              label={'category name'}
              placeholer={'add category'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
            />
            <Button
              title={'add'}
              onClick={async () => {
                const { data, error } = await supabase
                  .from('CATEGORY_TABLE')
                  .insert([
                    {
                      category_name: value,
                      category_created_at: new Date(Date.now()),
                    },
                  ])

                if (error === null) {
                  setValue('')
                  setPayload([...payload, ...data])
                }
              }}
            />
          </CategoryForm>
          <CategoryData>
            <DataRow>
              <p>Category</p>
              <p>action</p>
            </DataRow>
            {payload.map((el) => (
              <DataRow key={el.category_name}>
                <p>{el.category_name}</p>
                <Action>
                  <button>
                    <BiEdit size={24} />
                  </button>
                  <button
                    onClick={async () => {
                      const { data, error } = await supabase
                        .from('CATEGORY_TABLE')
                        .delete()
                        .match({ category_name: el.category_name })
                      if (error === null) {
                        setPayload(
                          payload.filter(
                            (el: category) =>
                              el.category_name !== data[0].category_name
                          )
                        )
                      }
                    }}>
                    <BiTrashAlt size={24} />
                  </button>
                </Action>
              </DataRow>
            ))}
          </CategoryData>
        </CategoryPageContainer>
      </AdminLayout>
    </>
  )
}

export default Home

type prop = {
  data: category[]
}

export async function getStaticProps() {
  const { data } = await supabase
    .from('CATEGORY_TABLE')
    .select()
    .order('category_created_at', { ascending: false })

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
