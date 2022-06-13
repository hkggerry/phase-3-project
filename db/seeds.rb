puts "🌱 Seeding spices..."

Calender.create(day: "Monday")
Calender.create(day: "Tuesday")
Calender.create(day: "Wednesday")
Calender.create(day: "Thursday")
Calender.create(day: "Friday")
Calender.create(day: "Saturday")
Calender.create(day: "Sunday")

Activity.create(to_do: "Work", location: "Office", duration: "8 Hours")
Activity.create(to_do: "Workout", location: "Gym", duration: "1.5 Hours")
Activity.create(to_do: "Board Game Night", location: "Home", duration: "4 Hours")
Activity.create(to_do: "Study", location: "Library", duration: "2 Hours")
Activity.create(to_do: "Date Night", location: "Restaurant")
Activity.create(to_do: "Walk My Cat", location: "Park", duration: "30 Minutes")


Join.create(calender_id: 1, activity_id: 1)
Join.create(calender_id: 1, activity_id: 2)

Join.create(calender_id: 2, activity_id: 1)
Join.create(calender_id: 2, activity_id: 4)

Join.create(calender_id: 3, activity_id: 1)
Join.create(calender_id: 3, activity_id: 4)

Join.create(calender_id: 4, activity_id: 1)
Join.create(calender_id: 4, activity_id: 2)

Join.create(calender_id: 5, activity_id: 1)
Join.create(calender_id: 5, activity_id: 5)


Join.create(calender_id: 6, activity_id: 4)
Join.create(calender_id: 6, activity_id: 6)

Join.create(calender_id: 7, activity_id: 2)
Join.create(calender_id: 7, activity_id: 3)



puts "✅ Done seeding!"
