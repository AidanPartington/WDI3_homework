# https://gist.github.com/mattswann/d816adfec6b56fb27d6c
require 'pry'

class Robot
  
  def initialize
    @instructions = 0
    @name = random_name
  end

  def name
    @name
  end

  def reset
    @instructions += 1
    @name = random_name
  end

  def random_name
    name = []
    alphabet = %w{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}
    name[0] = alphabet[rand(26)]
    name[1] = alphabet[rand(26)]
    name[2] = rand(999)
    @name = name.join
    # @name = "#{prefix}#{suffix}"
    # def prefix
    #   ('AA'..'ZZ').to_a.sample
    # end
    # def suffix
    #   ('000'..'999').to_a.sample
    # end
  end

  def instruction_count
    @instructions += 1
  end

end

puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name

puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name

puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name
puts robot3.instruction_count # => 5

binding.pry
