require 'pry'

50.times {
  print " * WOOF * "
  sleep 0.1
  print "MEEEOOW"
}

puts " "
puts " -------------------------------------------"
puts "|         A: Adopt                          |"
puts "|         B: Abandon                        |"
puts "|         C: Add Client                     |"
# puts "|                                           |"
puts " -------------------------------------------"

class Animal
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize
    @name
    @age
    @gender
    @species
    @toys
    
    File.open('animal.txt', 'a+') do |file|
      puts "What is the animal's Name?"
      response = gets.chomp + " "
      @name = response
      file.print(response)

      puts "What is the animal species?"
      response = gets.chomp + " "
      @species = response
      file.print(response)

      puts "What is the animals age?"
      response = gets.chomp + " "
      @age = response
      file.print(response)

      puts "What is the animals gender?"
      response = gets.chomp + " "
      @gender = response
      file.print(response)

      puts "how many toys does the animal have?"
      response = gets.chomp + " "
      @toys = response
      file.print(response)
      file.puts " "
    end
  end

end

# File of clients

class Client
  attr_accessor :name, :children, :age, :pets 
  
  def initialize
    @name
    @children
    @age
    @pets
  
    File.open('client.txt', 'a+') do |file|
      puts "What is the Client's Name?"
      response = gets.chomp + " "
      @name = response
      file.print(response)

      puts "Does the clients have children (y/n)?"
      response = gets.chomp.downcase + " "
      @children = response
      file.print(response)

      puts "What is the clients age?"
      response = gets.chomp + " "
      @age = response
      file.print(response)

      puts "How many pets does the Client already have?"
      response = gets.chomp + " "
      @pets = response
      file.print(response)
      file.puts " "
    end
  end

end

class Shelter
  attr_accessor :clients, :animals
  File.open('animal.txt', 'r') do |line|
  end
  File.open('client.txt', 'r') do |line|
  end
end

class Relationships
end



binding.pry