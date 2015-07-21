# https://gist.github.com/epoch/de321553867d5667aff8
require 'pry' 

puts "Will produce sum of multiples of 2 smaller numbers up to a larger chosen number"
puts "Give the chosen number"
chosen_number = gets.chomp  

puts "Give first multiple number"
variable1 = gets.chomp
puts "Give second multiple number"subl has
variable2 = gets.chomp    

first_multiple  = (chosen_number.to_i-1) / variable1.to_i
second_multiple  = (chosen_number.to_i-1) / variable2.to_i

#sum all the multiples of 3
x = 1
sum_3_multiples = 0

until x > first_multiple
 sum_3_multiples = sum_3_multiples + x * variable1.to_i
 x += 1
end

#sum all the multiples of 5
x = 1 
sum_5_multiples = 0
until x > second_multiple
 sum_5_multiples = sum_5_multiples + x * variable2.to_i
 x += 1
end

#Print out result
result_number = sum_3_multiples + sum_5_multiples
puts "result " + result_number.to_s
  