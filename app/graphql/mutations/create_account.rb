# frozen_string_literal: true

module Mutations
  # Mutation to create an account
  class CreateAccount < BaseMutation
    argument :name, String, required: true

    field :account, Types::AccountType, null: false

    def resolve(name:)
      { account: Account.create(name: name) }
    end
  end
end
