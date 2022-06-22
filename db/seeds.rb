puts "🌱 Seeding spices..."

Calender.create(day: "Monday")
Calender.create(day: "Tuesday")
Calender.create(day: "Wednesday")
Calender.create(day: "Thursday")
Calender.create(day: "Friday")
Calender.create(day: "Saturday")
Calender.create(day: "Sunday")

Activity.create(to_do: "Work From Home", location: "Home", duration: "8 Hours", calender_id: 1)
Activity.create(to_do: "Work From Home", location: "Home", duration: "8 Hours", calender_id: 2)
Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 3)
Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 4)
Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 5)

Activity.create(to_do: "Workout", location: "Gym", duration: "1.5 Hours", calender_id: 2)
Activity.create(to_do: "Bouldering", location: "Bouldering Gym", duration: "1.5 Hours", calender_id: 1)
Activity.create(to_do: "Bouldering", location: "Bouldering Gym", duration: "1.5 Hours", calender_id: 4)
Activity.create(to_do: "Board Game Night", location: "Home", duration: "4 Hours", calender_id: 7)
Activity.create(to_do: "Study", location: "Library", duration: "2 Hours", calender_id: 3)
Activity.create(to_do: "Date Night", location: "Restaurant", calender_id: 5)
Activity.create(to_do: "Walk My Cat", location: "Park", duration: "30 Minutes", calender_id: 1)


puts "✅ Done seeding!"
