# frozen_string_literal: true

module Types
  # The query root of this schema
  class QueryType < Types::BaseObject
    description 'The query root of this schema'

    field :account, AccountType, null: true do
      description 'Find an account by ID'
      argument :id, ID, required: true
    end

    field :accounts, [AccountType], null: false do
      description 'Retun all accounts'
    end

    def account(id:)
      Account.find(id)
    end

    def accounts
      Account.all
    end
  end
end
