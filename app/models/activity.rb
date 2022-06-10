class Activity < ActiveRecord::Base
    has_many :joins
    has_many :calenders, through: :joins
  end