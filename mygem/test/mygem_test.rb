require 'test_helper'

class MygemTest < MiniTest::Unit::TestCase
  def setup
    @repo = Repo.new('quickleft', 'hackfest')
  end

  def test_truth
    # puts Mygem.test_repo('junk')
    puts @repo.repo_info.inspect
    puts @repo.network_info.inspect
    assert true
  end
end
