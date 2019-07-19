var gulp = require('gulp'),
    replace = require('gulp-replace');
//这是为了上线做的脚本http://192.168.220.82:8080/
gulp.task('release', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM 192.168.220.82:8080 环境转移 192.168.1.227 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.220\\{2}.82:8080/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.227'))
        .pipe(replace(/192\.168\.220\.82:8080/gm, '192.168.1.227'))
        .pipe(replace(/192\.168\.220\.82/gm, '192.168.1.227'))
        .pipe(replace(/192\\\\.168\\\\.220\\\\.82/gm, '192\\.168\\\\.1\\\\.227'))
        //大数据 192.168.1.174环境转移192.168.1.202环境
        // .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.174:8080/gm,'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.202'))
        // .pipe(replace(/192\.168\.1\.174:8080/gm,'192.168.1.202'))
        // .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.174:8080/gm,'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.224:8080'))
        // .pipe(replace(/192\.168\.1\.174:8080/gm,'192.168.1.224:8080'))
        .pipe(gulp.dest('./'));
});

gulp.task('releaseCom', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM http://192.168.220.82:8080 环境转移 https://vcrm-uat.pttl.com:8080 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.220\\{2}.82:8080/gm, 'https:\\\\/\\\\/vcrm-uat\\\\.pttl\\\\.com:8080'))
        .pipe(replace(/http:\/\/192\.168\.220\.82:8080/gm, 'https://vcrm-uat.pttl.com:8080'))
        .pipe(replace(/http:\/\/192\.168\.220\.82/gm, 'https://vcrm-uat.pttl.com:8080'))
        .pipe(gulp.dest('./'));
});

gulp.task('releaseCom82', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM 切换UAT环境 https://vcrm-uat.pttl.com:8080 环境转移 http://192.168.220.82 环境
        .pipe(replace(/https:\\{2}\/\\{2}\/vcrm-uat\\{2}.pttl\\{2}.com:8080/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.220\\\\.82:8080'))
        .pipe(replace(/https:\\{2}\/\\{2}\/vcrm-uat\\{2}.pttl\\{2}.com/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.220\\\\.82'))
        .pipe(replace(/https:\/\/vcrm-uat\.pttl\.com:8080/gm, 'http://192.168.220.82:8080'))
        .pipe(replace(/https:\/\/vcrm-uat\.pttl\.com/gm, 'http://192.168.220.82'))
        .pipe(gulp.dest('./'));
});

gulp.task('releaseCom227', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM 切换生产环境 https://vcrm-uat.pttl.com:8080 环境转移 http://192.168.1.227 环境
        .pipe(replace(/https:\\{2}\/\\{2}\/vcrm-uat\\{2}.pttl\\{2}.com:8080/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.227'))
        .pipe(replace(/https:\/\/vcrm-uat\.pttl\.com:8080/gm, 'http://192.168.1.227'))
        .pipe(replace(/https:\/\/vcrm-uat\.pttl\.com/gm, 'http://192.168.1.227'))
        .pipe(gulp.dest('./'));
});

gulp.task('dev', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VCRM 192.168.1.227 环境转移 192.168.1.224:8080 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.227/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.220\\\\.82:8080'))
        .pipe(replace(/192\.168\.1\.227/gm, '192.168.220.82:8080'))
        .pipe(replace(/192\.168\.1\.227/gm, '192.168.220.82'))
        //大数据 192.168.1.202环境转移192.168.1.174环境
        // .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.202/gm,'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.174:8080'))
        // .pipe(replace(/192\.168\.1\.202/gm,'192.168.1.174:8080'))
        .pipe(gulp.dest('./'));
});

gulp.task('devCom', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VCRM切换测试环境域名地址  http://192.168.1.227 环境转移 https://vcrm-uat.pttl.com:8080 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.227/gm, 'https:\\\\/\\\\/vcrm-uat\\\\.pttl\\\\.com:8080'))
        .pipe(replace(/http:\/\/192\.168\.1\.227/gm, 'https://vcrm-uat.pttl.com:8080'))
        .pipe(replace(/http:\/\/192\.168\.1\.227/gm, 'https://vcrm-uat.pttl.com'))
        .pipe(gulp.dest('./'));
});

//174to224
gulp.task('174to224', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.174:8080/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.224:8080'))
        .pipe(replace(/192\.168\.1\.174:8080/gm, '192.168.1.224:8080'))
        .pipe(gulp.dest('./'));
});

//224 to 82
gulp.task('newUAT', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //VRCM 192.168.1.224:8080 环境转移 192.168.1.227 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.224:8080/gm, 'http:\\\\/\\\\/192\\\\.168\\\\.220\\\\.82:8080'))
        .pipe(replace(/192\.168\.1\.224:8080/gm, '192.168.220.82:8080'))
        .pipe(replace(/192\.168\.1\.224/gm, '192.168.220.82'))
        //大数据 192.168.1.174环境转移192.168.1.202环境
        // .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.174:8080/gm,'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.202'))
        // .pipe(replace(/192\.168\.1\.174:8080/gm,'192.168.1.202'))
        // .pipe(replace(/http:\\{2}\/\\{2}\/192\\{2}.168\\{2}.1\\{2}.174:8080/gm,'http:\\\\/\\\\/192\\\\.168\\\\.1\\\\.224:8080'))
        // .pipe(replace(/192\.168\.1\.174:8080/gm,'192.168.1.224:8080'))
        .pipe(gulp.dest('./'));
});