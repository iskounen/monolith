# frozen_string_literal: true

module Types
  # The mutation root of this schema
  class MutationType < Types::BaseObject
    field :delete_account, mutation: Mutations::DeleteAccount
    field :create_account, mutation: Mutations::CreateAccount
  end
end
