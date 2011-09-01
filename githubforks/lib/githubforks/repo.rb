class Repo

  attr_accessor :owner, :name, :forks, :repo_info

  def initialize(owner, name, options = {})
    @owner = owner
    @name = name
    set_repo_data
    if options[:data].nil?
      set_repo_data
    else
      @repo_info = options[:data]
    end

    if options[:include_forks]
      set_fork_data
    end
  end

  def url
    @repo_info['url']
  end

  private

  def set_repo_data
    @repo_info = JSON.parse(open(base_api_url).read)['repository']
  end

  def set_fork_data
    url   = File.join(base_api_url, 'network')
    forks = JSON.parse(open(url).read)['network']

    @forks = []

    for repo in forks
      @forks << Repo.new(repo['owner'], repo['name'], :data => repo)
    end
  end

  def base_api_url
    File.join("http://github.com/api/v2/json/repos/show/", owner, name)
  end

end
