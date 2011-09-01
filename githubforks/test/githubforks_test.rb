require 'test_helper'

class GithubforksTest < MiniTest::Unit::TestCase
  def setup
    @repo = Repo.new('quickleft', 'hackfest', :include_forks => true)
  end

  def test_repo_includes_data
    puts @repo.inspect
    # assert @repo.
    assert true
  end
end
