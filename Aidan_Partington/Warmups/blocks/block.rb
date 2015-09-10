require 'pry'
class Block


		def initialize(thing) #block.new
			@word = thing
			@cube = [['B','O'],
			['X','K'],
			['D','Q'],
			['C','P'],
			['N','A'],
			['G','T'],
			['R','E'],
			['T','G'],
			['Q','D'],
			['F','S'],
			['J','W'],
			['H','U'],
			['V','I'],
			['A','N'],
			['E','R'],
			['F','S'],
			['L','Y'],
			['P','C'],
			['Z','M'],]
		end

		def word
			# "A" word
			if @word == "A"
				@cube.each do |elem|
						elem.each do |l|
						@word == l
						return true
					end
				end
			end

		end
end
