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


puts "✅ Done seeding!"
