# frozen_string_literal: true

module Mutations
  # Mutation to delete an account
  class DeleteAccount < BaseMutation
    argument :id, ID, required: true

    field :account, Types::AccountType, null: false

    def resolve(id:)
      { account: Account.find(id).destroy }
    end
  end
end
