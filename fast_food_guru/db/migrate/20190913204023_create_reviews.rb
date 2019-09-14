class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :restaurant
      t.float :address
      t.string :review
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
