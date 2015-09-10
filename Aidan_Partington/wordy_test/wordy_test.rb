class Calculator
  def ask(number)
  end
end

require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new()

require_relative 'wordy_test.rb'


class CalculatorTest < MiniTest::Test
  def setup
    @calculator = Calculator.new
  end

  def test_add_1
    assert_equal 2, @calculator.ask('What is   1 plus 1?')
  end

  def test_add_2
    skip
    assert_equal 3, @calculator.ask('How much is 1 plus 2 ?')
  end

  def test_add_more_digits
    skip
    assert_equal 45801, @calculator.ask('What is 123 plus 45678?')
  end

  def test_add_negative_numbers
    skip
    assert_equal -11, @calculator.ask('What is -1 plus -10?')
  end

  def test_add_multiple_numbers
    skip
    assert_equal 15, @calculator.ask('What is 5 plus 5 plus 5?')
  end  
end
