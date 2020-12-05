# frozen_string_literal: true

module Types
  # Object type for a statement
  class StatementType < Types::BaseObject
    description 'A statement'
    field :id, ID, null: false
  end
end
