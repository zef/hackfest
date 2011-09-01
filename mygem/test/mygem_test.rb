require 'test_helper'

class MygemTest < MiniTest::Unit::TestCase
  def setup
    @repo = Repo.new('/thing')
  end

  def test_truth
    # puts Mygem.test_repo('junk')
    # @repo
    assert true
  end
end
