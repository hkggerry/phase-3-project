class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  
  get "/calenders" do
    calender = Calender.all
    calender.to_json
  end

  get "/calenders/:id" do
    calender = Calender.find(params[:id])
    calender.to_json(include: :activities)
  end

end
