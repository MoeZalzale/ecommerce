import {gql} from '@apollo/client'

export const GET_SELLERS_ID = gql`
query ($id : ID!){
    getSellerById(id: $id){
        name
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