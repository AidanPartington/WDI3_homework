# https://gist.github.com/mattswann/9d1f999c075d497496fb
require 'pry'

puts "Give random number in digits and text"

# Get a random number and turn it into a string
random_number = rand(99).to_s
# random_number = 40

puts random_number
# Change it to an array
random_number = random_number.split('')


# puts "#{str}"


def single_number(number)
     case number 
     when '0'
         str =  str.split('')
         str.pop
         str.join 
     when '1'
        'one'
     when '2'
        "two"
     when '3'
        "three"
     when '4'
        "four"
     when '5'
        "five"
     when '6'
        "six"
     when '7'
        "seven"
     when '8'
        "eight"
     when '9'
        "nine"
     end
end



def teens(random_number)
  case random_number
     when ['1','0']
       print "Ten"
     when ['1','1']
       print "Eleven"
     when ['1','2']
       print "Twelve"
     when ['1','3']
       print "Thirteen"
     when ['1','4']
       print "Four-teen"
     when ['1','5']
       print "Fifteen"
     when ['1','6']
       print "sixteen"
     when ['1','7']
       print "seventeen"
     when ['1','8']
       print "eighteen"
     when ['1','9']
       print "Nineteen"
     end
end

# determine if it is 1 or 2 digits
if random_number.length > 1
     case random_number[0] 
     when '1'
      return teens(random_number)
     when '2'
       str = "Twenty-"
     when '3'
       str = "Thirty-"
     when '4'
       str = "Forty-"
     when '5'
       str = "Fifty-"
     when '6'
       str = "Sixty-"
     when '7'
       str = "Seventy-"
     when '8'
       str = "Eighty-"
     when '9'
       str = "Ninety-"
     end

    puts "#{str}#{single_number(random_number[1])}"
  else
    puts "#{single_number(random_number[0])}"
end



# binding.pry
