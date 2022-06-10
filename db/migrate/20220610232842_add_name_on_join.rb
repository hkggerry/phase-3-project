class AddNameOnJoin < ActiveRecord::Migration[6.1]
  def change
    add_column :joins, :to_do, :string
  end
end
