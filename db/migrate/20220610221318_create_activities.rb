class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :to_do
      t.string :location
      t.string :duration
      t.integer :calender_id
    end
  end
end
