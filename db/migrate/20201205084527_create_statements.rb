class CreateStatements < ActiveRecord::Migration[6.0]
  def change
    create_table :statements do |t|

      t.timestamps
    end
  end
end
