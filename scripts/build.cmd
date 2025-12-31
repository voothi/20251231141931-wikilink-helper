@echo off
setlocal

:: Get the directory where this script resides (the scripts folder)
set SCRIPTS_DIR=%~dp0

:: Resolve project root (parent of scripts dir)
pushd "%SCRIPTS_DIR%.."
set PROJECT_ROOT=%CD%
popd

:: Define other paths relative to project root
set DIST_DIR=%PROJECT_ROOT%\dist
set KEY_FILE=%PROJECT_ROOT%\key.pem

:: Ensure dist directory exists
if not exist "%DIST_DIR%" mkdir "%DIST_DIR%"

:: Switch context to project root so pack_crx.py works relative to it (build_tmp creation etc.)
pushd "%PROJECT_ROOT%"

:: Run the python pack script
:: source is "." (project root)
:: output is to dist/...
python "%SCRIPTS_DIR%pack_crx.py" . "%DIST_DIR%\wikilink-helper.crx" --key "%KEY_FILE%"

if %ERRORLEVEL% EQU 0 (
    echo Build successful!
) else (
    echo Build failed with error code %ERRORLEVEL%
)

popd
endlocal
pause
