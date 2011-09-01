# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "mygem/version"

Gem::Specification.new do |s|
  s.name        = "mygem"
  s.version     = Mygem::VERSION
  s.authors     = ["Hacker"]
  s.email       = ["hacker@quickleft.com"]
  s.homepage    = ""
  s.summary     = %q{TODO: Write a gem summary}
  s.description = %q{TODO: Write a gem description}

  s.rubyforge_project = "mygem"

  s.files = Dir["{lib}/**/*"] + ["Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]
  s.require_paths = ["lib"]

  s.add_dependency 'rake'
  s.add_dependency "metric_fu" , "~> 2.1.1"

  # Development Dependencies
  s.add_development_dependency "bundler"  , "~> 1.0.0"
  s.add_development_dependency "minitest" , "~> 2.2.2"
end
