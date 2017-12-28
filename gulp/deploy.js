'use strict';

var path = require('path');

module.exports = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;

  var user = '1216793';
  var sshKey = '/Users/sebmade/.ssh/id_rsa';
  var vhost = 'hikariblue.com';

  gulp.task('deploy', function() {
    return gulp.start('sftp');
  })

  gulp.task('sftp', function () {
    return gulp.src([path.join(taskTarget,'/**'),  '!'+path.join(taskTarget, '\.DS_Store')], {dot: true})
      .pipe(plugins.changed('.'+taskTarget, {hasChanged: plugins.changed.compareSha1Digest}))
      .pipe(gulp.dest('.'+taskTarget))
      .pipe(plugins.sftp({
        host: 'sftp.dc2.gpaas.net',
        user: user,
        passphrase: 'lemanitobanerepondplus',
        remotePath: 'vhosts/' + vhost + '/htdocs'
      }));
  });
};
