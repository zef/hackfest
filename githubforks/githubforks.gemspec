# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "githubforks/version"

Gem::Specification.new do |s|
  s.name        = "githubforks"
  s.version     = Githubforks::VERSION
  s.authors     = ["Zef Houssney", "Sean Mcnamara"]
  s.email       = ["hacker@quickleft.com"]
  s.homepage    = ""
  s.summary     = %q{TODO: Play with github forks}
  s.description = %q{TODO: Play with github forks}

  s.rubyforge_project = "githubforks"

  s.files = Dir["{lib}/**/*"] + ["Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]
  s.require_paths = ["lib"]

  s.add_dependency 'rake'
  s.add_dependency "metric_fu" , "~> 2.1.1"

  # Development Dependencies
  s.add_development_dependency "bundler"  , "~> 1.0.0"
  s.add_development_dependency "minitest" , "~> 2.2.2"
end
