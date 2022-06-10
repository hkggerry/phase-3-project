class Calender < ActiveRecord::Base
    has_many :joins
    has_many :activities, through: :joins
  end