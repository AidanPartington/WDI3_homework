class Queens

	def initialze(positions = {})
		@white = positions[:white] || [0,3]
		@black = positions[:black] || [7,3]
	end

	def @white[0] == @black[0]
		raise ArgumentError 
	end

	def white
		@white
	end

	def black
		@black
	end

end