# frozen_string_literal: true

module Types
  # Object type for an account
  class AccountType < Types::BaseObject
    description 'An account'
    field :id, ID, null: false
    field :name, String, null: false
  end
end
