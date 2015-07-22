#https://gist.github.com/mattswann/3d65f4c1a4a38d97e441#file-starbucks-md

require 'pry'

sleep(0.5)
puts "================================================================="
puts "================================================================="
sleep(0.5)
puts "                      WELCOME  TO"
sleep(0.5)
puts "             *         STARBUCKS         *"
sleep(0.5)
puts "                        COFFEE"
puts "================================================================="
sleep(0.5)
puts "================================================================="



class Coffee

    def initialize(drink, sweetness, size, name)
      #change random letter in name
      arr_name = name.split('')
      messup_txt = %w's t a r b u c k s'
      added_letter = messup_txt[rand(messup_txt.length)]
      name[rand(name.length)] = messup_txt[rand(messup_txt.length)]

      @drink = drink
      @sweetness = sweetness.to_s + " Sugars"
      @size = size
      @name = name  
    
      @collected
      @time = Time.now

    end

    def ready
      if @time<Time.now+1
        true
      end 
    end

    def collected=t
      @collected  = t
    end

end

c1 = Coffee.new('latte',2,'medium','Darryl')




binding.pry

