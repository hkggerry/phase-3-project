class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  
  get "/calenders" do
    calender = Calender.all
    calender.to_json(include: :activities)
  
  end

  get "/calenders/:id" do
    calender = Calender.find(params[:id])
    calender.to_json(include: :activities)
  end

  get "/activities" do
    activity = Activity.all
    activity.to_json()
  end

  get "/activities/:id" do
    activity = Activity.find(params[:id])
    activity.to_json()
  end

  post '/activities' do
    activity = Activity.create(
      to_do: params[:to_do],
      calender_id: params[:calender_id],
      location: params[:location],
      duration: params[:duration])
    activity.to_json
  end

  delete '/activities/:id' do
    activity = Activity.find(params[:id])
    activity.destroy
    activity.to_json
  end 
end
