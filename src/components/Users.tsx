import React from 'react'
import PrimaryBtn from './shared/button/PrimaryBtn'
import { useGetUsersQuery } from '../graphql/autogenerate/hooks'

export const Users = () => {
  const { data, loading, error } = useGetUsersQuery()
  if (loading) return <div>Loading ...</div>
  if (error) return <div> Error at Users component</div>

  const userDetail: any = data && data.users
  console.log(userDetail.map((item: any) => item))

    return(
        <>
            <PrimaryBtn>Submit</PrimaryBtn>
            <p>This is from Users component maybe</p>
            {userDetail?.map((item: any) => 
                <p key={item.id}>
                    {item.id}
                </p> 
            )}
        </>
    )
}
