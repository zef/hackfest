class Repo

  attr_accessor :user, :name, :repo_info, :network_info

  def initialize(user, name)
    @user = user
    @name = name
    set_repo_data
  end

  def forks

  end

  # private

  def set_repo_data
    url  = File.join("http://github.com/api/v2/json/repos/show/", user, name)
    @repo_info = JSON.parse(open(url).read)['repositiory']

    url = File.join(url, 'network')
    @network_info = JSON.parse(open(url).read)['network']
  end

end
