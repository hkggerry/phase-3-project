class Join < ActiveRecord::Base
    belongs_to :calender
    belongs_to :activity
  end