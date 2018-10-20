@echo off
:: 设置压缩JS文件的根目录，脚本会自动按树层次查找和压缩所有的JS
SET JSFOLDER=D:\jscodes\leapar.github.io\dshow\js（注意路劲中不能有空格）
echo 正在查找JS文件
chdir /d %JSFOLDER%
for /r . %%a in (*.js) do (
    @echo 正在压缩 %%~a ...
    uglifyjs %%~fa  -m -o %%~fa
)
echo 完成!
pause & exit