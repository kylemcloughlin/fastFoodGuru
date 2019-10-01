class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.string :city
      t.string :prov_or_state
      t.string :country

      t.timestamps
    end
  end
end
