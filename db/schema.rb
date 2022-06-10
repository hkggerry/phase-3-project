# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_10_232842) do

  create_table "activities", force: :cascade do |t|
    t.string "location"
    t.string "duration"
  end

  create_table "calenders", force: :cascade do |t|
    t.string "day"
  end

  create_table "joins", force: :cascade do |t|
    t.integer "activity_id"
    t.integer "calender_id"
    t.string "to_do"
  end

end
