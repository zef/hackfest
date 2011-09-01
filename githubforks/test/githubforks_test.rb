require 'test_helper'

class GithubforksTest < MiniTest::Unit::TestCase
  def setup
    @repo = Repo.new('quickleft', 'hackfest', :include_forks => false)
  end

  def test_repo_includes_data
    assert @repo.url == 'https://github.com/quickleft/hackfest'
  end
  
end
