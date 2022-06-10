puts "🌱 Seeding spices..."

Calender.create(day: "Monday")
Calender.create(day: "Tuesday")
Calender.create(day: "Wednesday")
Calender.create(day: "Thursday")
Calender.create(day: "Friday")
Calender.create(day: "Saturday")
Calender.create(day: "Sunday")

Activity.create(location: "Office", duration: "8 Hours")
Activity.create(location: "Gym", duration: "1.5 Hours")
Activity.create(location: "Home", duration: "4 Hours")
Activity.create(location: "Library", duration: "2 Hours")

Join.create(to_do: "Work", calender_id: 1, activity_id: 1)
Join.create(to_do: "Workout", calender_id: 1, activity_id: 2)

Join.create(to_do: "Work", calender_id: 2, activity_id: 1)
Join.create(to_do: "Study", calender_id: 2, activity_id: 4)

Join.create(to_do: "Work", calender_id: 3, activity_id: 1)
Join.create(to_do: "Study", calender_id: 3, activity_id: 4)

Join.create(to_do: "Work", calender_id: 4, activity_id: 1)
Join.create(to_do: "Workout", calender_id: 4, activity_id: 2)

Join.create(to_do: "Work", calender_id: 5, activity_id: 1)

Join.create(to_do: "Study", calender_id: 6, activity_id: 4)

Join.create(to_do: "Board Game Night", calender_id: 7, activity_id: 3)



puts "✅ Done seeding!"
