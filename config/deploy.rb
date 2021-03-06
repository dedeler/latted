#############################################################
#	Application
#############################################################
# Add RVM's lib directory to the load path.

# Load RVM's capistrano plugin.
require "rvm/capistrano"
set :rvm_path, "/usr/local/rvm/"
set :rvm_bin_path, "/usr/local/rvm/bin/"
require "bundler/capistrano"


load 'deploy/assets'

set :application, "latted.me"
set :deploy_to, "/var/www/#{application}"

#############################################################
#	Settings
#############################################################

default_run_options[:pty] = true
set :use_sudo, false

#############################################################
#	Servers
#############################################################

set :user, "passenger"
set :domain, "server1.mehmet.pw"
server domain, :app, :web
role :db, domain, :primary => true

#############################################################
#	Subversion
#############################################################

set :repository,  "https://github.com/dedeler/latted.git"
set :svn_username, "git"
set :svn_password, "123321-"
set :scm_passphrase, "123321-"
set :checkout, "export"

#############################################################
#	Passenger
#############################################################

namespace :passenger do
  desc "Restart Application"
  task :restart do
    run "touch #{current_path}/tmp/restart.txt"
  end
end

after :deploy, "passenger:restart"

set :max_asset_age, 15 ## Set asset age in minutes to test modified date against.


namespace :db do
  task :db_config, :except => { :no_release => true }, :role => :app do
    run "cp -f ~/database.yml #{release_path}/config/database.yml"
  end
end


after "deploy:finalize_update", "db:db_config"

#namespace :deploy do
#  namespace :assets do
#    task :precompile, :roles => :web, :except => { :no_release => true } do
#      from = source.next_revision(current_revision)
#      if capture("cd #{latest_release} && #{source.local.log(from)} vendor/assets/ app/assets/ | wc -l").to_i > 0
#        run %Q{cd #{latest_release} && #{rake} RAILS_ENV=#{rails_env} #{asset_env} assets:precompile}
#      else
#        logger.info "Skipping asset pre-compilation because there were no asset changes"
#      end
#    end
#  end
#end

#
#after "deploy:finalize_update", "deploy:assets:determine_modified_assets", "deploy:assets:conditionally_precompile"
#
#namespace :deploy do
#  namespace :assets do
#
#    desc "Figure out modified assets."
#    task :determine_modified_assets, :roles => assets_role, :except => { :no_release => true } do
#      set :updated_assets, capture("find #{latest_release}/app/assets -type d -name .git -prune -o -mmin -#{max_asset_age} -type f -print", :except => { :no_release => true }).split
#    end
#
#    desc "Remove callback for asset precompiling unless assets were updated in most recent git commit."
#    task :conditionally_precompile, :roles => assets_role, :except => { :no_release => true } do
#      if(updated_assets.empty?)
#        callback = callbacks[:after].find{|c| c.source == "deploy:assets:precompile" }
#        callbacks[:after].delete(callback)
#        logger.info("Skipping asset precompiling, no updated assets.")
#      else
#        logger.info("#{updated_assets.length} updated assets. Will precompile.")
#      end
#    end
#
#  end
#end