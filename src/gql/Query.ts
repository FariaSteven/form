import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      celphone
      cep
      city
      cpf
      email
      languages
      name
      neighborhood
      password
      street
    }
  }
`;
