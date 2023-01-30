import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $celphone: String!
    $cpf: String!
    $cep: String!
    $neighborhood: String!
    $street: String!
    $city: String!
    $email: String!
    $password: String!
    $languages: {
      $value: String!
      $label: String!
    }
  ) {
    createUser(
      data: {
        name: $name
        celphone: $celphone
        cpf: $cpf
        cep: $cep
        neighborhood: $neighborhood
        street: $street
        city: $city
        email: $email
        password: $password
        languages: $languages
      }
    ) {
      _id
      name
      celphone
      cpf
      cep
      neighborhood
      street
      city
      email
      password
      languages {
        value
        label
      }
    }
  }
`;
