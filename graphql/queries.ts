import {gql} from '@apollo/client'

export const GET_SELLERS_ID = gql`
query ($id : ID!){
    getSellerById(id: $id){
        name
    }
}
`

export const GET_ALL_SELLERS = gql`
query{
    getSellerList{
        id,
        name,
        image,
        description
    }
}


`

export const GET_ALL_ITEMS= gql `

query{
    getItemList{
        id
        title
        image
        description
        price
    }
}


`

export const GET_ITEM_BY_ID=gql`

query ($id: ID!) {
    getItemById(id: $id){
        image
        id
        description
        title
        price
    }
}
`
export const GET_SELLERS_ITEMS = gql`
query ($id: ID!){
    getSellerById(id: $id){
        name,
        image
        items{
        image
        id
        description
        title
        price
        }
    }

}

`
