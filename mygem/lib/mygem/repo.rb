class Repo

  attr_accessor :user, :name, :forks

  def initialize(user, name)
    @user = user
    @name = name
  end

  def forks

  end

  # private

  def get_fork_data
    url  = File.join("http://github.com/api/v2/json/repos/show/", user, name)
    json = open(url)
    puts json
  end

end
