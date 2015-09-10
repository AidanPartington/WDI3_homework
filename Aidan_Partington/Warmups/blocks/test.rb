require "minitest/autorun"
require "minitest/reporters"
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new()

require_relative 'block'

class BlockTest < MiniTest::Test
	
	def test_can_make_word 
		word = Block.new("A").word
		assert_equal true, word
		# => true
	end 
	# def can_make_word("BARK")
	# 	# => true
	# end
	# def can_make_word("BOOK")
	# 	# => false
	# end
	# def can_make_word("TREAT")
	# 	# => true
	# end
	# def can_make_word("COMMON")
	# 	# => false
	# end 
	# def can_make_word("SQUAD")
	# 	# => true
	# end 
	# def can_make_word("CONFUSE")
	# 	# => true
	# end

end

