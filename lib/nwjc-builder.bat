@echo off & color 0e & setlocal enabledelayedexpansion
set NW_HOME=%1

set MODULES_DIR=%2
set FILE_EXT=%3
cd %MODULES_DIR%
for /R %%s in (*) do (
set current_file=%%s
%NW_HOME%\nwjc.exe !current_file! !current_file:~0,-2!%FILE_EXT%
)
echo "execute success!"
pause