class AddNameOnJoin < ActiveRecord::Migration[6.1]
  def change
    add_column :joins, :calender_id, :integer
  end
end
