# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_seed = [{
  "name" => "kyle_m",
  "password" => "12345"
},
  {
    "name" => "jord_h",
    "password" => "yolo420swag"
  }
]
reviews_seed = [{
  "restaurant" => "Smoke's Poutinerie",
  "lat" => "43.648518",
  "lng" => "-79.387743",
  "review" => "❤ cauliflower butter chicken flavor poutine! This particular location was less clean. Mostly because they seemed under staffed.I almost lost my appetite after being in the restaurant. But the butter chicken less cauliflower   excellent!",
  "user_name" => "kyle_m"

},
{
  "restaurant" => "Basil Box",
  "lat" => "43.657759",
  "lng" => "-79.381346",
  "review" => "Gluten-free goodness! Fresh ingredients. Simple build your own bowl style. All options taste great. I just wish it was a bit cheaper (minus a star). A single bowl with nothing extra is around $12 including tax.",
  "user_name" => "jord_h"

},{
  "restaurant" => "Oh My Gyro",
  "lat" => "43.649964",
  "lng" => "-79.391021",
  "review" => "Delicious. I had the beef Donaire. The bread tasted super fresh the meat and condiments were delicious and the fries were exactly how I like them. Right down the street from a really nice park with picnic tables. Would definitely go back here.",
  "user_name" => "kyle_m"

},{
  "restaurant" => "Charidise",
  "lat" => "43.655984",
  "lng" => "-79.393151",
  "review" => "Gorgeous ambience and decent food. The automated ordering system gives you the vibe of Japan. The minced pork rice dish was amazing. So was the beef in the Taiwanese noodles.",
  "user_name" => "kyle_m"

},{
  "restaurant" => "Gerry's Fast Food",
  "lat" => "43.683140",
  "lng" => "-79.418275",
  "review" => "Very elegant and convenient restaurant. They serve big meals and for economical prices. I loved the meals a lot and the staff members were very amiable and chatty. I recommend this place.",
  "user_name" => "kyle_m"

},{
  "restaurant" => "Califorina Sandwiches",
  "lat" => "43.652559",
  "lng" => "-79.412270",
  "review" => "The place looks newly renovated. It's really nice. Cheap food, huge portions, and simple but good. Not a lot of choices, but the ones they do have, you can tell they know what they're doing. Nothing crazy. Definitely would go again.",
  "user_name" => "kyle_m"

},{
  "restaurant" => "The Burgers Priest",
  "lat" => "43.666744",
  "lng" => "-79.315407",
  "review" => "Had the High Priest and regular fries. Both were excellent. The fries were crisp and fresh. The burger was indeed stacked high (two patties between three bends), and truly amazing: the beef was perfectly cooked (not greasy), and the toppings added flavour but were sparing enough not to overwhelm the flavour of the patties. Excellent experience.
Like",
  "user_name" => "jord_h"

},{
  "restaurant" => "Yummy House",
  "lat" => "43.669221",
  "lng" => "-79.335590",
  "review" => "I go to this great restaurant  a lot! This is the best place to dine.  I visit this place many times. The food is very tasty, the crew is friendly and the payment is affordable. I enjoy eating in this spot over a good supper.",
  "user_name" => "jord_h"

},{
  "restaurant" => "Freshii",
  "lat" => "43.677744",
  "lng" => "-79.350264",
  "review" => "not good. workers were complaining about how they were bored. food took a long time but at least the taste was decent, lots of calories which surprised me",
  "user_name" => "kyle_m"

},{
  "restaurant" => "Chick-N-Joy",
  "lat" => "43.665111",
  "lng" => "-79.321346",
  "review" => "This place is AMAZING!  Hands down, the best fried chicken, fries and chicken gravy in the city.  Nothing else compares.  Been eating here twice a week for the last 15 years.  It's sooo delicious.  The family that runs this place are awesome....Love these guys!  Thank you for filling my belly.",
  "user_name" => "jord_h"

}]

user_seed.each do |x|
User.create(x)
end

reviews_seed.each do |x|
user = User.find_by name: x["user_name"]
  Review.create(restaurant: x["restaurant"], lat: x['lat'], lng: x['lng'], review: x['review'], user_id: user.id)
end