class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :name
      t.string :nickname
      t.string :phone_number
      t.string :email
    end
  end

  def down
    drop_table :users
  end
end
